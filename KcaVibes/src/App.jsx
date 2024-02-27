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
		<div className="relative md:p-2 flex bg-background">
			<Sidebar/>
			<div className="flex-1 flex flex-col">
				<Searchbar/>
				<div className="sm:pl-2 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex flex-col-reverse lg:flex-row">
					<div className="flex-1 h-fit pb-40 rounded-lg">
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
					<div className="lg:sticky relative top-0 h-fit">
						<TopPlay />
					</div>
		 		</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0 z-10 bg-[#0D0D0D] h-[100px] flex items-center mx-2 rounded-lg">
				<MusicPlayerBar/>
			</div>
		</div>
	)
}
export default App;

//md:h-[calc(100vh-70px)]