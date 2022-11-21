import Oval from "../images/Oval.png";
import circle from "../images/circle.png";

export function StyleBar() {
  return (
    <div className="navStyleBar">
      <span className="Activicte">Activicte quotidienne</span>
      <div className="ParentsinfosUtilisateurs">
        <div span className="infosUtilisateurs">
          <img src={Oval} alt="" className="" />
          <span>Poids (Kcal)</span>
        </div>
        <div span className="infosUtilisateurs">
          <img src={circle} alt="" className="" />
          <span>Calories brûlées (kCal)</span>
        </div>
      </div>
    </div>
  );
}
