import { configureStore, } from '@reduxjs/toolkit';

// reducers
import themeReducer from './reducers/themeSlice';
import windowReducer from './reducers/WindowSlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        window:windowReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;