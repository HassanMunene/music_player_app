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
	const data = dummyData.items;

	//if (isFetching) return <Loader title="Loading songs..." />
	//if (error) return <Error/>
	return (
		<div className="DiscoverPage flex flex-col">
			<div className="w-full mt-4 mb-10">
				<h2 className="font-bold text-3xl text-white text-left">Discover</h2>
			</div>
			<div className="flex flex-col sm:flex-row items-center sm:flex-wrap gap-8 sm:justify-start">
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
