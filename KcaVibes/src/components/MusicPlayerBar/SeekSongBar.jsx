const SeekSongBar = ({setSeekTime, appTime}) => {
    //getTime method takes time and convers it to 00:00 format so as to represent time in min:secs
    const getTime = (time) => {
        return `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
    }
    return (
        <div className="flex flex-row items-center">
            <button type="button" onClick={() => setSeekTime(appTime - 5)} className="hidden sm:block lg:mr-4 text-white">-</button>
        </div>
    )
}
export default SeekSongBar;
