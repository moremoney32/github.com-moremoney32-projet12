import React from "react";
import { useParams } from "react-router-dom";
import { Barcharts } from "../components/Barcharts.js";
import { SessionDurationCharts } from "../components/SessionDurationCharts.js";
import { TitreBarchart } from "../components/TitreBarchart.js";
import { SimpleRadarChart } from "../components/SimpleRadarChart.js";
import { ChartCircle } from "../components/ChartCircle.js";
import { Nutrition } from "../components/Nutrition.js";
import { NoFound } from "../components/NoFound.js";
import Path from "../images/Path.png";
import bleuePath from "../images/bleuePath.png";
import orangePath from "../images/orangePath.png";
import rose from "../images/rose.png";

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../dataMocked";

export function User() {
  const colorsblue = {
    backgroundColor: "#e9f4fB",
  };
  const coloryellow = {
    backgroundColor: "#fbf6c5",
  };
  const colorrose = {
    backgroundColor: "#fbcqef",
    opacity: 0.5,
    fontSize: 15,
  };

  const params = useParams();
  const id = parseInt(params.id);

  const currentUserData = USER_MAIN_DATA.find((userData) => userData.id === id);

  const { userInfos, todayScore, score, keyData } = currentUserData;

  const currentUserActivity = USER_ACTIVITY.find(
    (userActivity) => userActivity.userId === id
  );

  const { sessions } = currentUserActivity;

  const currentUserSessionDuration = USER_AVERAGE_SESSIONS.find(
    (userSessionDuration) => userSessionDuration.userId === id
  );

  const { Sessions } = currentUserSessionDuration;

  const currentUserPerformance = USER_PERFORMANCE.find(
    (userPerformance) => userPerformance.userId === id
  );

  const { data } = currentUserPerformance;
  return (
    <div className="home">
      <TitreBarchart firstname={userInfos.firstName} />
      <div className="activityChart">
        <Barcharts dataActivity={sessions} />
      </div>
      <div className="horizontalgraphics">
        <div className="sessionDuration">
          <SessionDurationCharts dataSessionDuration={Sessions} />
        </div>
        <div className="perfomance">
          <SimpleRadarChart data={data} />
        </div>
        <div className="circlescore">
          <ChartCircle
            data={USER_MAIN_DATA}
            dataScore={score}
            dataToday={todayScore}
          />
        </div>
      </div>
      <div className="parentblocnutrition">
        <Nutrition
          imgPath={Path}
          keyData={[`${keyData.calorieCount}`, "KCal"]}
          textnutrition="Calories"
        />
        <Nutrition
          imgPath={bleuePath}
          keyData={[`${keyData.proteinCount}`, "g"]}
          textnutrition="Proteines"
          background={colorsblue}
        />
        <Nutrition
          imgPath={orangePath}
          keyData={[`${keyData.carbohydrateCount}`, "g"]}
          textnutrition="Glucides"
          background={coloryellow}
        />
        <Nutrition
          imgPath={rose}
          keyData={[`${keyData.lipidCount}`, "g"]}
          textnutrition="Lipides"
          background={colorrose}
        />
      </div>
    </div>
  );
}
