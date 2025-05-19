import { createContext } from "react";

export interface AuthContext {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  user: string | null;
}

export const AuthContext = createContext<AuthContext | null>(null);
