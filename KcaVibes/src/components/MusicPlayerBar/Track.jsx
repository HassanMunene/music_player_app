import {useSelector} from 'react-redux';

const Track = ({isSongPlaying, isSongActive, activeSong}) => {

    return (
        <div className="flex-1 flex items-center justify-start">
            <div className={`${isSongPlaying && isSongActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
                <img alt="" src={activeSong?.track?.album?.images[0].url} className="rounded-full"/>
            </div>
            <div className="w-[50%]">
                <p className="truncate text-white font-bold text-lg">
                    {activeSong?.track?.album?.name ? activeSong.track.album.name : 'KcaVibes'}
                </p>
                <p className="truncate text-gray-300">
                    {activeSong?.track?.name ? activeSong.track.name : ''}
                </p>
            </div>
        </div>
    )
}

export default Track;
