import {useParams} from 'react-router-dom';
import { useGetSongBySearchQuery } from '../redux/spotifyApi';

const Search = () => {
  const {searchTerm} = useParams();


  //im supposed to use this to get the data from spotify but im just gonna use normal data.
  //const { data, isFetching, error } = useGetSongBySearchQuery(searchTerm)
  console.log(data); 


  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl sm:text-3xl text-black text-left mt-4 mb-10">
        Showing results for <span className="text-primary">{searchTerm}</span>
      </h1>

      <div className="flex flex-wrap">
        
      </div>
    </div>
  );
};

export default Search;
