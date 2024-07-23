import React from 'react';
import sample from '../assets/PianoPlaying.png';
import Project from './Project';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = ({onHomePage }) => {
    const projects = [
        {
            title: "Personal Portfolio",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            imageLink: sample,
            externalUrl: `https://github.com/RyanL3i/calorie-calculator`
        },
        {
            title: "TunePad",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `,
            imageLink: sample,
            externalUrl: `https://github.com/RyanL3i/calorie-calculator`
        },
        {
            title: "Calorie Recommender",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co`,
            imageLink: sample,
            externalUrl: `https://github.com/RyanL3i/calorie-calculator`
        },
        {
            title: "test 1",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co`,
            imageLink: sample,
            externalUrl: `https://github.com/RyanL3i/calorie-calculator`
        },
        {
            title: "test 2",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co`,
            imageLink: sample,
            externalUrl: `https://github.com/RyanL3i/calorie-calculator`
        },
    ];

    /*const [onHome, setOnHome] = useState({displayAll});
    const handleHome = () => (
        setOnHome(!onHome)
    );*/

    return (
        <div id="Projects" data-aos={onHomePage ? "fade-right" : undefined} className="py-24 px-20 flex flex-col items-center justify-center">
            <h1 className="text-[54px] font-semibold mb-4 leading-normal text-center uppercase text-teal-300">{onHomePage ? "Projects" : "All Projects"}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {onHomePage ? projects.slice(0, 3).map((project, index) => (
                    <div key={index} className="shadow-lg rounded-lg overflow-hidden mt-2 flex flex-col">
                        <Project project={project} aosProject={onHomePage} />
                    </div>))
                    : projects.map((project, index) => (
                        <div key={index} className="shadow-lg rounded-lg overflow-hidden mt-2 flex flex-col">
                            <Project project={project} aosProject={onHomePage} />
                        </div>
                    ))
                }
            </div>
            <Link to={onHomePage? "/projects" : "/"}>
                <button className="neon-button shadow-2xl hover:shadow-teal-300/50 text-white border-2 hover:bg-teal-300 hover:text-slate-800 border-teal-300
                rounded-lg py-4 px-8 uppercase relative overflow-hidden mt-12 font-bold">
                    {onHomePage ? "All Projects" : "Back to HomePage"}
                </button>
            </Link>
        </div>
    )
}

export default Projects
