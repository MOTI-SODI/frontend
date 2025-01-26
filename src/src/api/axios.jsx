import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://54.180.245.227:8080",
  withCredentials: true,
});

export default axiosInstance;
