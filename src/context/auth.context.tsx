import React from "react";

import { User, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useEffect, useMemo } from "react";
import { auth } from "../firebase/firebase";
import { AuthStore } from "../store/AuthStore";
import { Loader } from "../ui/Loader/Loader";

interface AuthContextState {
  user: User;
}

export const ProviderContext = createContext<AuthContextState>({
  user: {} as User,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, setUser, isLoading, setIsLoading } = AuthStore();
  const value = useMemo(() => ({ user }), [user]);

  console.log(user);

  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({} as User);
      }

      setIsLoading(false);
    });
  }, [setUser, setIsLoading]);

  return (
    <ProviderContext.Provider value={value}>
      {isLoading ? <Loader /> : children}
    </ProviderContext.Provider>
  );
};
