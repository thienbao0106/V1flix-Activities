import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";
import type { RootState } from "../store";

interface UserState {
  value: User[];
  currentUser: User;
}

const initialState: UserState = {
  value: [
    {
      id: "",
      username: "",
      avatar: "",
      nickname: "",
    },
  ],
  currentUser: {
    id: "",
    username: "",
    avatar: "",
    nickname: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setListUsers: (state, action: PayloadAction<User[]>) => {
      state.value = [...action.payload];
    },
    // setCurrentUser: (state, action: PayloadAction<User>) => {
    //   state.currentUser = action.payload;
    // },
  },
});

export const { setListUsers } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.value;
export default userSlice.reducer;
