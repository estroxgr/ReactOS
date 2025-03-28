import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@store/store";
import { setDarkMode,setBackground } from "@store/reducers/themeSlice";


const useTheme = () => {
    const wallpaper = useSelector((state: RootState) => state.theme.background);
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const dispatch = useDispatch();

    const toggleDarkMode = () => {
        dispatch(setDarkMode(!darkMode));
    };

    const setWallpaper = (newBg:string) => {
        dispatch(setBackground(newBg));
    }

    return { darkMode, wallpaper,setWallpaper,toggleDarkMode };
}

export default useTheme;