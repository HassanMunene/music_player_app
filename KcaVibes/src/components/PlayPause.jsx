import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const PlayPause = ({song,handlePlay, handlePause, isSongPlaying, activeSong, size}) => {
  return (
    <>
      {isSongPlaying && activeSong?.track?.name === song?.track?.name 
      ? (<FaPauseCircle size={size} className="text-green-500" onClick={handlePause}/>)
      : (<FaPlayCircle size={size} className="text-green-500" onClick={handlePlay}/>)
      }
    </>
  )
};

export default PlayPause;
