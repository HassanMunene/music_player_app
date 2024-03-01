import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';

import Discover from './pages/Discover.jsx';
import TopArtists from './pages/TopArtists';
import TopCharts from './pages/TopCharts';
import AroundYou from './pages/AroundYou'
import ArtistDetails from './pages/ArtistDetails';
import SongDetails from './pages/SongDetails';
import Search from './pages/Search';

import Sidebar from './components/Sidebar.jsx';
import Searchbar from './components/Searchbar.jsx';
import TopPlay from './components/TopPlay';
import MusicPlayerBar from './components/MusicPlayerBar/MusicPlayerBar';

//


const App = () => {
	const {activeSong} = useSelector((state) => state.player);
	return (
		<div className="relative md:p-2 flex bg-black w-full h-screen min-h-full m-0 gap-2">
			<Sidebar/>
			<div className="flex-1 flex flex-col bg-background2 rounded-lg h-[88%]">
				<Searchbar/>
				<div className="sm:pl-2 overflow-y-scroll hide-scrollbar flex flex-col lg:flex-row gap-[20px]">
					<div className="flex-1 h-fit rounded-lg">
						<Routes>
							<Route path="/" element={<Discover/>}/>
		 					<Route path="/top-artists" element={<TopArtists/>}/>
		 					<Route path="/top-charts" element={<TopCharts/>}/>
							<Route path="/around-you" element={<AroundYou />} />
							<Route path="/artists/:id" element={<ArtistDetails />} />
							<Route path="/songs/:songid" element={<SongDetails />} />
		 					<Route path="/search/:searchTerm" element={<Search />} />
						</Routes>
					</div>
					<div className="lg:sticky relative top-0 h-fit flex-1">
						<TopPlay />
					</div>
		 		</div>
		 		<div>Artists section</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0 z-10 bg-black h-[12%] flex items-center sm:mx-2 rounded-lg">
				<MusicPlayerBar/>
			</div>
		</div>
	)
}
export default App;

//md:h-[calc(100vh-70px)]