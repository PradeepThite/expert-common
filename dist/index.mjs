// src/config/config.ts
var CONFIG = {
  BASE_URL: "https://52.66.178.23:8082",
  token: ""
};

// src/service/user.ts
import axios from "axios";

// src/auth/auth.ts
var Auth = {
  token: "",
  getToken: function() {
    return this.token;
  },
  setToken: function(token) {
    if (!token) {
      this.token = token;
    }
  },
  clearToken: function() {
    this.token = "";
    return void 0;
  }
};
var AUTH = Auth;

// src/util/common.ts
var getCommonHeaders = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTH.getToken()}`
  };
};

// src/service/user.ts
var { BASE_URL } = CONFIG;
var getUser = async () => {
  const response = await axios.get(`${BASE_URL}/user/fetchCurrentUser`, {
    headers: getCommonHeaders()
  });
  return response.data;
};
var sendOtp = async (mobile) => {
  const response = await axios.post(
    `${BASE_URL}/auth/sendOtp`,
    mobile,
    {
      headers: {
        "Content-Type": "text/plain"
      }
    }
  );
  return response;
};
var login = async (payload) => {
  console.log(payload);
  const response = await axios.post(`${BASE_URL}/auth/login`, payload, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.data;
};

// src/index.ts
var UTIL = { getCommonHeaders };
var USER_SERVICE = {
  getUser,
  sendOtp,
  login
};
export {
  AUTH,
  CONFIG,
  USER_SERVICE,
  UTIL
};
