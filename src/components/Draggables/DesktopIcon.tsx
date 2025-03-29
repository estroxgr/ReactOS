import { DIStyle, DIProps } from "@types";

// hooks
import { useRef } from "react";

// components
import Draggable from "react-draggable";

function DesktopIcon({ icon }: DIProps) {
  const icRef = useRef<HTMLDivElement>(null);

  return (
    <Draggable nodeRef={icRef} bounds="parent">
      <div ref={icRef} style={styles.areabox}>
        <div style={styles.icon} data-icon={icon}></div>
        <div style={styles.label}>{icon}</div>
      </div>
    </Draggable>
  );
}

const styles: DIStyle = {
  areabox: {
    width: 90,
    height: 90,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    cursor: "pointer",
  },

  icon: {
    width: 55,
    height: 55,
    backgroundSize: "contain",
  },

  label: {
    fontSize: 13,
    fontWeight: 500,
    color: "#fff",
    textTransform: "capitalize",
    textAlign: "center",
  },
};

export { DesktopIcon };
