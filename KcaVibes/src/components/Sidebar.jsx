import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { FaTrophy } from "react-icons/fa";
import { RiCloseLine } from 'react-icons/ri';

const Links = [
  {id: 1, name: 'Home', to: '/', icon: HiOutlineHome},
  {id: 2, name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup},
  {id: 3, name: 'Top Charts', to: '/top-charts', icon: FaTrophy },
  {id: 4, name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph},
]

const NavLinks = ({handleClick}) => {
  return (
    <div className="mt-10">
      {Links.map((item) => {
        return (
          <NavLink 
            key={item.id} 
            to={item.to} 
            className="flex flex-row my-8 justify-start items-center text-sm text-gray-400 font-medium hover:text-cyan-500" 
            onClick={handleClick}
          >
            <item.icon className="w-6 h-6 mr-2 "/>
            {item.name}
          </NavLink>
        )
      })}
    </div>
  )
}


const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return(
    <>
      <div className="hidden md:h-[87vh] md:flex flex-col w-[240px] py-10 px-4 bg-[#191624] border border-[#0e0d18] rounded-lg">
        <h1 className="text-2xl font-bold text-white">Kca<span className="text-[#ffff00]">Vibes</span></h1>
        <NavLinks/>
      </div>

      {/*mobile sidebar burgers*/}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2 cursor-pointer" onClick={() => setMobileMenuOpen(true)}/>
        ): (
          <RiCloseLine className="w-6 h-6 text-white mr-2 cursor-pointer" onClick={() => setMobileMenuOpen(false)}/>
        )}
      </div>

      {/*mobile sidebar menu*/}
      <div className={`absolute md:hidden top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg smooth-transition z-10 p-6 ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <h1 className="text-2xl font-bold text-white">Kca<span className="text-[#ffff00]">Vibes</span></h1>
        <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div>
    </>

  )
};

export default Sidebar;
