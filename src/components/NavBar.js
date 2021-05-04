import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <nav>
          <label htmlFor="drop" className="toggle toogle-2">
            Menu
          </label>
          <input type="checkbox" id="drop" />
          <ul className="menu">
            <li className="active">
            <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                homepage
              </NavLink>
            </li>
            <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
            <NavLink
                exact
                to="/portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                portfolio
              </NavLink>
            </li>
            <li className="ml-lg-4 ml-md-3 my-md-0 my-2">
            <NavLink
                exact
                to="/resume"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                resumé
              </NavLink>
            </li>
            <li className="ml-lg-4 ml-md-3 my-md-0 my-2">
            <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                img
              </NavLink>
            </li>
            <li className="ml-lg-4 ml-md-3 my-md-0 my-2">
            <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
    </>
  );
}

export default Navigation;
