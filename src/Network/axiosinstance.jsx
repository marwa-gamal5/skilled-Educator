import axios from "axios";

export const axiosInstance = axios.create({

    baseURL : " http://192.168.11.100:8000"


})

export default axiosInstance;

