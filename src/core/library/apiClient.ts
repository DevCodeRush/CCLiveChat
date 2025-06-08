import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getAuthToken } from './storage';
import { apiConfig } from './config';

// Interface for apiClient options
export interface ApiClientOptions {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

/**
 * Creates an axios instance with the provided options
 * @param options - Configuration options for the axios instance
 * @returns An axios instance configured with the provided options
 */
export const createApiClient = (options?: ApiClientOptions): AxiosInstance => {
  // Merge provided options with default config
  const config = {
    baseURL: options?.baseURL || apiConfig.baseURL,
    timeout: options?.timeout || apiConfig.timeout,
    headers: {
      ...apiConfig.headers,
      ...options?.headers,
    },
  };

  // Create a new axios instance with the merged config
  const instance = axios.create(config);

  // Request interceptor to attach Bearer token when available
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getAuthToken();

      // If token exists, attach it to the Authorization header
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor can be added here if needed
  // instance.interceptors.response.use(...);

  return instance;
};

// Create a default instance with the default config
const apiClient: AxiosInstance = createApiClient();

export default apiClient;
