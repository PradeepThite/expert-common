import * as axios from 'axios';

type userName = {
    name: String;
};
type ILogin = {
    mobileNumber: number;
    password: number;
};

declare const CONFIG: {
    BASE_URL: string;
    token: string;
};

declare const AUTH: {
    token: string;
    getToken: () => string;
    setToken: (token: string) => void;
    clearToken: () => undefined;
};

declare const UTIL: {
    getCommonHeaders: () => {
        "Content-Type": string;
        Authorization: string;
    };
};
declare const USER_SERVICE: {
    getUser: () => Promise<any>;
    sendOtp: (mobile: number) => Promise<axios.AxiosResponse<axios.AxiosResponse<any, any>, any>>;
    login: (payload: ILogin) => Promise<any>;
};
declare const MEETING_SERVICE: {
    getMeetings: (payload: any) => Promise<any>;
};

export { AUTH, CONFIG, type ILogin, MEETING_SERVICE, USER_SERVICE, UTIL, type userName };
