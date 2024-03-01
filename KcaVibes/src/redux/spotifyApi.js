import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify-web2.p.rapidapi.com',
    }),
    endpoints: (builder) => ({
        getTopHitsInKenya: builder.query({ query: (playListId) => (
            {url: `/playlist_tracks/?id=${playListId}`, method: 'GET',headers: {'X-RapidAPI-Key': '4068abb194msh49e0eccabdc9126p1b052djsnffd1fa04c572'},})}
        ),

        getSongBySearch: builder.query({ query: (searchTerm) => (
            {url: `/search/?q=${searchTerm}&type=multi&offset=0&limit=10&numberOfTopResults=5`, method: 'GET', headers: {'X-RapidAPI-Key': '4068abb194msh49e0eccabdc9126p1b052djsnffd1fa04c572'},})}
        ),
    }),
});

export const { useGetTopHitsInKenyaQuery, useGetSongBySearchQuery } = spotifyApi;
