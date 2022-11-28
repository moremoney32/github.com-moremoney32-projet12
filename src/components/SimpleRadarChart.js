/***
 * this component gives me information about my score in the form of diagrams
 */

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export function SimpleRadarChart({ data }) {
  function tickFormatter(kind) {
    switch (kind) {
      case 1:
        return "intensity";
      case 2:
        return "speed";
      case 3:
        return "strength";
      case 4:
        return "endurance";
      case 5:
        return "energy";
      case 6:
        return "cardio";
      default:
        return null;
    }
  }

  return (
    <div className="SimpleRadarChart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="60%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#ffffff"
            tickFormatter={tickFormatter}
            tickLine={false}
            tick={{ fontSize: 12, fontWeight: 500 }}
          />
          <Radar
            dataKey="value"
            stroke="#8884d8"
            fill="#E60000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
SimpleRadarChart.propTypes = {
  data: PropTypes.array.isRequired,
};
