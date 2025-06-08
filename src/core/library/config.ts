/**
 * Configuration file for API and other global settings
 */

// API Configuration
export const apiConfig = {
  // Default base URL for API requests
  baseURL: 'https://api.example.com',

  // Timeout in milliseconds
  timeout: 30000,

  // Default headers
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const oktaAuthUrl = 'https://aia-th-oie-uat.okta.com'


// Function to set a custom base URL
export const setApiBaseURL = (url: string): void => {
  apiConfig.baseURL = url;
};

// Function to get the current base URL
export const getApiBaseURL = (): string => {
  return apiConfig.baseURL;
};
