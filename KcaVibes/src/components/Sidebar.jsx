import {NavLink} from 'react-router-dom';
import {HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { FaTrophy } from "react-icons/fa";

const Links = [
  {id: 1, name: 'Home', to: '/', icon: HiOutlineHome},
  {id: 2, name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup},
  {id: 3, name: 'Top Charts', to: '/top-charts', icon: FaTrophy },
  {id: 4, name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph},
]

const NavLinks = () => {
  return (
    <div className="mt-10">
      {Links.map((item) => {
        return (
          <NavLink 
            key={item.id} 
            to={item.to} 
            className="flex flex-row my-8 justify-start items-center text-sm text-gray-400 font-medium hover:text-cyan-500"
          >
            <item.icon className="w-6 h-6 mr-2"/>
            {item.name}
          </NavLink>
        )
      })}
    </div>
  )
}


const Sidebar = () => {
  return(
    <div className="hidden md:h-[87vh] md:flex flex-col w-[240px] py-10 px-4 bg-[#191624] border border-[#0e0d18] rounded-lg">
      <h1 className="text-2xl font-bold text-white">Kca<span className="text-[#ffff00]">Vibes</span></h1>
      <NavLinks/>
    </div>
  )
};

export default Sidebar;
