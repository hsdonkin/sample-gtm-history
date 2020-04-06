import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/browse">Browse</Link>
    <Link to="/what-we-do">What We Do</Link>
  </div>
);

export default Navbar;
