import {useDispatch, useSelector} from 'react-redux';

import Loader from '../components/Loader';
import Error from '../components/Error';
import dummyData from '../assets/dummyData2.js';

import {genres} from '../assets/genres.js';
import SongCard from '../components/SongCard';

import { useGetTopHitsInKenyaQuery } from '../redux/spotifyApi';

const Discover = () => {
	const dispatch = useDispatch()
	const {activeSong, isSongPlaying} = useSelector((state) => state.player);

 	const playListId = '37i9dQZF1DWWWXigQZAD8B'
	//const { topHitsData, isFetching, error } = useGetTopHitsInKenyaQuery(playListId);
	//console.log(data);
	const genreTitle = 'Pop';
	const data = dummyData.items;

	//if (isFetching) return <Loader title="Loading songs..." />
	//if (error) return <Error/>
	return (
		<div className="flex flex-col">
			<div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
				<h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
				<select 
					className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm: mt-0 mt-5"
					value="" 
					onChange={() => {}} 
				>
					{ genres.map((genre) => (
						<option key={genre.value} value={genre.value}>{genre.title}</option>
					))}	
				</select>
			</div>
			<div className="flex gap-8 sm:justify-start flex-wrap">
				{data?.map((song, index) => (
					<SongCard 
						key={song.track.id} 
						song={song} 
						isSongPlaying={isSongPlaying} 
						activeSong={activeSong}
						data={dummyData} 
						index={index}
					/>
				))}
			</div>
		</div>
	)
}

export default Discover;
