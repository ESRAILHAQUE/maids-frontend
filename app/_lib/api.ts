const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export interface ApiResponse<T = unknown> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
    timestamp?: string;
}

export class ApiError extends Error {
    constructor(
        message: string,
        public statusCode: number,
        public data?: unknown
    ) {
        super(message);
        this.name = "ApiError";
    }
}

async function request<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> {
    const url = `${API_URL}${endpoint}`;
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(options.headers as Record<string, string>),
    };

    // Only send token for protected endpoints (not for register/login/public endpoints)
    const method = options.method || 'GET';
    const isPublicEndpoint = endpoint.includes('/register') ||
        endpoint.includes('/login') ||
        endpoint.includes('/verify-email') ||
        endpoint.includes('/resend-verification') ||
        endpoint.includes('/forgot-password') ||
        endpoint.includes('/reset-password') ||
        (endpoint.includes('/bookings') && method === 'POST'); // Booking creation is public

    if (token && !isPublicEndpoint) {
        headers.Authorization = `Bearer ${token}`;
    }

    try {
        const response = await fetch(url, {
            ...options,
            headers,
        });

        const data: ApiResponse<T> = await response.json();

        if (!response.ok) {
            throw new ApiError(
                data.message || data.error || "An error occurred",
                response.status,
                data
            );
        }

        return data;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            error instanceof Error ? error.message : "Network error",
            0
        );
    }
}

export const api = {
    get: <T>(endpoint: string) => request<T>(endpoint, { method: "GET" }),
    post: <T>(endpoint: string, body?: unknown) =>
        request<T>(endpoint, {
            method: "POST",
            body: JSON.stringify(body),
        }),
    patch: <T>(endpoint: string, body?: unknown) =>
        request<T>(endpoint, {
            method: "PATCH",
            body: JSON.stringify(body),
        }),
    delete: <T>(endpoint: string) => request<T>(endpoint, { method: "DELETE" }),
};

export function setAuthToken(token: string | null) {
    if (token) {
        localStorage.setItem("token", token);
    } else {
        localStorage.removeItem("token");
    }
}

export function getAuthToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
}

