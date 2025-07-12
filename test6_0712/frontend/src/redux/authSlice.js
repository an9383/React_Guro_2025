/* eslint-disable no-unused-vars */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (obj, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3001/사용자/?name=${obj.username}`);
      const data = response.data;
      console.log("user", response);
      

      if (data.length === 0) {
        return thunkAPI.rejectWithValue("사용자를 찾을 수 없습니다.");
      }

      const user = data[0];
      if (user.password !== obj.password.toString()) {
        return thunkAPI.rejectWithValue("비밀번호가 틀렸습니다.");
      }

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue("서버 오류가 발생했습니다.");
    }
  }
);

const initialUser = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    status: "idle",
    user: initialUser,
    isAuthenticated: !!initialUser,
    error: null,
  },
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
