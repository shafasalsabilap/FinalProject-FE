import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function MenuNav() {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
        <img className="logo-nav" alt="" src={require('../assets/Logo.png')}/>
          <NavLink exact to="/" className="nav-logo">
            OURFY
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink  exact to="/" activeClassName="active" className="nav-links" onClick={handleClick} >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Profile"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AboutUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Logout"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Logout
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuNav;