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
//setActiveSong that is set the song that is active currently
//playPause is toggle btn true and false depending on whether the song is playing or not

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
            //get the previous index
            const prevIndex = action.payload;

            // check if prevIndex is within the bouds of the array
            if (prevIndex >= 0 {
                // get previous song data
                const prevSongData = state.currentSongs[prevIndex]?.track || state.currentSongs[prevIndex];
                // now update the redux states with our new song
                state.activeSong = prevSongData;
                state.currentIndex = prevIndex;
                state.isSongActive = true;
            } else {
                // if the prev song is less than 0 wrap around to the last song
                const lastIndex = state.currentSongs.length - 1;
                //get the last song data
                const lastSongData = state.currentSongs[lastIndex]?.track || state.currentSongs[lastIndex];

                //update redux state
                state.activeSong = lastSongData;
                state.currentIndex = lastIndex;
                state.isSongActive = true;
            }
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
