import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ThemeState {
  darkMode: boolean;
  background: string;
  locale: "en-US" | "el-GR";
}

const initialThemeState: ThemeState = JSON.parse(
  localStorage.getItem("themeState") ||
    JSON.stringify({
      darkMode: true,
      background:'bg1',
      locale: "en-US",
    })
);

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {

    // change darkmode
    setDarkMode: (state, action: PayloadAction<true | false>) => {
      state.darkMode = action.payload;
      localStorage.setItem("themeState", JSON.stringify(state));
    },

    // update background
    setBackground: (state, action: PayloadAction<string>) => {
      state.background = action.payload;
      localStorage.setItem("themeState", JSON.stringify(state));
    },
  },
});

export const { setDarkMode,setBackground } = themeSlice.actions;

export default themeSlice.reducer;
