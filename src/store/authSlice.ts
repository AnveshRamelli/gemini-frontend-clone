import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isLoggedIn: boolean;
  user: {
    name: string;
    phone: string;
  } | null;
};

const getInitialState = (): AuthState => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("auth");
    if (stored) return JSON.parse(stored);
  }
  return { isLoggedIn: false, user: null };
};

const initialState: AuthState = getInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<AuthState["user"]>) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
