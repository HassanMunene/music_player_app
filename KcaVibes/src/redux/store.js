//This is the redux store that will contain all the global
//states in our application.
import { configureStore  } from '@reduxjs/toolkit';
import playerSlice from './playerSlice.js';

export const store = configureStore({
    reducer: {
        player: playerSlice,
    },
});
