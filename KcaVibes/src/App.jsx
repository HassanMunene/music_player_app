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
		<div className="md:p-2 flex">
			<Sidebar/>
			<div>
				<Searchbar/>
				<div>
					<div className="flex flex-col-reverse">
						<Routes>
							<Route path="/" element={<Discover/>}/>
		 					<Route path="/top-artists" element={<TopArtists/>}/>
		 					<Route path="/top-charts" element={<TopCharts/>}/>
							<Route path="/around-you" element={<AroundYou />} />
							<Route path="/artists/:id" element={<ArtistDetails />} />
							<Route path="/songs/:songid" element={<SongDetails />} />
		 					<Route path="/search/:searchTerm" element={<Search />} />
						</Routes>
						<div className="lg:sticky relative top-0 h-auto overflow-y-scroll">
							<TopPlay />
						</div>
		 			</div>

		 		</div>
			</div>
		</div>

		// <div className="relative">
		// 	<div className="relative flex gap-2 md:h-[89vh] flex-col-reverse lg:flex-row">
		// 		<Sidebar/>
		// 		<div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
		// 			<Searchbar />
		// 			<div className="px-6 h-auto  overflow-y-scroll hide-scrollbar flex">
		// 				<div className="flex-1 h-auto pb-40">
		// 					<Routes>
		// 						<Route path="/" element={<Discover/>}/>
		// 						<Route path="/top-artists" element={<TopArtists/>}/>
		// 						<Route path="/top-charts" element={<TopCharts/>}/>
		// 						<Route path="/around-you" element={<AroundYou />} />
		// 						<Route path="/artists/:id" element={<ArtistDetails />} />
		// 						<Route path="/songs/:songid" element={<SongDetails />} />
		// 						<Route path="/search/:searchTerm" element={<Search />} />
		// 					</Routes>
		// 				</div>	
		// 			</div>
		// 		</div>
		// 		<div className="lg:sticky relative top-0 h-auto overflow-y-scroll">
		// 			<TopPlay />
		// 		</div>
		// 	</div>
		// 	<div className="absolute bottom-0 left-0 right-0 z-10 bg-[#0D0D0D]">
		// 		<MusicPlayerBar/>
		// 	</div>
		// </div>
	)
}
export default App;

//md:h-[calc(100vh-70px)]