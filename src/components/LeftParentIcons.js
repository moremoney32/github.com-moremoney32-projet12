/***
 *
 * this component gives me information about my icons on the left of my screen
 */

import circle from "../images/circle.png";
import women from "../images/women.png";
import swim from "../images/swim.png";
import bike from "../images/bike.png";
import iron from "../images/iron.png";
import React from "react";
import { Link } from "react-router-dom";

export function LeftParentIcons() {
  const title = "copiryht,SportSee";
  return (
    <div className="parentIcons">
      <div className="icons">
        <Link to="/user/12">
          <div className="background">
            <div className="sous-background">
              <img src={circle} alt="" className="circle" />
              <img src={women} alt="" />
            </div>
          </div>
        </Link>
        <Link to="/user/18">
          <div className="background">
            <div className="sous-background">
              <img src={circle} alt="" className="circl" />
              <img src={swim} alt="" className="swim" />
            </div>
          </div>
        </Link>
        <Link to="/user/12">
          <div className="background">
            <div className="sous-background">
              <img src={bike} alt="" className="bike" />
            </div>
          </div>
        </Link>
        <Link to="/user/18">
          <div className="background">
            <div className="sous-background">
              <img src={iron} alt="" className="iron" />
            </div>
          </div>
        </Link>
      </div>
      <p className="title">{title}</p>
    </div>
  );
}
