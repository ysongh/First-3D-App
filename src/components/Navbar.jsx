import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/example" style={{ marginRight: "1rem" }}>Example</Link>
      <Link to="/rain">Example2</Link>
    </div>
  )
}

export default Navbar;