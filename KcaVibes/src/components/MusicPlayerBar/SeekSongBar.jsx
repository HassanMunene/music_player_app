import { TfiLineDashed } from "react-icons/tfi";

const SeekSongBar = ({setSeekTime, appTime, value, min, max, onInput, activeSong}) => {
    //getTime method takes time and convers it to 00:00 format so as to represent time in min:secs
    const getTime = (time) => {
        return `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
    }
    return (
        <div className="flex flex-row items-center">
            {activeSong?.track?.name ? (
                <p className="text-white text-sm">{value === 0 ? '0:00' : getTime(value)}</p>
            ): (
                <TfiLineDashed/>
            )}

            <input 
                type="range" 
                value={value} 
                min={min} 
                max={max} 
                step="any" 
                onInput={onInput} 
                className="w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg cursor-pointer" 
            />

            {activeSong?.track?.name ? (
                <p className="text-white text-sm">{max === 0 ? '0:00' : getTime(max)}</p>
            ): (
                <TfiLineDashed/>
            )}
        </div>
    )
}
export default SeekSongBar;
