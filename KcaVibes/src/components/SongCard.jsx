import {useDispatch} from 'react-redux';
import {setActiveSong, playPause} from '../redux/playerSlice';

import PlayPause from '../components/PlayPause';
import {Link} from 'react-router-dom';

const SongCard = ({song, isSongPlaying, activeSong, data}) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, index}));
    dispatch(playPause(true));
  };
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div className="w-[170px] p-4 bg-accent1 flex flex-col bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="w-full relative h-auto group">
        <div 
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.track?.name === song.track.name ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
            <PlayPause 
              song={song} 
              handlePlay={handlePlayClick} 
              handlePause={handlePauseClick} 
              isSongPlaying={isSongPlaying} 
              activeSong={activeSong}
            />
        </div>
        <img alt="song_img" src={song.track.album.images[0].url}/>
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg truncate text-black">
          <Link to={`/songs/${song?.track?.id}`}>{song.track.name}</Link>
        </p>
        <p className="text-sm truncate text-gray-700 mt-1">
          <Link to={song.track.artists ? `/artists/${song?.track?.artists[0]?.id}` : '/top-artists'}>
            {song?.track?.artists[0].name}
          </Link>
        </p>
      </div>
    </div>
  )
};

export default SongCard;
