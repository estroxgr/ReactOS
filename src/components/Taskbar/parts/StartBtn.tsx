import { CSSProperties } from "react";

function StartBtn() {
  return <div style={style}>START</div>;
}

const style: CSSProperties = {
  backgroundColor: "red",
  width: "100%",
  height: 'inherit',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  color:'#fff'
};

export default StartBtn;
