import { createSlice  } from '@reduxjs/toolkit'

const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isSongActive: false,
    isSongPlaying: false,
    activeSong: {},
    genreListId: '',
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong = action.payload.song
            if(action.payload?.data?.tracks?.hits) {
                state.currentSongs = action.payload.data.tracks.hits;
            } else if(action.payload?.data?.properties) {
                state.currentSongs = action.payload.data.tracks;
            } else {
                state.currentSongs = action.payload.data;
            }
            state.currentIndex = action.payload.i;
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
