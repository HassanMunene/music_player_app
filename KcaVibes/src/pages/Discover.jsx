import {useDispatch, useSelector} from 'react-redux';

import Loader from '../components/Loader';
import Error from '../components/Error';
import dummyData from '../assets/dummyData2.js';

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
		<div className="flex flex-col min-h-0 max-w-full">
			<div className="w-full mb-1 p-2 rounded-lg hidden sm:block">
				<h2 className="font-bold text-3xl text-white text-left">Discover</h2>
			</div>
			<div className="h-full">
				<SongCard 
					key={data[0]?.track?.id} 
					song={data[0]} 
					isSongPlaying={isSongPlaying} 
					activeSong={activeSong}
					data={dummyData}
				/>
			</div>
		</div>
	)
}

export default Discover;

{/*				{data?.map((song, index) => (
					{index === 0 ? (
						<SongCard 
							key={song.track.id} 
							song={song} 
							isSongPlaying={isSongPlaying} 
							activeSong={activeSong}
							data={dummyData} 
							index={index}
						/>
					): ("")}
				))}*/}