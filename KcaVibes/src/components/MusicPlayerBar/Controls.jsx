import {BsArrowRepeat} from 'react-icons/bs';
import { MdSkipPrevious } from "react-icons/md";

const Controls = ({repeat, setRepeat, currentSongs, handlePrevSong}) => {
	return (
		<div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-50">
			<BsArrowRepeat size={20} color={repeat ? 'red' : 'white'}
				onClick={() => setRepeat((prev) => !prev)} 
				className="hidden sm:block cursor-pointer"
			/>
			{currentSongs?.length && <MdSkipPrevious size={30} color='#fff' className="cursor-pointer" onClick={handlePrevSong}/>}
		</div>
	)
}
export default Controls;