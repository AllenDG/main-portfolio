// src/store/useAuthStore.ts
import { create } from 'zustand';
import {jwtDecode} from 'jwt-decode';

// Define your decoded JWT payload structure
export interface DecodedToken {
  email: string;
  exp: number;
  iat?: number;
  role?: string;
}

// Zustand store interface
interface AuthState {
  token: string | null;
  user: DecodedToken | null;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,

  setToken: (token: string) => {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      const isExpired = decoded.exp * 1000 < Date.now();

      if (isExpired) {
        set({ token: null, user: null });
      } else {
        set({ token, user: decoded });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('JWT decoding failed:', error.message);
      } else {
        console.error('JWT decoding failed with unknown error.');
      }

      set({ token: null, user: null });
    }
  },

  logout: () => set({ token: null, user: null }),
}));
