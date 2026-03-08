'use client';

import { redirect } from 'next/dist/server/api-utils';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    setIsAuthenticated(!!userToken);
    setMounted(true);
  }, []);

  const login = () => {
    localStorage.setItem('userToken', 'logged-in');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    setIsAuthenticated(false);
    redirect('/');
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
}
