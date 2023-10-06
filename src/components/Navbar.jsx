import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/example">Example</Link>
    </div>
  )
}

export default Navbar;