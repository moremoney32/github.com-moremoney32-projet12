import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/user",
});

export const getUserActivity = async (id) => {
  try {
    const res = await instance.get(`/${id}/activity`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserInfos = async (id) => {
  try {
    const res = await instance.get(`/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
