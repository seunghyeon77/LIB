import axios from "axios";

axios.defaults.withCredentials = true;

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "withCredentials": true,
    "Access-Control-Allow-Credentials": true,
    "ngrok-skip-browser-warning": true,
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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;  

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        console.log(refreshToken)
        const response = await axiosInstance.post("/members/refresh", { refreshToken });

        if (response.status === 200) {
          const reAccessToken = response.data.accessToken;
          localStorage.setItem("accessToken", reAccessToken);

          originalRequest.headers.Authorization = `Bearer ${reAccessToken}`;
          return axiosInstance(originalRequest);  
        }
      } catch (err) {
        console.error(err);
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("refreshToken");
        alert('로그아웃 되었습니다.');
        window.location.href = "/log-in";
      } 
    }
  }
);