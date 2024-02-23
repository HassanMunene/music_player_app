import { createSlice  } from '@reduxjs/toolkit'

const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isSongActive: false,
    isSongPlaying: false,
    activeSong: {},
    genreListId: '',
};

//activeSong is the song that is the object in the items. basically the whole thing
//currentSongs are the songs that i have retrieved in my case they are the array items
//currentIndex, items are array therefore the songs inside are indexed. Hence what index im I in

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong = action.payload.song;
            state.currentSongs = action.payload.data.items;
            state.currentIndex = action.payload.index;
            state.isSongActive = true;
        },
        nextSong: (state, action) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }
            state.currentIndex = action.payload;
            state.isSongActive = true;
        },
        prevSong: (state, action) => {
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }
            state.currentIndex = action.payload;
            state.isSongActive = true;
        },
        playPause: (state, action) => {
            state.isSongPlaying = action.payload;
        },
        selectedGenreListId: (state, payload) => {
            state.genreListId = action.payload;
        },
    }
});

export const { setActiveSong, nextSong, prevSong, playPause, selectedGenreListId} = playerSlice.actions;

export default playerSlice.reducer;
