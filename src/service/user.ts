import axios, { AxiosResponse } from "axios";
import { CONFIG } from "../config/config";
import { getCommonHeaders } from "../util/common";
import { ILogin } from "../types";

const { BASE_URL } = CONFIG;

export const getUser = async () => {
  const response = await axios.get(`${BASE_URL}/user/fetchCurrentUser`, {
    headers: getCommonHeaders(),
  });
  return response.data;
};

export const sendOtp = async (mobile: number) => {
  const response = await axios.post<AxiosResponse>(
    `${BASE_URL}/auth/sendOtp`,
    mobile,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
  return response;
};

export const login = async (payload: ILogin) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
