import { CONFIG } from "./config/config";
import { getUser, login, sendOtp } from "./service/user";
import { getCommonHeaders } from "./util/common";

import { AUTH } from "./auth/auth";
import { getMeetings } from "./service/meetings";
const UTIL = { getCommonHeaders };

const USER_SERVICE = {
  getUser,
  sendOtp,
  login,
};
const MEETING_SERVICE = {
  getMeetings
};

export * from "./types";
export { UTIL, CONFIG, USER_SERVICE, MEETING_SERVICE, AUTH };
