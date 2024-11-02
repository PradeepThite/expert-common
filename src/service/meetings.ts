import axios from "axios";
import { CONFIG } from "../config/config";
import { getCommonHeaders } from "../util/common";

const { BASE_URL } = CONFIG;

export const getMeetings = async (payload: any) => {
  const response = await axios.post(`${BASE_URL}/expert/meetings`, payload, {
    headers: getCommonHeaders(),
  });
  return response.data;
};

export const jwtInterceptor = (token: string) => {
  axios.interceptors.request.clear();
  axios.interceptors.request.use(async (request) => {
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    } else {
      console.error("---- Wrong user stored..");
    }
    return request;
  });
};
