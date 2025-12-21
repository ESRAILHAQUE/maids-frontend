"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import AuthLayout from "../_components/auth/AuthLayout";
import { api } from "../_lib/api";
import { useToast } from "../_lib/toast";

function VerifyEmailContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { showToast } = useToast();
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const token = searchParams.get("token");
        if (!token) {
            setStatus("error");
            setMessage("Verification token is missing");
            return;
        }

        const verifyEmail = async () => {
            try {
                const response = await api.get(`/v1/auth/verify-email?token=${token}`);
                setStatus("success");
                setMessage(response.message || "Email verified successfully!");
                showToast("Email verified successfully!", "success");
                setTimeout(() => {
                    router.push("/login");
                }, 2000);
            } catch (error: unknown) {
                setStatus("error");
                if (error instanceof Error) {
                    setMessage(error.message);
                    showToast(error.message, "error");
                } else {
                    setMessage("Failed to verify email. Please try again.");
                    showToast("Failed to verify email. Please try again.", "error");
                }
            }
        };

        verifyEmail();
    }, [searchParams, router, showToast]);

    return (
        <AuthLayout
            title="Verify Email"
            subtitle="Verifying your email address..."
            formWidthClassName="max-w-md"
        >
            <div className="flex flex-col items-center justify-center py-8">
                {status === "loading" && (
                    <>
                        <Loader2 className="h-12 w-12 text-(--teal-dark) animate-spin mb-4" />
                        <p className="text-slate-600">Verifying your email...</p>
                    </>
                )}

                {status === "success" && (
                    <>
                        <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                        <p className="text-slate-700 font-medium text-center mb-4">{message}</p>
                        <p className="text-sm text-slate-500 text-center">
                            Redirecting to login page...
                        </p>
                        <Link
                            href="/login"
                            className="mt-4 text-(--teal-dark) hover:underline font-semibold"
                        >
                            Go to Login
                        </Link>
                    </>
                )}

                {status === "error" && (
                    <>
                        <XCircle className="h-12 w-12 text-red-500 mb-4" />
                        <p className="text-slate-700 font-medium text-center mb-4">{message}</p>
                        <div className="flex flex-col gap-2 items-center">
                            <Link
                                href="/login"
                                className="text-(--teal-dark) hover:underline font-semibold"
                            >
                                Go to Login
                            </Link>
                            <Link
                                href="/resend-verification"
                                className="text-sm text-slate-600 hover:underline"
                            >
                                Resend verification email
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </AuthLayout>
    );
}

export default function VerifyEmailPage() {
    return (
        <Suspense fallback={
            <AuthLayout
                title="Verify Email"
                subtitle="Verifying your email address..."
                formWidthClassName="max-w-md"
            >
                <div className="flex flex-col items-center justify-center py-8">
                    <Loader2 className="h-12 w-12 text-(--teal-dark) animate-spin mb-4" />
                    <p className="text-slate-600">Loading...</p>
                </div>
            </AuthLayout>
        }>
            <VerifyEmailContent />
        </Suspense>
    );
}

