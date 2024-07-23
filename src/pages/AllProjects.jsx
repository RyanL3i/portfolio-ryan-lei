import React from 'react';
import Projects from '../components/Projects';
import ScrollToTop from './ScrollToTop';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const AllProjects = () => {
    useEffect(() => {
        document.title = 'Ryan Lei-Projects';
      }, []);
    return (
        <>
            <nav className="bg-slate-700 fixed w-full z-50">
                <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 border-b-2 border-slate-500 ">
                    <div className="flex items-center flex-1">
                        <span className="text-2xl font-bold">portfolio-ryan-lei/projects %</span>
                    </div>
                    <div className="flex justify-end items-center mb-12">
                        <Link to="/">
                            <button className="neon-button shadow-2xl hover:shadow-teal-300/50 text-white border-2 hover:bg-teal-300 hover:text-slate-800
                             border-teal-300 rounded-lg py-4 px-4 uppercase relative overflow-hidden mt-12 font-bold">
                                Back To Homepage
                            </button>
                        </Link>
                    </div>
                    </div>
            </nav>
            <ScrollToTop />
            <div className="bg-slate-800">
                <Projects onHomePage={false} />
            </div>
        </>
    )
}

export default AllProjects
