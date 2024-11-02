import { CONFIG } from "./config/config";
import { getUser, login, sendOtp } from "./service/user";
import { getCommonHeaders } from "./util/common";

import { AUTH } from "./auth/auth";
const UTIL = { getCommonHeaders };

const USER_SERVICE = {
  getUser,
  sendOtp,
  login,
};
export * from "./types";
export { UTIL, CONFIG, USER_SERVICE, AUTH };
