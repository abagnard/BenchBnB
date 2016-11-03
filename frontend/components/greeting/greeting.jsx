import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up!</Link>
  </nav>
);

const personalGreeting = ( currentUser, logout ) => (
  <div>
    <h2 className="header-name">Hi {currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Logout</button>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
