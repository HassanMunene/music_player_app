//Im supposed to get data from the spotify api directly for final product
// but for now ill use the local data because i have limited requests to sportify api in rapid api
//import { useGetTopHitsInKenyaQuery } from '../redux/spotifyApi';

import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import dummyData from '../assets/dummyData2.js';
import PlayPause from '../components/PlayPause';
import {playPause, setActiveSong} from '../redux/playerSlice';



const TopPlayCard = ({activeSong, song, index, isSongPlaying, handlePlayClick, handlePauseClick}) => {
	return (
		<div className={`w-full flex items-center hover:bg-[#4c426e] ${activeSong?.track?.name === song?.track?.name ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
			<h3 className="font-bold text-white mr-3">{index + 1}</h3>
			<div className="flex-1 flex flex-row justify-between items-center">
				<img src={song?.track?.album?.images[0].url} className="w-20 h-20 rounded-lg" alt={song?.track?.name}/>
				<div className="flex-1 flex flex-col justify-center mx-3">
					<Link to={`/songs/${song?.track?.id}`}>
						<p className="text-xl font-bold text-white">{song?.track?.name}</p>
					</Link>
					<Link to={`/artists/${song?.track?.artists[0].id}`}>
						<p className="text-gray-300 mt-1">{song?.track?.artists[0].name}</p>
					</Link>
				</div>
			</div>
			<PlayPause 
				isSongPlaying={isSongPlaying} 
				activeSong={activeSong} 
				song={song}
				handlePause={handlePauseClick} 
				handlePlay={handlePlayClick}
			/>
		</div>
	)
}


const TopPlay = () => {
	const dispatch = useDispatch();
	const {activeSong, isSongPlaying} = useSelector((state) => state.player);
	const data = dummyData.items;
	const topPlaysToDisplay = data.slice(0, 5);

	const handlePlayClick = (song, index) => {
		dispatch(setActiveSong({song, data, index}))
		dispatch(playPause(true));
	}
	const handlePauseClick = () => {
		dispatch(playPause(false));
	}

	return (
		<div className="ml-0 xl:ml-6 mb-0 xl:mb-6 flex-1 max-w-full xl:max-w-[500px] flex flex-col">
			<div className="w-full flex flex-col">
				<div className="flex flex-row justify-between items-center">
					<h2 className="text-white font-bold text-2xl">Top Hits Kenya</h2>
					<Link to="/top-charts">
						<p className="text-gray-300 cursor-pointer">See more</p>
					</Link>
				</div>

				<div className="mt-4 flex flex-col gap-1">
					{topPlaysToDisplay.map((song, index) => {
						return (
							<TopPlayCard 
								key={song?.track?.id} 
								activeSong={activeSong} 
								song={song} 
								index={index} 
								isSongPlaying={isSongPlaying} 
								handlePlayClick={() => handlePlayClick(song, index)} 
								handlePauseClick={handlePauseClick}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default TopPlay;
