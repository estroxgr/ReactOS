import { CSSProperties } from "react";
// components
import {DesktopIcon as Icon} from "@components/Draggables/DesktopIcon";

function IconsList() {
  return (
    <div style={style}>
      <Icon icon="profile"/>
      <Icon icon="settings"/>
      <Icon icon="games"/>
      <Icon icon="terminal"/>
     
    </div>
  );
}

const style: CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "calc(100% - 30px)",
  display:'grid',
  gridTemplateRows:'repeat(5,90px)',
  gap:20,
  padding:20,
  top: 50,
};

export default IconsList;
