const Auth = {
  token: "",
  getToken: function (): string {
    return this.token;
  },

  setToken: function (token: string) {
    if (!token) {
      this.token = token;
    }
  },

  clearToken: function (): undefined {
    this.token = "";
  },
};

export const AUTH = Auth;