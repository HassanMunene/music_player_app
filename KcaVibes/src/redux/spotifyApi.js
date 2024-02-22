import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify-web2.p.rapidapi.com',
        prepareHeader: (headers) => {
            headers.set('X-RapidAPI-Key', '4068abb194msh49e0eccabdc9126p1b052djsnffd1fa04c572');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopHitsInKenya: builder.query({
            query: (playListId) => `/playlist_tracks/?id=${playListId}`
        }),
    }),
});

export const { useGetTopHitsInKenyaQuery } = spotifyApi;
