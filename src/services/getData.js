import { getUserInfos } from "./Apicall.js";
import { getUserActivityById } from "./Apicall.js";
import { getUserPerformance } from "./Apicall.js";
import { getUserAverageSession } from "./Apicall.js";

export const getUserData = async (type, id) => {
  let data = [];

  switch (type) {
    case "USER_ACTIVITY":
      data = await getUserActivityById(id);
      break;
    case "USER_PERFORMANCE":
      data = await getUserPerformance(id);
      break;
    case "USER_AVERAGE_SESSIONS":
      data = await getUserAverageSession(id);
      break;
    case "USER_MAIN_DATA":
      data = await getUserInfos(id);
      break;
  }
  return data;
};
