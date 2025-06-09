import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth?mode=login');
  };

  const handleSignup = () => {
    navigate('/auth?mode=signup');
  };

  return (
    <div className="home">
      <header className="header">
        <div className="logo">JPMC</div>
        <nav className="nav-buttons">
          <button className="btn login" onClick={handleLogin}>Login</button>
          <button className="btn signup" onClick={handleSignup}>Sign Up</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to JPMC Dashboard</h1>
          <p>Your all-in-one solution for business analytics and management</p>
          <button className="btn cta" onClick={handleSignup}>Get Started</button>
        </div>
      </section>

      <section className="about">
        <div className="about-content">
          <h2>About Our Platform</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Get detailed insights into your business performance with our powerful analytics tools.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📈</div>
              <h3>Real-time Monitoring</h3>
              <p>Monitor your business metrics in real-time with our intuitive dashboard.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Secure Platform</h3>
              <p>Your data is protected with enterprise-grade security measures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 