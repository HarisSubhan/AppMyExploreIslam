// context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserRole = 'child' | 'parent' | 'admin' | null;

interface AuthContextType {
  userRole: UserRole;
  isLoading: boolean;
  login: (role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  userRole: null,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const savedRole = await AsyncStorage.getItem('userRole');
        if (savedRole) {
          setUserRole(savedRole as UserRole);
        }
      } catch (error) {
        console.error('Failed to load auth state', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAuthState();
  }, []);

 
  const login = async (role: 'child' | 'parent' | 'admin') => {
    try {
      await AsyncStorage.setItem('userRole', role);
      setUserRole(role);
    } catch (error) {
      console.error('Failed to save auth state', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userRole');
      setUserRole(null);
    } catch (error) {
      console.error('Failed to remove auth state', error);
    }
  };

  return (
    <AuthContext.Provider value={{ userRole, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);