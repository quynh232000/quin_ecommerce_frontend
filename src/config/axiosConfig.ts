import axios from "axios";
import { REACT_APP_API_URL } from "./Contant";
// let token = localStorage.getItem("USER_TOKEN") ?? "";
// token = token ? token.replace(/"/g, "") : "";
const request = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("USER_TOKEN");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const FETCHDATA = async (
  method: "get" | "post" | "patch" | "put" | "delete",
  path: string,
  options = {}
) => {
  try {
    const response = await request[method](path, options);
    return {...response.data,statusCode:response.status};
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return {...error.response.data,statusCode:error.response.status}
    }
    return {
      status: false,
      statusCode:500,
      data: null,
      message: "Hệ thống đang trong bảo trì! Vui lòng thử lại sau.",
    };
  }
};

export const POSTASYNC = async (
    path: string,
    options = {},
    token_: string
  ) => {
    try {
        const response = await axios
        .create({
          baseURL: REACT_APP_API_URL,
          headers: {
            Authorization: `Bearer ${token_}`,
          },
        }).post(path, options);
      return {...response.data,statusCode:response.status};
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return {...error.response.data,statusCode:error.response.status}
      }
      return {
        status: false,
        statusCode:500,
        data: null,
        message: "Hệ thống bị lỗi hoặc đang trong bảo trì! Vui lòng thử lại",
      };
    }
  };