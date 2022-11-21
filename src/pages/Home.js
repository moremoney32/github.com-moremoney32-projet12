//import { MainHeader } from "../components/MainHeader.js";
// import { NoFound } from "../components/NoFound.js";
import { USER_MAIN_DATA } from "../data.js";
import { USER_ACTIVITY } from "../data.js";
import felicitation from "../images/felicitation.png";
import React from "react";
import { useParams } from "react-router-dom";
import { StyleBar } from "../components/StyleBar.js";
import { Barcharts } from "../components/Barcharts.js";
// import { Bar } from "recharts";
// import React, { useEffect, useState } from "react";
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

export function Home() {
  console.log(USER_MAIN_DATA);
  console.log(USER_ACTIVITY);
  const params = useParams();
  console.log(params);
  const id = parseInt(params.id);
  console.log(id);
  const uniqueId = USER_MAIN_DATA.find((usermain) => usermain.id === id);
  console.log(uniqueId);
  const { userInfos } = uniqueId;
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 3000,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //   },
  // ];

  const session = [
    {
      day: "2020-07-01",
      kilogram: 80,
      calories: 240,
    },
    {
      day: "2020-07-02",
      kilogram: 80,
      calories: 220,
    },
    {
      day: "2020-07-03",
      kilogram: 81,
      calories: 280,
    },
    {
      day: "2020-07-04",
      kilogram: 81,
      calories: 290,
    },
    {
      day: "2020-07-05",
      kilogram: 80,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 78,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 76,
      calories: 390,
    },
  ];
  console.log(USER_ACTIVITY);

  return (
    <div className="home">
      <div className="titrehome">
        <h1 className="mainTitre">Bonjour</h1>
        <h1 className="nameTitre">{userInfos.firstName}</h1>
      </div>
      <img src={felicitation} alt="" className="felicitation" />
      <div className="barchart">
        <div className="stylebar">
          <StyleBar />
        </div>
        <Barcharts />
      </div>
    </div>
  );
}
