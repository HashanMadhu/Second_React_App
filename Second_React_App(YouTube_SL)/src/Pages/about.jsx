import React from 'react';
import { Link } from 'react-router-dom';

export default function about() {
  return (
    <div>
      <h1>This is the About page</h1>
      <Link to="/">Go back to Home</Link>
    </div>
    
  );
}
