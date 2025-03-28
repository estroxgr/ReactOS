import useTheme from "@hooks/useTheme";

// components
import { Taskbar } from "@components/Taskbar";

function App() {

  const {wallpaper} = useTheme();


  return (
    <div className="desktop" data-bg={wallpaper}>
      <Taskbar />


    </div>
  );
}

export default App;
