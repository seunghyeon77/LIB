import axios from "axios";

axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    // "withCredentials": true,
    "Access-Control-Allow-Credentials": true,
    "ngrok-skip-browser-warning": true,
    // "Accept": "application/json, text/plain",
  },
  mode: "cors"
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

