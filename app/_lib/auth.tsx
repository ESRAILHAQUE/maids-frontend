"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { api, setAuthToken, getAuthToken } from "./api";
import { useToast } from "./toast";

interface User {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    role: "user" | "admin";
    isVerified: boolean;
    isSuspended: boolean;
    isDeleted: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string, phone?: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setTokenState] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { showToast } = useToast();

    useEffect(() => {
        const storedToken = getAuthToken();
        if (storedToken) {
            setTokenState(storedToken);
            fetchUser();
        } else {
            setLoading(false);
        }
    }, []);

    const fetchUser = async () => {
        try {
            const response = await api.get<{ user: User }>("/v1/auth/me");
            if (response.data?.user) {
                setUser(response.data.user);
            }
        } catch (error) {
            // Token might be invalid, clear it silently
            setAuthToken(null);
            setTokenState(null);
            setUser(null);
            // Don't show error toast here as it's just checking for existing session
        } finally {
            setLoading(false);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const response = await api.post<{ user: User; token: string }>("/v1/auth/login", {
                email,
                password,
            });

            if (response.data?.user && response.data?.token) {
                setAuthToken(response.data.token);
                setTokenState(response.data.token);
                setUser(response.data.user);
                showToast("Login successful!", "success");

                // Role-based redirect
                if (response.data.user.role === "admin") {
                    router.push("/admin");
                } else {
                    router.push("/");
                }
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                showToast(error.message, "error");
            } else {
                showToast("Login failed. Please try again.", "error");
            }
            throw error;
        }
    };

    const register = async (
        name: string,
        email: string,
        password: string,
        phone?: string
    ) => {
        try {
            const response = await api.post<{ user: User }>("/v1/auth/register", {
                name,
                email,
                password,
                phone,
            });

            if (response.data?.user) {
                showToast(
                    "Registration successful! Please check your email to verify your account.",
                    "success"
                );
                router.push("/login");
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                showToast(error.message, "error");
            } else {
                showToast("Registration failed. Please try again.", "error");
            }
            throw error;
        }
    };

    const logout = () => {
        setAuthToken(null);
        setTokenState(null);
        setUser(null);
        showToast("Logged out successfully", "info");
        router.push("/login");
    };

    const isAuthenticated = !!user && !!token;
    const isAdmin = user?.role === "admin";

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                login,
                register,
                logout,
                isAuthenticated,
                isAdmin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}

