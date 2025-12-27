"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { api } from "../_lib/api";

interface Booking {
    _id: string;
    service: string;
    hours: number;
    cleaners: number;
    date: string;
    time: string;
    totalQAR: number;
    status: string;
}

function BookingConfirmedContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [booking, setBooking] = useState<Booking | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const bookingId = searchParams.get("id");
        if (!bookingId) {
            router.push("/booking");
            return;
        }

        const fetchBooking = async () => {
            try {
                const response = await api.get<Booking>(`/v1/bookings/${bookingId}`);
                if (response.data) {
                    setBooking(response.data);
                }
            } catch (error) {
                console.error("Failed to fetch booking:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooking();
    }, [searchParams, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
                <Loader2 className="h-8 w-8 animate-spin text-(--teal-dark)" />
            </div>
        );
    }

    if (!booking) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
                <div className="text-center">
                    <p className="text-slate-600">Booking not found</p>
                    <Link href="/booking" className="mt-4 text-(--teal-dark) hover:underline font-semibold">
                        Go to Booking
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg border border-slate-200 p-8 text-center">
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
                        <div className="relative bg-green-500 rounded-full p-4">
                            <CheckCircle className="h-12 w-12 text-white" />
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-slate-900 mb-2">Booking Confirmed!</h1>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Your cleaning service has been successfully booked. We&apos;ll contact you
                    shortly to confirm the details.
                </p>

                {booking && (
                    <div className="bg-slate-50 rounded-lg p-4 mb-6 text-left space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Service:</span>
                            <span className="font-semibold text-slate-900">{booking.service}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Date:</span>
                            <span className="font-semibold text-slate-900">{booking.date}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Time:</span>
                            <span className="font-semibold text-slate-900">{booking.time}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600">Total:</span>
                            <span className="font-semibold text-(--teal-dark)">{booking.totalQAR} QAR</span>
                        </div>
                    </div>
                )}

                <Link
                    href="/booking"
                    className="inline-flex items-center justify-center w-full rounded-sm bg-(--teal-dark) hover:bg-[#102a43e6] text-white font-semibold py-3 px-5 transition-colors"
                >
                    Book Another Service
                </Link>
            </div>
        </div>
    );
}

export default function BookingConfirmedPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
                    <Loader2 className="h-8 w-8 animate-spin text-(--teal-dark)" />
                </div>
            }
        >
            <BookingConfirmedContent />
        </Suspense>
    );
}

