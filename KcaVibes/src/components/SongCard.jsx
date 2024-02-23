import PlayPause from '../components/PlayPause';

const SongCard = ({song}) => (
  <div 
    className="w-[250px] p-4 bg-white/5 flex flex-col bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="w-full relative h-56 group">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-40 group-hover:flex`}>
          <PlayPause/>
      </div>
      <img alt="song_img" src={song.track.album.images[0].url}/>
    </div>
  </div>
);

export default SongCard;
