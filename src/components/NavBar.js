/***
 *
this component is a horizontal navbar that allows you to navigate between the different screens of my application
 */
import { NavLink } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
export function NavBar({ logos }) {
  return (
    <div className="navbar">
      <img src={logos} alt="" className="logos" />
      <nav>
        <ul className="navul">
          <NavLink to="/" className="navlink">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="#" className="navlink">
            <li>Profil</li>
          </NavLink>
          <NavLink to="#" className="navlink">
            <li>Reglage</li>
          </NavLink>
          <NavLink to="#" className="navlink">
            <li>Communaute</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  logos: PropTypes.string.isRequired,
};
