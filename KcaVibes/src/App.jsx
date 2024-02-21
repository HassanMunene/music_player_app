import Sidebar from './components/Sidebar.jsx';
import Searchbar from './components/Searchbar.jsx';
import TopPlay from './components/TopPlay';
import { Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover.jsx';
import TopArtists from './pages/TopArtists';
import TopCharts from './pages/TopCharts';
import AroundYou from './pages/AroundYou'
import ArtistDetails from './pages/ArtistDetails';
import SongDetails from './pages/SongDetails';
import Search from './pages/Search';
import { useSelector } from 'react-redux';

const App = () => {
	const activeSong = useSelector((state) => state.player.activeSong);
	return (
		<div className="relative flex">
			<Sidebar/>
			<div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
				<Searchbar />
				<div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex flex-col-reverse xl:flex-row">
					<div className="flex-1 h-fit pb-40">
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
					<div className="xl:sticky relative top-0 h-fit">
						<TopPlay />
					</div>
				</div>
			</div>
			{activeSong?.title && (
				<div className="absolute h-28 bottom-0 left-0 right-0 flex 
					bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
					MusicPlayerComponent
				</div>
			)}
		</div>
	)
}
export default App;