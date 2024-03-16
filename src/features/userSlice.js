import { createSlice } from "@reduxjs/toolkit";
import { getData, setData } from "./localStorage";

const initialState = {
  userData: getData(),
};
export const userSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.userData = action.payload;
      setData(state.userData);
    },
  },
});

export const { setTheme } = userSlice.actions;
export default userSlice.reducer;
