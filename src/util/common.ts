import { AUTH } from "../auth/auth";

export const getCommonHeaders = (): {
  "Content-Type": string;
  Authorization: string;
} => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTH.getToken()}`,
  };
};
