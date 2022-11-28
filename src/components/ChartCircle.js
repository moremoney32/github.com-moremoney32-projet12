/***
 * this component shows the daily goal record
 */

import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types";

export function ChartCircle({ data, dataScore, dataToday }) {
  function calculatePercentScore(dataScore) {
    const score = Number(dataScore);

    return Math.round(score * 100);
  }
  const scorePercent = calculatePercentScore(dataScore);
  return (
    <div className="scoretoday">
      <p className="scoretodaytitle">Score</p>
      <div className="score">
        <span className="scoreResult">
          {dataScore ? scorePercent : dataToday * 100}%
        </span>
        <span className="scoreText">
          de votre
          <br />
          objectif
        </span>
      </div>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="100%"
        data={data}
        width={150}
        height={150}
        style={{
          transform: "translate(-5px,15px)",
          rotate: "-100deg",
        }}
      >
        <RadialBar
          minAngle={15}
          dataKey="score"
          fill="#FF0000"
          // cornerRadius={15}
          barSize={10}
        />
        <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
        <circle cx="50%" cy="50%" fill="white" r="55"></circle>
      </RadialBarChart>
    </div>
  );
}
ChartCircle.propTypes = {
  data: PropTypes.array.isRequired,
  dataToday: PropTypes.number.isRequired,
};
