import { CSSProperties } from "react";

// taskbar parts
import Datetime from "@components/Taskbar/parts/Datetime";

function Taskbar() {
  return (
    <div style={style}>
      <Datetime />
    </div>
  );
}

const style: CSSProperties = {
  position: "absolute",
  backgroundColor: "#fff",
  width: "100%",
  height: 30,
  top: 0,
};

export default Taskbar;
