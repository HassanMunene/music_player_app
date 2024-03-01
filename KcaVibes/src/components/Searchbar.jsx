import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="text-white p-2 focus-within:text-white sm:rounded-lg sm:ml-1 sm:mb-1">
      <label htmlFor="search-field"></label>
      <div className="flex flex-row justify-start items-center bg-[#242424] md:w-[50%] rounded-lg">
        <button type="submit">
          <FiSearch color="#fff" aria-hidden="true" className="w-5 h-5 ml-4 font-bold"/>
        </button>
        <input
          name="search-field" 
          autoComplete="off" 
          id="search-field" 
          placeholder="Search" 
          className="flex-1 bg-transparent border-none outline-none text-white p-4 placeholder-white" 
          type="search" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  )
};

export default Searchbar;
