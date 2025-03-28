import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@store/store";
import { setDarkMode } from "@store/reducers/themeSlice";


const useTheme = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const dispatch = useDispatch();

    const toggleDarkMode = () => {
        dispatch(setDarkMode(!darkMode));
    };

    return { darkMode, toggleDarkMode };
}

export default useTheme;