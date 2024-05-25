import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";
import type { RootState } from "../store";

interface UserState {
  value: User;
}

const initialState: UserState = {
  value: {
    id: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
