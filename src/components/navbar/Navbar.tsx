// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>User Management</h2>
      <div className="nav-links">
        <Link to="/">View Users</Link>
        <Link to="/add">Create User</Link>
      </div>
    </nav>
  );
}

export default Navbar;
