import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Signup() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8002/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, userName, email, password }),
        credentials: 'include',
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert("Signed up successfully!");
        console.log('New user data:', data);
      } else {
        alert("Error: " + (data.message || 'Signup failed'));
      }
    } catch (error) {
      console.error('Error during signup', error);
      alert('Failed to connect to backend.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">SocialApp</div>
        <p className="auth-subtitle">Sign up to see photos and videos from your friends.</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name"
              placeholder="Enter your full name"
              value={name} 
              onChange={e => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="userName">Username</label>
            <input 
              type="text" 
              id="userName"
              placeholder="Choose a username"
              value={userName} 
              onChange={e => setUserName(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Enter your email"
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              placeholder="Create a password"
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <div className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
