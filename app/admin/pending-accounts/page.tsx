"use client";

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, Ban, UserCheck, UserX, Loader2 } from "lucide-react";
import { api } from "../../_lib/api";
import { useToast } from "../../_lib/toast";
import { useAuth } from "../../_lib/auth";

interface PendingUser {
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
}

export default function PendingAccountsPage() {
    const [users, setUsers] = useState<PendingUser[]>([]);
    const [loading, setLoading] = useState(true);
    const { showToast } = useToast();
    const { isAdmin } = useAuth();

    useEffect(() => {
        if (!isAdmin) {
            showToast("Access denied. Admin only.", "error");
            return;
        }
        fetchPendingUsers();
    }, [isAdmin, showToast]);

    const fetchPendingUsers = async () => {
        try {
            setLoading(true);
            const response = await api.get<{ users: PendingUser[] }>("/v1/users/pending");
            if (response.data?.users) {
                setUsers(response.data.users);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                showToast(error.message, "error");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (userId: string) => {
        try {
            await api.patch(`/v1/users/${userId}/approve`);
            showToast("User approved successfully", "success");
            fetchPendingUsers();
        } catch (error: unknown) {
            if (error instanceof Error) {
                showToast(error.message, "error");
            }
        }
    };

    const handleSuspend = async (userId: string) => {
        const reason = prompt("Enter reason for suspension (optional):");
        try {
            await api.patch(`/v1/users/${userId}/suspend`, { reason });
            showToast("User suspended successfully", "success");
            fetchPendingUsers();
        } catch (error: unknown) {
            if (error instanceof Error) {
                showToast(error.message, "error");
            }
        }
    };

    const handleBan = async (userId: string) => {
        const reason = prompt("Enter reason for ban (optional):");
        if (!confirm("Are you sure you want to ban this user?")) return;
        try {
            await api.patch(`/v1/users/${userId}/ban`, { reason });
            showToast("User banned successfully", "success");
            fetchPendingUsers();
        } catch (error: unknown) {
            if (error instanceof Error) {
                showToast(error.message, "error");
            }
        }
    };

    const handleActivate = async (userId: string) => {
        try {
            await api.patch(`/v1/users/${userId}/activate`);
            showToast("User activated successfully", "success");
            fetchPendingUsers();
        } catch (error: unknown) {
            if (error instanceof Error) {
                showToast(error.message, "error");
            }
        }
    };

    if (!isAdmin) {
        return (
            <div className="p-8 text-center">
                <p className="text-red-600">Access denied. Admin only.</p>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-(--teal-dark)" />
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Pending Accounts</h1>
                <p className="text-slate-600 mt-1">Manage user account approvals and status</p>
            </div>

            {users.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                    <p className="text-slate-600">No pending accounts</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Created
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <div className="text-sm font-medium text-slate-900">{user.name}</div>
                                            <div className="text-sm text-slate-500">{user.email}</div>
                                            {user.phone && (
                                                <div className="text-xs text-slate-400">{user.phone}</div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col gap-1">
                                            {!user.isVerified && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    Unverified
                                                </span>
                                            )}
                                            {!user.isActive && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                    Inactive
                                                </span>
                                            )}
                                            {user.isSuspended && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                                    Suspended
                                                </span>
                                            )}
                                            {user.isDeleted && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    Deleted
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                        {new Date(user.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end gap-2">
                                            {!user.isVerified && (
                                                <button
                                                    onClick={() => handleApprove(user._id)}
                                                    className="text-green-600 hover:text-green-900 p-1"
                                                    title="Approve"
                                                >
                                                    <CheckCircle className="h-5 w-5" />
                                                </button>
                                            )}
                                            {!user.isActive && !user.isDeleted && (
                                                <button
                                                    onClick={() => handleActivate(user._id)}
                                                    className="text-blue-600 hover:text-blue-900 p-1"
                                                    title="Activate"
                                                >
                                                    <UserCheck className="h-5 w-5" />
                                                </button>
                                            )}
                                            {!user.isSuspended && !user.isDeleted && (
                                                <button
                                                    onClick={() => handleSuspend(user._id)}
                                                    className="text-orange-600 hover:text-orange-900 p-1"
                                                    title="Suspend"
                                                >
                                                    <UserX className="h-5 w-5" />
                                                </button>
                                            )}
                                            {!user.isDeleted && (
                                                <button
                                                    onClick={() => handleBan(user._id)}
                                                    className="text-red-600 hover:text-red-900 p-1"
                                                    title="Ban"
                                                >
                                                    <Ban className="h-5 w-5" />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

