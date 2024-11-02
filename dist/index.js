"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AUTH: () => AUTH,
  CONFIG: () => CONFIG,
  USER_SERVICE: () => USER_SERVICE,
  UTIL: () => UTIL
});
module.exports = __toCommonJS(src_exports);

// src/config/config.ts
var CONFIG = {
  BASE_URL: "https://52.66.178.23:8082",
  token: ""
};

// src/service/user.ts
var import_axios = __toESM(require("axios"));

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
  const response = await import_axios.default.get(`${BASE_URL}/user/fetchCurrentUser`, {
    headers: getCommonHeaders()
  });
  return response.data;
};
var sendOtp = async (mobile) => {
  const response = await import_axios.default.post(
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
  const response = await import_axios.default.post(`${BASE_URL}/auth/login`, payload, {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AUTH,
  CONFIG,
  USER_SERVICE,
  UTIL
});
