import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";  
import { toggleWindow } from "@store/reducers/WindowSlice"; 
import { WindowType } from "@types";  

const useWindow = (windowName: WindowType) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.window[windowName]);

  const setWindowState = (value: boolean) => {
    dispatch(toggleWindow({ window: windowName, value }));
  };

  return { isOpen, setWindowState };
};

export default useWindow;
