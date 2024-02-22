//This is the redux store that will contain all the global
//states in our application.

import { configureStore  } from '@reduxjs/toolkit';

import playerSlice from './playerSlice.js';
import { spotifyApi } from './spotifyApi.js';


export const store = configureStore({
    reducer: {
        [spotifyApi.reducerPath]: spotifyApi.reducer,
        player: playerSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyApi.middleware),
});
