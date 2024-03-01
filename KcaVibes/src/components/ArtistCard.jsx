import {Link} from 'react-router-dom';

const ArtistCard = () => {
  return (
    <div className="w-[100%] p-4 bg-[#181818] hover:bg-[#3b3a3a] flex-1 flex flex-col relative transition-background duration-300 ease-in animate-slideup rounded-lg cursor-pointer group">
      <div className="w-full h-full flex flex-col">
        <img alt="song_img" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjCEDiOB_-5mWBJ7A8WgodTbeTeADVREbb_pfeRvrE1WKVk-Ng" className="w-[92px] rounded-full shadow"/>
        <div className="mt-4 flex flex-col">
          <p className="font-semibold text-xl truncate text-white">
            <Link>Yatapita</Link>
          </p>
          <p className="text-sm truncate text-white mt-1">
            <Link>
              <span className="text-gray-500">song .</span>{" "}Diamond
            </Link>
          </p>
        </div>
        <div className="hidden group-hover:block absolute right-[20px] bottom-[20px] shadow-lg translate-y-[8px] transition-all duration-300 ease-in">
             playpause
        </div>
      </div>
    </div>
  )
};


        // <div 
        //   className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.track?.name === song.track.name ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
        //     <PlayPause 
        //       song={song} 
        //       handlePlay={handlePlayClick} 
        //       handlePause={handlePauseClick} 
        //       isSongPlaying={isSongPlaying} 
        //       activeSong={activeSong}
        //     />
        // </div>
export default ArtistCard;
