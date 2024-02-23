import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const PlayPause = ({song,handlePlay, handlePause, isSongPlaying, activeSong}) => {
  return (
    <>
      {isSongPlaying && activeSong?.name === song.track.name 
      ? (<FaPauseCircle size={35} className="text-green-500" onClick={handlePause}/>)
      : (<FaPlayCircle size={35} className="text-green-500" onClick={handlePlay}/>)
      }
    </>
  )
};

export default PlayPause;
