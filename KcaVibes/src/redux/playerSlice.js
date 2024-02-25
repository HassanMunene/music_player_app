import { createSlice  } from '@reduxjs/toolkit'

const initialState = {
    currentSongs: [],
    currentIndex: 0,
    isSongActive: false,
    isSongPlaying: false,
    activeSong: {},
    genreListId: '',
};

// activeSong is the song that is the object in the items. basically the whole thing
// currentSongs are the songs that i have retrieved in my case they are the array items
// currentIndex, items are array therefore the songs inside are indexed. Hence what index im I in
// setActiveSong that is set the song that is active currently
// playPause is toggle btn true and false depending on whether the song is playing or not

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
            const nextIndex = action.payload;
            const nextSongData = state.currentSongs[nextIndex];
            state.activeSong = nextSongData;
            state.currentIndex = nextIndex;
            state.isSongActive = true;
        },
        prevSong: (state, action) => {
            //get the previous index
            const prevIndex = action.payload;
            // get previous song data
            const prevSongData = state.currentSongs[prevIndex];
            // now update the redux states with our new song
            state.activeSong = prevSongData;
            state.currentIndex = prevIndex;
            state.isSongActive = true;
        },
        playPause: (state, action) => {
            //toggle between playing and pausing song
            state.isSongPlaying = action.payload;
        },
        selectedGenreListId: (state, payload) => {
            state.genreListId = action.payload;
        },
    }
});

export const { setActiveSong, nextSong, prevSong, playPause, selectedGenreListId} = playerSlice.actions;

export default playerSlice.reducer;
