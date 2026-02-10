import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RememberMeCredentials {
  email: string;
  password: string;
}

export interface IAuthSliceInitialState {
  fcmToken: string | null;
  isRememberMe: boolean;
  rememberMeCredentials: RememberMeCredentials;
}

const initialState: IAuthSliceInitialState = {
  fcmToken: null,
  isRememberMe: false,
  rememberMeCredentials: {
    email: '',
    password: '',
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 🔹 FCM TOKEN
    setFcmToken(state, action: PayloadAction<string | null>) {
      state.fcmToken = action.payload;
    },

    // 🔹 TOGGLE REMEMBER ME
    setRememberMe(state, action: PayloadAction<boolean>) {
      state.isRememberMe = action.payload;

      // if user turns OFF remember me → clear credentials
      if (!action.payload) {
        state.rememberMeCredentials = {
          email: '',
          password: '',
        };
      }
    },

    // 🔹 SAVE REMEMBER ME CREDENTIALS
    setRememberMeCredentials(
      state,
      action: PayloadAction<RememberMeCredentials>
    ) {
      state.rememberMeCredentials = action.payload;
    },

    // 🔹 CLEAR REMEMBER ME (on logout or manual reset)
    clearRememberMe(state) {
      state.isRememberMe = false;
      state.rememberMeCredentials = {
        email: '',
        password: '',
      };
    },
  },
});

export const {
  setFcmToken,
  setRememberMe,
  setRememberMeCredentials,
  clearRememberMe,
} = authSlice.actions;

export default authSlice.reducer;
