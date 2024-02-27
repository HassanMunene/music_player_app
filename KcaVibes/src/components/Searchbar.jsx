import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <form autoComplete="off" className="text-primary p-2 focus-within:text-gray-600">
      <label htmlFor="search-field"></label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch color="#283593" aria-hidden="true" className="w-5 h-5 ml-4 text-white"/>
        <input
          name="search-field" 
          autoComplete="off" 
          id="search-field" 
          placeholder="Search" 
          className="flex-1 bg-transparent border-none outline-none text-primary p-4"
        />
      </div>
    </form>
  )
};

export default Searchbar;
