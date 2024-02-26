import {BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle} from 'react-icons/bs';
import { RiRepeat2Fill } from "react-icons/ri";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

const Controls = ({repeat, setRepeat, currentSongs, handlePrevSong, isSongPlaying, handlePlayingPausing, handleNextSong, shuffle, setShuffle, activeSong}) => {
	return (
		<div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-50">
			{activeSong?.track?.name ? (
				<RiRepeat2Fill size={20} color={repeat ? 'red' : 'white'}
				onClick={() => setRepeat((prev) => !prev)} 
				className="hidden sm:block cursor-pointer"/>
			): (
				<RiRepeat2Fill size={20} color="gray"/>
			)}

			{currentSongs?.length ? (
				<MdSkipPrevious size={25} color='#fff' className="cursor-pointer" onClick={handlePrevSong}/>
			): (
				<MdSkipPrevious size={25} color="gray"/>
			)}


			{activeSong?.track?.name ? (
				isSongPlaying ? (<BsFillPauseFill size={30} color="#fff" onClick={handlePlayingPausing} className="cursor-pointer"/>)
				: (<BsFillPlayFill size={30} color="#fff" onClick={handlePlayingPausing} className="cursor-pointer"/>)
			): (
				<BsFillPauseFill size={30} color="gray" />
			)}


			{currentSongs?.length ? (
				<MdSkipNext size={25} color="#fff" onClick={handleNextSong} className="cursor-pointer"/>
			): (
				<MdSkipNext size={25} color="gray"/>
			)}

			{activeSong?.track?.name ? (
				<BsShuffle size={20} color={shuffle ? 'red' : 'white'} 
				onClick={() => setShuffle((prev) => !prev)} 
				className="hidden sm:block cursor-pointer"/>
			) : (
				<BsShuffle size={20} color="gray"/>
			)}
		</div>
	)
}
export default Controls;