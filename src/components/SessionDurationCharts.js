/***
 *
 * this component gives me information about the average duration of sessions
 */

import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

export function SessionDurationCharts({ dataSessionDuration }) {
  function SessionDuration({ payload, active }) {
    if (active) {
      return (
        <div className="DurationChartTooltip">
          <div>{`${payload[0].value}`}min</div>
        </div>
      );
    }
    return null;
  }

  function tickFormatter(day) {
    switch (day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return "";
    }
  }
  return (
    <div className="session">
      <p className="sessionTitle">Duree moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataSessionDuration}
          margin={{
            top: 80,
            right: 8,
            left: 8,
            bottom: 40,
          }}
        >
          <CartesianGrid horizontal={false} vertical={false} />
          <XAxis
            dataKey="day"
            type="category"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fontWeight: 500 }}
            tickFormatter={tickFormatter}
            stroke="rgba(255, 255, 255, 0.5)"
            tickMargin={40}
          />
          <YAxis hide="true" domain={["dataMin", "dataMax"]} />
          <Tooltip content={SessionDuration} />
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="#FFFFFF"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
SessionDurationCharts.propTypes = {
  dataSessionDuration: PropTypes.array.isRequired,
};
