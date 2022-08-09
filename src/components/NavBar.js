import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
      <Link to="/choices/rockAndRoll">This choice</Link>
      </li>
      <li>
      <Link to="/news">The latest news</Link>
      </li>
    </ul>
  );
}

export default NavBar;
