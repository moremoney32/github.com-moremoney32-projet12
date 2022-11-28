/****
 * this component shows the behavior of the calories and the weight of the user during his activity
 */

import React from "react";
import PropTypes from "prop-types";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function Barcharts({ dataActivity }) {
  function tickXaxis(value) {
    const TodayValue = value.split("");

    return Number(TodayValue[9]);
  }

  function Activity({ payload, active }) {
    if (active) {
      return (
        <div className="activityChartToolip">
          <div>{`${payload[0].value}`}kg</div>
          <div>{`${payload[1].value}`}Kcal</div>
        </div>
      );
    }
    return null;
  }
  const color = {
    background: "red",
    width: "50px",
    height: "50px",
    fontSize: "10px",
    overflow: "hidden",
    paddingRight: "10px",
    paddingLeft: "10px",
    border: "none",
  };
  return (
    <div className="activityWrap">
      <h2 className="activityChartTitle">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataActivity}
          margin={{
            top: 10,
            right: 5,
            left: 5,
            bottom: 10,
          }}
        >
          <CartesianGrid vertical="false" strokeDasharray="3" height={1} />
          <XAxis
            className="activityXAxis"
            dataKey="day"
            tickFormatter={tickXaxis}
            tickSize="0"
            tickMargin="25"
            stroke="#9B9EAC"
          />
          <YAxis
            dataKey="calories"
            yAxisId="left"
            orientation="left"
            hide="true"
          />
          <YAxis
            className="activityYAxis"
            dataKey="kilogram"
            yAxisId="right"
            orientation="right"
            type="number"
            domain={["dataMin -1", "dataMax"]}
            tickCount="3"
            tickSize="0"
            axisLine={false}
            tickMargin="30"
            width={45}
            stroke="#9B9EAC"
          />
          <Tooltip content={<Activity />} />
          <Legend
            verticalAlign="top"
            align="right"
            height={80}
            iconType="circle"
            iconSize={6}
            formatter={(value) => (
              <span className="activityLegendColor">{value}</span>
            )}
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            yAxisId="right"
            fill="#282D30"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
Barcharts.propTypes = {
  dataActivity: PropTypes.array.isRequired,
};
