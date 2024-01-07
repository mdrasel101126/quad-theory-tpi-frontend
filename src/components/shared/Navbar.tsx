import Link from "next/link";
import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Navbar = ({}) => {
  const [isMenuOpen,setIsMenuOpen]=useState<boolean>(false);
  return (
   <div className='bg-[#ececec]'>
     <div className='max-w-[1200px] mx-auto my-4'>
        <nav className="flex flex-row md:justify-between mx-3">
            <div className="">
             <Link href="/">
             <h1 className='text-2xl font-bold'>pti.</h1>
             </Link>
            </div>
            <div className="flex flex-row w-full md:w-3/5 ml-5 md:ml-0 ">
               <div className="relative flex items-center w-full h-12 rounded-lg bg-white overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-300">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                     </svg>
                  </div>
                <input
                  className="peer h-full w-full outline-none text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search Audiobook" /> 
               </div>
               <div onClick={()=>setIsMenuOpen(!isMenuOpen)} className="relative ml-2">
                <div className="bg-white flex flex-row justify-between items-center w-36 rounded-lg h-12 px-2">
                  <p className="font-bold text-lg">Menu</p>
                  <span className="font-semibold text-orange-500 right-1">
                    {isMenuOpen?<IoIosArrowDown/>:<IoIosArrowUp/>}
                  </span>
                </div>
                 {
                  isMenuOpen && <div className="absolute w-36 bg-white my-2 rounded-lg z-10">
                  <ul className="my-3">
                    <Link href="/">
                    <li className="cursor-pointer px-3 py-1 text-slate-500 hover:text-orange-500 hover:bg-[#ececec]">Home</li>
                    </Link>
                    <li className="cursor-pointer px-3 py-1 text-slate-500 hover:text-orange-500 hover:bg-[#ececec]">Details</li>
                    <li className="cursor-pointer px-3 py-1 text-slate-500 hover:text-orange-500 hover:bg-[#ececec]">Category</li>
                    <li className="cursor-pointer px-3 py-1 text-slate-500 hover:text-orange-500 hover:bg-[#ececec]">My Favorites</li>
                    <li className="cursor-pointer px-3 py-1 text-slate-500 hover:text-orange-500 hover:bg-[#ececec]">Profile</li>
                    <li className="cursor-pointer px-3 py-1 text-slate-500 hover:text-orange-500 hover:bg-[#ececec]">Log In/Sign In</li>
                  </ul>
                 </div>
                 }
               </div>
            </div>
           <div className="hidden md:block">
           <div className="bg-orange-500 w-10 h-10 rounded-full text-white text-xl font-semibold flex flex-row justify-center items-center 
            ">
              <GoPerson  />
            </div>
           </div>
        </nav>
    </div>
   </div>
  )
}

export default Navbar
  

  
  