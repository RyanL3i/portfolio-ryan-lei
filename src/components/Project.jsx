import React from 'react'
import { FaLink } from 'react-icons/fa';

const Project = ({ project, aosProject }) => {
    return (
        <>
            <img src={project.imageLink} alt={project.title} data-aos={aosProject ? "flip-up" : undefined} className="w-40 h-40 rounded-full p-6" />

            <div className="p-6">
                <h2 data-aos={aosProject ? "fade-left" : undefined} className="text-3xl font-bold text-left -ml-1 mb-4 text-teal-300">{project.title}</h2>
                <div data-aos={aosProject ? "fade-right" : undefined}>
                    <p className="text-white">{project.description}</p>

                    <a href={project.externalUrl} target="_blank" className="flex items-center text-teal-300 hover:text-blue-700 hover:underline mt-8">
                        <FaLink className="text-teal-300 mr-2 hover:text-blue-700" />Github</a>
                </div>
            </div>
        </>
    )
}

export default Project
