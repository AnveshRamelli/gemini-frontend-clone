import { create } from "zustand";

type User = {
    phone: string;
    countryCode: string;
}

interface AuthState {
    user: User | null;
    setUSer: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUSer: (user) => {
        set({user}),
        localStorage.setItem("user", JSON.stringify(user));
    },
    logout: () => {
        set({ user: null })
        localStorage.removeItem("user");
    },
}));