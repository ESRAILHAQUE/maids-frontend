"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import AuthLayout from "../_components/auth/AuthLayout";
import { AuthField, AuthTextInput } from "../_components/auth/AuthFormControls";
import { api } from "../_lib/api";
import { useToast } from "../_lib/toast";

export default function ResendVerificationPage() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [touched, setTouched] = useState(false);
    const { showToast } = useToast();

    const emailError = touched && !email.trim() ? "Email is required." : "";
    const canSubmit = !emailError && email.trim() && !isSubmitting;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setTouched(true);
        if (!canSubmit) return;

        setIsSubmitting(true);
        try {
            const response = await api.post("/v1/auth/resend-verification", { email });
            showToast(response.message || "Verification email sent!", "success");
            setEmail("");
        } catch (error: unknown) {
            if (error instanceof Error) {
                showToast(error.message, "error");
            } else {
                showToast("Failed to send verification email", "error");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AuthLayout
            title="Resend Verification Email"
            subtitle="Enter your email address to receive a new verification link."
            formWidthClassName="max-w-md"
        >
            <form className="space-y-4" onSubmit={handleSubmit}>
                <AuthField label="Email" error={emailError}>
                    <AuthTextInput
                        icon={<Mail className="h-4 w-4" />}
                        value={email}
                        onChange={setEmail}
                        onBlur={() => setTouched(true)}
                        type="email"
                        autoComplete="email"
                        placeholder="name@company.com"
                        error={!!emailError}
                        name="email"
                    />
                </AuthField>

                <button
                    type="submit"
                    disabled={!canSubmit}
                    className={[
                        "w-full rounded-sm px-5 py-3 text-sm font-semibold text-white transition",
                        canSubmit
                            ? "bg-(--teal-dark) hover:bg-[#102a43e6] cursor-pointer"
                            : "bg-slate-300 cursor-not-allowed",
                    ].join(" ")}
                >
                    {isSubmitting ? "Sending..." : "Send Verification Email"}
                </button>
            </form>
        </AuthLayout>
    );
}

