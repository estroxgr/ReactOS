import { CSSProperties } from "react";

// taskbar parts
import StartBtn from "@components/Taskbar/parts/StartBtn";
import Datetime from "@components/Taskbar/parts/Datetime";

function Taskbar() {
  return (
    <div style={style}>
      <StartBtn/>
      <div></div>
      <Datetime />
    </div>
  );
}

const style: CSSProperties = {
  position: "absolute",
  backgroundColor: "#fff",
  display:'grid',
  gridTemplateColumns:'140px 1fr 200px',
  width: "100%",
  height: 25,
  top: 0,
};

export default Taskbar;
