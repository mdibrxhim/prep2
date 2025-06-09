const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new user - DATA STORAGE POINT 1: User Registration
    const user = new User({
      name,
      email,
      password,
      lastLogin: new Date(),
      loginHistory: [{
        timestamp: new Date(),
        ipAddress: req.ip,
        userAgent: req.headers['user-agent']
      }]
    });

    // Save user to MongoDB - DATA STORAGE POINT 2: Save to Database
    await user.save();
    console.log('New user registered:', { email, name });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your_jwt_secret_key_here',
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'Registration successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user - DATA RETRIEVAL POINT 1: Get User from Database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Email not registered' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Update login history - DATA STORAGE POINT 3: Update Login History
    await user.updateLoginHistory(req.ip, req.headers['user-agent']);
    console.log('User logged in:', { email, lastLogin: user.lastLogin });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your_jwt_secret_key_here',
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        lastLogin: user.lastLogin
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error during login' });
  }
});

// Get user login history (protected route)
router.get('/login-history', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key_here');
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      lastLogin: user.lastLogin,
      loginHistory: user.loginHistory
    });
  } catch (error) {
    console.error('Error fetching login history:', error);
    res.status(500).json({ message: 'Error fetching login history' });
  }
});

module.exports = router; 