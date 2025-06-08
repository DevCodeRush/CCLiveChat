import { MMKV } from 'react-native-mmkv';

// Create a storage instance
export const storage = new MMKV();

// Keys for storage
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
};

/**
 * Get the authentication token from storage
 * @returns The authentication token or null if not found
 */
export const getAuthToken = (): string | null => {
  return storage.getString(STORAGE_KEYS.AUTH_TOKEN) || null;
};

/**
 * Set the authentication token in storage
 * @param token The token to store
 */
export const setAuthToken = (token: string): void => {
  storage.set(STORAGE_KEYS.AUTH_TOKEN, token);
};

/**
 * Remove the authentication token from storage
 */
export const removeAuthToken = (): void => {
  storage.delete(STORAGE_KEYS.AUTH_TOKEN);
};
