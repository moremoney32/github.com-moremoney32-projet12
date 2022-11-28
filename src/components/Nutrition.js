/***
 * 
 * 
this component gives me key information on map shape like proteins
 */

import PropTypes from "prop-types";
import React from "react";
export function Nutrition({ imgPath, textnutrition, keyData, background }) {
  return (
    <div className="blocNutrition">
      <div className="blocNutritionimg" style={background}>
        <img src={imgPath} alt="" className="img" />
      </div>
      <div className="blocNutritioncaloriestext">
        <span className="blocNutritioncalories">{keyData}</span>
        <span className="blocNutritiontext">{textnutrition}</span>
      </div>
    </div>
  );
}
Nutrition.propTypes = {
  imgPath: PropTypes.string.isRequired,
  textnutrition: PropTypes.string.isRequired,
  keyData: PropTypes.array.isRequired,
};
