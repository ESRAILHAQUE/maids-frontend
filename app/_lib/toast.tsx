"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
}

interface ToastContextType {
    toasts: Toast[];
    showToast: (message: string, type?: ToastType, duration?: number) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback(
        (message: string, type: ToastType = "info", duration: number = 5000) => {
            const id = Math.random().toString(36).substring(7);
            const toast: Toast = { id, message, type, duration };
            setToasts((prev) => [...prev, toast]);

            if (duration > 0) {
                setTimeout(() => {
                    setToasts((prev) => prev.filter((t) => t.id !== id));
                }, duration);
            }
        },
        []
    );

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
            {children}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within ToastProvider");
    }
    return context;
}

function ToastContainer({
    toasts,
    removeToast,
}: {
    toasts: Toast[];
    removeToast: (id: string) => void;
}) {
    if (toasts.length === 0) return null;

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-md w-full">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
            ))}
        </div>
    );
}

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
    const icons = {
        success: CheckCircle,
        error: AlertCircle,
        warning: AlertTriangle,
        info: Info,
    };

    const colors = {
        success: "bg-green-50 border-green-200 text-green-800",
        error: "bg-red-50 border-red-200 text-red-800",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
        info: "bg-blue-50 border-blue-200 text-blue-800",
    };

    const Icon = icons[toast.type];
    const colorClass = colors[toast.type];

    return (
        <div
            className={`${colorClass} border rounded-lg shadow-lg p-4 flex items-start gap-3 animate-in slide-in-from-right-5 fade-in-0`}
            role="alert"
        >
            <Icon className="h-5 w-5 shrink-0 mt-0.5" />
            <p className="flex-1 text-sm font-medium">{toast.message}</p>
            <button
                onClick={onClose}
                className="shrink-0 text-current opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Close"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}

