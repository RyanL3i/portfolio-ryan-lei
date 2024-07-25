import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
  return (
    <div className="w-full bg-slate-700 h-20vh">
      <div className="w-full flex items-center justify-between md:-mr-20 md:px-20 px-4 py-10">
        <div className="flex flex-col space-y-4 ">
          <p className="text-slate-400 text-md"> Ryan Lei</p>
          <p className="text-slate-400 text-xs">(312)-880-7758</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4">
          <a href="https://github.com/RyanL3i" target="_blank" className="text-md text-slate-400 hover:text-white rounded-full p-2 flex items-center space-x-2">
            <AiFillGithub/> <p>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/ryan-lei-a12835253/" target="_blank" className="text-md text-slate-400 hover:text-white rounded-full p-2 flex items-center space-x-2">
            <FaLinkedinIn/> <p>LinkedIn</p>
          </a>
          <a href="https://www.instagram.com/ryanl3i/" target="_blank" className="text-md text-slate-400 hover:text-white rounded-full p-2 flex items-center space-x-2">
            <FaInstagram/> <p>Instagram</p>
          </a>
          <a href="mailto:ryanleiapps@gmail.com" className="text-md text-slate-400 hover:text-white rounded-full p-2 flex items-center space-x-2">
            <IoIosMail/> <p>Email</p>
          </a>
        </div>


      </div>
    </div>
  )
}

export default Footer
