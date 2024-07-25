import React from 'react';
import CTA from '../assets/CTALogo.svg';
import KCal from '../assets/KCal.png';
import LetterR from '../assets/LetterR.png';
import Tunepad from '../assets/TunepadLogo.png';
import Project from './Project';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = ({onHomePage }) => {
    const projects = [
        {
            title: "Personal Portfolio",
            description: `The website you are currently viewing, made to offer a glimpse into myself as a professional, 
            a student, and a human. Built using React, Vite, Tailwind CSS, and Firebase.`,
            imageLink: LetterR,
            hasWebsite: true,
            websiteUrl: "https://ryanlei.me",
            githubUrl: `https://github.com/RyanL3i/portfolio-ryan-lei`
            
        },
        {
            title: "TunePad",
            description: `Contributed to TunePad, a learning platform developed by Northwestern professors to teach
            music and python simultaneously. Submitted code for an adminstrative page built in React and Tailwind CSS.
            Contributed music/coding tutorials constructed in Python, as well as interactives for students to use.`,
            imageLink: Tunepad,
            hasWebsite: true,
            websiteUrl: "https://tunepad.com/",
            githubUrl: `https://github.com/RyanL3i`
        },
        {
            title: "Northwestern Bus Predictor",
            description: `A small application that routes a user towards the nearest bus stop based on their location
            on campus, and includes ETA's for campus buses. Built with C/C++, and using data taken from the
            Chicago Transit Authority public API.`,
            imageLink: CTA,
            hasWebsite: false,
            websiteUrl: "",
            githubUrl: `https://github.com/RyanL3i/nu-bus-stops`
        },
        {
            title: "Calorie Recommender",
            description: `A small-scale project constructed to help my friends with figuring out how many calories they
            should be eating. Served as my introduction to React.`,
            imageLink: KCal,
            hasWebsite: true,
            websiteUrl: "https://ryanl3i.github.io/calorie-calculator/",
            githubUrl: `https://github.com/RyanL3i/calorie-calculator`
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
                        <Project project={project} aosProject={onHomePage} hasWebsite={project.hasWebsite} />
                    </div>))
                    : projects.map((project, index) => (
                        <div key={index} className="shadow-lg rounded-lg overflow-hidden mt-2 flex flex-col">
                            <Project project={project} aosProject={onHomePage} hasWebsite={project.hasWebsite} />
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
