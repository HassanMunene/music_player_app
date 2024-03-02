import {useDispatch} from 'react-redux';
import {setActiveSong, playPause} from '../redux/playerSlice';

import PlayPause from '../components/PlayPause';
import {Link} from 'react-router-dom';

const TopResultsCard = ({song, isSongPlaying, activeSong, data}) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, index}));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div className="w-[100%] p-4 bg-[#181818] hover:bg-[#3b3a3a] flex flex-col relative transition-background duration-300 ease-in animate-slideup rounded-lg cursor-pointer group">
      <div className="w-full h-full flex flex-col">
        <img alt="song_img" 
          src={song?.albumOfTrack?.coverArt?.sources[0]?.url} 
          className="w-[92px] rounded-md shadow"
        />
        <div className="mt-4 flex flex-col">
          <p className="font-semibold text-xl truncate text-white">
            <Link>{song?.albumOfTrack?.name}</Link>
          </p>
          <p className="text-sm truncate text-white mt-1">
            <Link>
              <span className="text-gray-500">{song?.artists?.items[0]?.profile?.name}</span>
            </Link>
          </p>
        </div>
        <div className="hidden group-hover:block absolute right-[20px] bottom-[20px] shadow-lg translate-y-[8px] transition-all duration-300 ease-in">
             <PlayPause 
                song={song} 
                handlePlay={handlePlayClick} 
                handlePause={handlePauseClick} 
                isSongPlaying={isSongPlaying} 
                activeSong={activeSong}
              />
        </div>
      </div>
    </div>
  )
};

export default TopResultsCard;
