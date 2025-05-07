import axios from "axios";
import axiosRetry from "axios-retry";
import { requestLogger, responseLogger } from "axios-logger";
import useAuthStore from "@stores/auth.store";

const BASE_URL = import.meta.env.VITE_API_URL;
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosRetry(apiClient, { retries: 3 });

apiClient.interceptors.request.use(requestLogger);
apiClient.interceptors.response.use(responseLogger);

export default apiClient;
