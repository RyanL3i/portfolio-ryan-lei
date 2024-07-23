import React from 'react'
import {useState} from 'react'
import { Link } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import{CiMenuFries} from 'react-icons/ci';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }
  
  const shrunkContent = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-9 bg-slate-600 transition">
      <ul className="text-center text-xl">
        <Link spy={true} smooth={true} to="Home"> 
          <li className="my-4 py-4 border-b border-slate-600 hover:bg-slate-800 hover:text-teal-300 hover:rounded">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-800 hover:text-teal-300 hover:rounded">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects">
          <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-800 hover:text-teal-300 hover:rounded">Projects</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-800 hover:text-teal-300 hover:rounded">Contact</li>
        </Link>
      </ul>
    </div>
  </>
  return (
    <nav className="bg-slate-700 fixed w-full z-50">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 border-b-2 border-slate-500">
        <div className="flex items-center flex-1"> 
          <span className="text-2xl font-bold">portfolio-ryan-lei %</span>
        </div>
        <div className=" lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-teal-300 transition border-b-2 border-slate-700 hover:border-teal-300 cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-teal-300 transition border-b-2 border-slate-700 hover:border-teal-300 cursor-pointer">About</li>
              </Link> 
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-teal-300 transition border-b-2 border-slate-700 hover:border-teal-300 cursor-pointer">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-teal-300 transition border-b-2 border-slate-700 hover:border-teal-300 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </div>

        <div>
          {click && shrunkContent}  {/* occurs when shrunk */}
        </div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
