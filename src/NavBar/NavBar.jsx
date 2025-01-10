import "./NavBar.css";
import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/projects" className="link">
        Projects
      </Link>
      <Link to="/contact" className="link">
        Contact
      </Link>
    </div>
  );
}
