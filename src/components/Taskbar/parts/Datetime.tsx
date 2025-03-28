import { CSSProperties } from "react";

function Datetime() {
  return (
    <div style={style}>
      <div>Monday 25 Sept</div>
      <div>20:00 AM</div>
    </div>
  );
}

const style: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 12,
};
export default Datetime;
