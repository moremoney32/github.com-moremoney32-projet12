import circle from "../images/circle.png";
import women from "../images/women.png";
import swim from "../images/swim.png";
import bike from "../images/bike.png";
import iron from "../images/iron.png";
import React from "react";

export function ParentIcons() {
  const title = "copiryht,SportSee";
  return (
    <div className="parentIcons">
      <div className="icons">
        <div className="background">
          <div className="sous-background">
            <img src={circle} alt="" className="circle" />
            <img src={women} alt="" />
          </div>
        </div>
        <div className="background">
          <div className="sous-background">
            <img src={circle} alt="" className="circl" />
            <img src={swim} alt="" className="swim" />
          </div>
        </div>
        <div className="background">
          <div className="sous-background">
            <img src={bike} alt="" className="bike" />
          </div>
        </div>
        <div className="background">
          <div className="sous-background">
            <img src={iron} alt="" className="iron" />
          </div>
        </div>
      </div>
      <p className="title">{title}</p>
    </div>
  );
}
