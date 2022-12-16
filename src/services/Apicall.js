import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../dataMocked.js";

export const getUserInfos = (id) =>
  USER_MAIN_DATA.filter((user) => user.id === id).shift();

/**
 * @param {number} id
 */
export const getUserActivityById = (id) =>
  USER_ACTIVITY.filter((userActivity) => userActivity.userId === id).shift();

/**
 * @param {number} id
 */
export const getUserAverageSession = (id) =>
  USER_AVERAGE_SESSIONS.filter(
    (userActivity) => userActivity.userId === id
  ).shift();

/**
 * @param {number} id
 */
export const getUserPerformance = (id) =>
  USER_PERFORMANCE.filter(
    (userPerformance) => userPerformance.userId === id
  ).shift();
