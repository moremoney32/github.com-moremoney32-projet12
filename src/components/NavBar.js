import React from "react";
import { NavLink } from "react-router-dom";
export function NavBar({ logos }) {
  return (
    <div className="navbar">
      <img src={logos} alt="" className="logos" />
      <nav>
        <ul className="navul">
          {/* <NavLink to="#"> */}
          <li>Accueil</li>
          {/* </NavLink> */}
          <li>Profil</li>
          <li>Reglage</li>
          <li>Communaute</li>
        </ul>
      </nav>
    </div>
  );
}
