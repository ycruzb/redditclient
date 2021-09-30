import { createSlice } from "@reduxjs/toolkit";

export interface MobileMenuState {
  open: boolean;
}

const initialState: MobileMenuState = {
  open: false,
};

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    toggleMenu: (state: MobileMenuState) => {
      state.open = !state.open;
    },
  },
});

export const { toggleMenu } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
