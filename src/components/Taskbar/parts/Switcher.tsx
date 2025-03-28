import { CSSProperties } from "react";
import { Light, Dark } from "@components/Icons";

// hooks
import useTheme from "@hooks/useTheme";

function Switcher() {
  const { darkMode, toggleDarkMode } = useTheme();

  const style: CSSProperties = {
    width: '100%',
    height: '100%',
   
  };
  return (
    <div style={style} onClick={toggleDarkMode}>
      {darkMode ? <Light /> : <Dark />}
    </div>
  );
}

export default Switcher;
