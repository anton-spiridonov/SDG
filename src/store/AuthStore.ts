import { User } from "firebase/auth";
import { create } from "zustand";

interface AuthState {
  isLoading: boolean;
  error: string;
  user: User;
  setIsLoading: (value: boolean) => void;
  setError: (value: string) => void;
  setUser: (user: User) => void;
}

export const AuthStore = create<AuthState>((set) => ({
  isLoading: false,
  error: "",
  user: {} as User,
  setIsLoading: (isLoading: boolean) =>
    set((state) => {
      return { ...state, isLoading };
    }),
  setError: (error: string) =>
    set((state) => {
      return { ...state, error };
    }),
  setUser: (user: User) =>
    set((state) => {
      return { ...state, user };
    }),
}));
