import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@store/store";
import { setDarkMode,setBackground } from "@store/reducers/themeSlice";


const useTheme = () => {
    const wallpaper = useSelector((state: RootState) => state.theme.background);
    const locale = useSelector((state: RootState) => state.theme.locale);
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const dispatch = useDispatch();

    const toggleDarkMode = () => {
        dispatch(setDarkMode(!darkMode));
    };

    const setWallpaper = (newBg:string) => {
        dispatch(setBackground(newBg));
    }

    const setLocale = (locale:string) => {
        dispatch(setBackground(locale));
    }

    return { darkMode, wallpaper,setWallpaper,toggleDarkMode,locale,setLocale };
}

export default useTheme;