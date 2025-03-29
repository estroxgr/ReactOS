import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialWindowState = {
  profile: false,
  terminal: false,
  settings: false,
};

const windowSlice = createSlice({
  name: "window",
  initialState: initialWindowState,
  reducers: {
    toggleWindow: (
      state,
      action: PayloadAction<{
        window: keyof typeof initialWindowState;
        value: boolean;
      }>
    ) => {
      state[action.payload.window] = action.payload.value;
    },
  },
});

export const { toggleWindow } = windowSlice.actions;

export default windowSlice.reducer;
