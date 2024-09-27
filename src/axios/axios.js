import axios from "axios";
import { stringManager } from "../const";
const axiosInstance = axios.create({
    baseURL: stringManager.apiGetPopularMovies,
    params: {
        Limit: 5,
        api_key: stringManager.apiKey,

    }
});
export default axiosInstance;