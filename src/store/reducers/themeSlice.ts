import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean;
  locale: "en" | "gr";
}

const initialThemeState: ThemeState = JSON.parse(
  localStorage.getItem("themeState") ||
    JSON.stringify({
      darkMode: true,
      locale: "en",
    })
);

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<true | false>) => {
      state.darkMode = action.payload;
      localStorage.setItem("themeState", JSON.stringify(state));
    },
  },
});

export const { setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
