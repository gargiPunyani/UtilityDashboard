import axios from "axios";

const baseUrl = "https://soft.delhitech.in/api/app/";
                
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
  },
});
try {
  instance.interceptors.request.use((config) => {
    const api_token = localStorage.getItem("token", true);
    if (api_token) {
      config.headers.Authorization = `Bearer${api_token}`;
    }
    return config;
  });
} catch (error) {
  console.log(error);
  // return Promise.reject(error);
}

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
export default instance;
