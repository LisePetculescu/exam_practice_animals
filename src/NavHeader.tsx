
import { NavLink } from "react-router-dom";
import "./navHeader.css";

export default function NavHeader() {
  return (
    <nav className="navbar navbar-style">
      <ul className="navbar-list">
        <div className="navbar-items">
          <li>
            <NavLink to="/">Animals</NavLink>
            <NavLink to="/trophy">Manage trophies</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}