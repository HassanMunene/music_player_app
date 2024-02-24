import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {playPause, prevSong} from '../../redux/playerSlice';
import Track from './Track';
import Controls from './Controls';

const MusicPlayerBar = () => {
	const [repeat, setRepeat] = useState(false);
	const [shuffle, setShuffle] = useState(false);


	const {activeSong, currentSongs, currentIndex, isSongActive, isSongPlaying} = useSelector((state) => state.player);
	const dispatch = useDispatch();

	useEffect(() => {
		if (currentSongs.length) {
			dispatch(playPause(true));
		}
	}, [currentIndex]);

	const handlePrevSong = () => {
		if (currentIndex === 0) {
			dispatch(prevSong(currentSongs.length - 1));
		} else if (shuffle) {
			dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
		} else {
			dispatch(prevSong(currentIndex - 1));
		}
	}
	const handlePlayingPausing = () => {
		//if song is not active then no need to bother
		if (!isSongActive) return;

		//if song is playing then pause it otherwise play it
		if (isSongPlaying) {
			dispatch(playPause(false));		
		} else {
			dispatch(playPause(true));
		}
	}

	return (
		<div className="relative px-8 sm:px-12 w-full flex items-center justify-between">
			<Track isSongPlaying={isSongPlaying} isSongActive={isSongActive} activeSong={activeSong}/>
			<div className="flex-1 flex flex-col items-center justify-center">
				<Controls 
					repeat={repeat} 
					setRepeat={setRepeat} 
					currentSongs={currentSongs} 
					handlePrevSong={handlePrevSong} 
					isSongPlaying={isSongPlaying}
				/>
			</div>
		</div>
	)
}

export default MusicPlayerBar;