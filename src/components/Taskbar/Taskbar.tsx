import { CSSProperties } from "react";

// hooks
import useTheme from "@hooks/useTheme";

// taskbar parts
import StartBtn from "@components/Taskbar/parts/StartBtn";
import Datetime from "@components/Taskbar/parts/Datetime";
import Switcher from "@components/Taskbar/parts/Switcher";

function Taskbar() {

  const { darkMode } = useTheme();

  return (
    <div style={style(darkMode)}>
      <StartBtn />
      <div></div>
      <Datetime />
      <Switcher />
    </div>
  );
}

const style = (darkMode: boolean): CSSProperties => ({
  position: "absolute",
  backgroundColor: darkMode ? "#000" : "#fff",
  color: darkMode ? "#fff" : "#000",
  display: "grid",
  gridTemplateColumns: "140px 1fr 150px 27px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: 40,
  top: 0,
});

export default Taskbar;
