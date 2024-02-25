const SeekSongBar = ({setSeekTime, appTime, value, min, max, onInput}) => {
    //getTime method takes time and convers it to 00:00 format so as to represent time in min:secs
    const getTime = (time) => {
        return `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
    }
    return (
        <div className="flex flex-row items-center">
            <button type="button" onClick={() => setSeekTime(appTime - 5)} className="hidden sm:block mr-4 text-white">-</button>
            <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
            <input 
                type="range" 
                value={value} 
                min={min} 
                max={max} 
                step="any" 
                onInput={onInput} 
                className="w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
            />
            <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
            <button type="button" onClick={() => setSeekTime(appTime + 5)} className="hidden sm:block ml-4 text-white">+</button>
        </div>
    )
}
export default SeekSongBar;
