import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {playPause, prevSong, nextSong} from '../../redux/playerSlice';
import Track from './Track';
import Controls from './Controls';
import SeekSongBar from './SeekSongBar';
import PlaySong from './PlaySong';
import VolumeBar from './VolumeBar';

const MusicPlayerBar = () => {
	const [repeat, setRepeat] = useState(false);
	const [shuffle, setShuffle] = useState(false);
	//seekTime is where you want to jump to in a song
	const [seekTime, setSeekTime] = useState(0);
	//appTime is where the song is at when singing
	const [appTime, setAppTime] = useState(0);
	//durationOfSong is how long does the song last
	const [durationOfSong, setDurationOfSong] = useState(0);
	const [volume, setVolume] = useState(0.6);


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
	const handleNextSong = () => {
		//if not shuffle means you dont want the songs to shuffle to next you want to follow order
		if (!shuffle) {
			dispatch(nextSong((currentIndex + 1) % currentSongs.length));
		} else {
			// if you want to shuffle therefore
			dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
		}
	};

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
					handlePlayingPausing={handlePlayingPausing} 
					handleNextSong={handleNextSong} 
					shuffle={shuffle} 
					setShuffle={setShuffle}
				/>
				<SeekSongBar 
					setSeekTime={setSeekTime} 
					appTime={appTime} 
					value={appTime} 
					min="0" 
					max={durationOfSong}
					onInput={(event) => setSeekTime(event.target.value)}
				/>
				<PlaySong 
					activeSong={activeSong} 
					isSongPlaying={isSongPlaying} 
					repeat={repeat} 
					volume={volume} 
					seekTime={seekTime} 
					onSongEnded={handleNextSong} 
					onLoadedData={(event) => setDurationOfSong(event.target.duration)} 
					onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
				/>
			</div>
			<VolumeBar 
				volumeValue={volume} 
				setVolume={setVolume}
			/>
		</div>
	)
}

export default MusicPlayerBar;