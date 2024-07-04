import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://6a4f-168-131-35-101.ngrok-free.app",
  headers: {
    'Access-Control-Allow-Credentials': true,
    'ngrok-skip-browser-warning': true,
  },
})