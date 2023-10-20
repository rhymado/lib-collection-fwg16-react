import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_HOST + "/auth";

export const login = (body) => {
  return axios.post(baseURL, body);
};

export const register = (body) => {
  const registerURL = baseURL + "/register";
  return axios.post(registerURL, body);
};
