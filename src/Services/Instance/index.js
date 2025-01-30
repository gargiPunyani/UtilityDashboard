import axios from "axios";

const baseUrl = "https://soft.delhitech.in/app/";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  }
});
axiosInstance.interceptors.request.use(
  (config) => {
    const api_token = localStorage.getItem("token",true);
    if (api_token) {
      config.headers.Authorization = `Bearer${api_token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
export default axiosInstance
