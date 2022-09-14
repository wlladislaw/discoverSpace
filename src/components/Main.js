import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="main">
      <h1 style={{ margin: '120px' }}> Discover Space!</h1>
      <div>
        <Link className="main-link" to="/content">Today! </Link>
        <Link className="main-link" to="/past"> In the past </Link>
      </div>
    </div>
  );
}
