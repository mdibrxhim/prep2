import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would typically handle logout logic
    navigate('/auth');
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>🔥 DASH</h2>
        <nav>
          <a href="#" className="active">Dashboard</a>
          <a href="#">Analytics</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <h1>Welcome, User</h1>
          <div className="btn-group">
            <button className="btn logout" onClick={handleLogout}>Logout</button>
          </div>
        </header>

        <section className="cards">
          <div className="card">
            <h3>💰 Revenue</h3>
            <p>$12,000</p>
          </div>
          <div className="card">
            <h3>📈 Growth</h3>
            <p>25%</p>
          </div>
          <div className="card">
            <h3>👥 Users</h3>
            <p>1,250</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard; 