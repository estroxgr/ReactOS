import { CSSProperties } from "react";

interface Styles {
  window: (darkMode: boolean) => CSSProperties;
  titlebar: (darkMode: boolean) => CSSProperties;
  title?: CSSProperties;
  close?: CSSProperties;
}

export const styles: Styles = {
  window: (darkMode) => ({
    width: 500,
    height: 400,
    backgroundColor: darkMode
      ? "rgba(0, 0, 0, 0.80)"
      : "rgba(255, 255, 255, 0.80)",
    backdropFilter: "blur(9.5px)",
    webkitBackdropFilter: "blur(9.5px)",
    borderRadius: 20,
  }),

  titlebar: (darkMode) => ({
    width: "100%",
    height: 30,
    backgroundColor: darkMode
      ? "rgba(0, 0, 0, 0.80)"
      : "rgba(255, 255, 255, 0.80)",
    color: darkMode ? "#fff" : "#000",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    cursor:'grab',
    borderBottom: "solid 1px rgba(255,255,255,0.1)",
    top: 0,
  }),

  close: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 0,
    backgroundColor: "rgba(255,0,0,0.77)",
    cursor: "pointer",
    borderTopRightRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
