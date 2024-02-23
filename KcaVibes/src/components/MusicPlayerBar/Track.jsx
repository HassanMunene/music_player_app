import {useSelector} from 'react-redux';

const Track = ({isSongPlaying, isSongActive}) => {
    const {activeSong} = useSelector((state) => state.player);

    return (
        <div className="flex-1 flex items-center justify-start">
            <div className={`${isSongPlaying && isSongActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
                <img alt="cover art" src={activeSong?.track?.album?.images[0].url} className="rounded-full"/>
            </div>
        </div>
    )
}

export default Track;
