import React from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';


const AllProjects = () => {
    useEffect(() => {
        document.title = "Ryan Lei-Projects"
            , []
    })

    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <nav className="bg-slate-700 fixed w-full z-50">
                <div className="h-10vh flex z-50 text-white lg:py-5 px-8 md:px-20 py-4 flex-1 border-b-2 border-slate-500 ">
                    <div className="flex items-center flex-1">
                        <span className="text-2xl font-bold">/projects %</span>
                    </div>
                    <div className="flex justify-end items-center">
                        <Link to="/">
                            <button className="flex flex-row items-center neon-button text-xs shadow-2xl hover:shadow-teal-300/50 text-white border-2 hover:bg-teal-300
                             hover:text-slate-800 border-teal-300 rounded-lg py-2 px-4 uppercase relative overflow-hidden font-bold">
                                <IoIosArrowBack className="mr-1" />Back
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            <ScrollToTop />
            <div className="bg-slate-800">
                <Projects onHomePage={false} />
            </div>
            <Footer/>
        </div>
    )
}

export default AllProjects
