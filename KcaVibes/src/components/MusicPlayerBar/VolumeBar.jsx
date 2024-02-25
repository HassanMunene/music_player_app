import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

const VolumeBar = ({volumeValue, setVolume}) => {
    return (
        <div className="flex-1 hidden lg:flex items-center justify-end">
        	{volumeValue <= 1 && volumeValue > 0.5 && <BsFillVolumeUpFill size={20} color="#fff" onClick={() => setVolume(0)} className="cursor-pointer"/>}
        	{volumeValue <= 0.5 && volumeValue > 0 && <BsVolumeDownFill size={20} color="#fff" onClick={() => setVolume(0)} className="cursor-pointer"/>}
        	{volumeValue === 0 && <BsFillVolumeMuteFill size={20} color="red" onClick={() => setVolume(1)} className="cursor-pointer"/>}
        	<input 
        		type="range" 
        		step="any" 
        		min="0"
        		max="1"
        		value={volumeValue} 
        		onChange={(event) => setVolume(event.target.value)} 
        		className="cursor-pointer 2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
        	/>
        </div>
    )
}

export default VolumeBar;
