import {useRef, useEffect} from 'react';

const PlaySong = ({activeSong, isSongPlaying, repeat, volume, seekTime, onSongEnded, onLoadedData, onTimeUpdate}) => {
    // create a reference to a DOM element but initially it will be null before component
    // has been mounted
    const ref = useRef(null);

    // after the component has been rendered for the first time or updated
    // ref.current is no longer null rather it is populated with the DOM element in this case <audio/>

    //check if ref.current is pointing to a valid DOM element
    // if it is valid, we will check the isSongPlaying state to determine what to do
    useEffect(() => {
        if (ref.current && activeSong.track.preview_url) {
            if(isSongPlaying) {
                ref.current.play()
                .then(() => console.log('playback started'))
                .catch((error) => console.log('playback failed:', error));
            } else {
                ref.current.pause();
                console.log('playback paused');
            }
        }
    }, [activeSong, isSongPlaying]);

    // this useEffect will come into effect when the volume state changed
    useEffect(() => {
        ref.current.volume = volume;
    }, [volume]);

    // this useEffect will work when user decides to move song to a different time using seeTimeBar
    useEffect(() => {
        ref.current.currentTime = seekTime;
    }, [seekTime]);
    return (
        <audio
            src={activeSong?.track?.preview_url}
            ref={ref} 
            loop={repeat}
            onEnded={onSongEnded} 
            onLoadedData={onLoadedData} 
            onTimeUpdate={onTimeUpdate}
        />
    )
}
export default PlaySong;
