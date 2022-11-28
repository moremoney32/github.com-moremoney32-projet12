/**
 * this component gives me information about the person who establishes performances
 */

import felicitation from "../images/felicitation.png";
import React from "react";
import PropTypes from "prop-types";
export function TitreBarchart({ firstname }) {
  return (
    <div className="headerBarchart">
      <div className="titrehome">
        <h1 className="mainTitre">Bonjour</h1>
        <h1 className="nameTitre">{firstname}</h1>
      </div>
      <img src={felicitation} alt="" className="felicitation" />
    </div>
  );
}
TitreBarchart.propTypes = {
  firstname: PropTypes.string.isRequired,
};
