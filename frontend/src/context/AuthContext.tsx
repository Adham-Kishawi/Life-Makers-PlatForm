"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Volunteer } from "@/types";
import { INITIAL_VOLUNTEER } from "@/data/mockVolunteer";

export type UserRole = "volunteer" | "committee_manager" | "super_admin";

export interface AuthUser extends Volunteer {
  role: UserRole;
}

interface AuthContextType {
  user: AuthUser | null;
  isLoggedIn: boolean;
  login: (nationalIdOrEmail: string, password?: string, role?: UserRole) => boolean;
  logout: () => void;
  updateUser: (updated: Partial<AuthUser>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("life_makers_user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const login = (nationalIdOrEmail: string, password?: string, role: UserRole = "volunteer") => {
    const newUser: AuthUser = {
      ...INITIAL_VOLUNTEER,
      name: nationalIdOrEmail.includes("@") ? nationalIdOrEmail.split("@")[0] : "أحمد كشاوي",
      email: nationalIdOrEmail.includes("@") ? nationalIdOrEmail : "volunteer@lifemakers.org",
      role: role,
    };
    setUser(newUser);
    try {
      localStorage.setItem("life_makers_user", JSON.stringify(newUser));
    } catch (e) {}
    return true;
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("life_makers_user");
    } catch (e) {}
  };

  const updateUser = (updated: Partial<AuthUser>) => {
    if (!user) return;
    const merged = { ...user, ...updated };
    setUser(merged);
    try {
      localStorage.setItem("life_makers_user", JSON.stringify(merged));
    } catch (e) {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
