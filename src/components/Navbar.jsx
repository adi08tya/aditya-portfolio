import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react";
const Navbar = () => {
    const[menu,setmenu] = useState(false);
    const[showMenu,setshowMenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6">
       <span className="text-xl font-bold tracking-wide">Portfolio</span>
       <ul className={`${menu? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-[rgba(0,0,0,0.2)] px-2 rounded-xl md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="#About">
        <li className="text-lg transition-all duration-300 p-1 md:p-0 hover:scale-110">About</li>
        </a>
        <a href="#Experience">
        <li className="text-lg transition-all duration-300 p-1 md:p-0 hover:scale-110">Skill-Set</li>
        </a>
        <a href="#Projects">
        <li className="text-lg transition-all duration-300 p-1 md:p-0 hover:scale-110">Projects</li>
        </a>
        <a href="#Contact">
        <li className="text-lg transition-all duration-300 p-1 md:p-0 hover:scale-110 ">Contact</li>
        </a>
       </ul>
       {showMenu? 
       <RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition all duration 300 cursor-pointer" onClick={()=>{
         setmenu(!menu);
         setshowMenu(!showMenu);
       }}/>:<RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition all duration 300 cursor-pointer" onClick={()=>{
        setmenu(!menu);
        setshowMenu(!showMenu);
       }}/>  }
    </nav>
  )
}

export default Navbar;
