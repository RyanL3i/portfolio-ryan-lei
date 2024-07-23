import React from 'react'
import { FaLink } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Project = ({ project, aosProject, hasWebsite }) => {
    return (
        <>
            <img src={project.imageLink} alt={project.title} data-aos={aosProject ? "flip-up" : undefined} className="w-32 h-32 rounded-full p-4" />

            <div className="p-6">
                <h2 data-aos={aosProject ? "fade-left" : undefined} className="text-3xl font-bold text-left -ml-1 -mt-4 mb-4 text-teal-300">{project.title}</h2>
                <div data-aos={aosProject ? "fade-right" : undefined}>
                    <p className="text-white">{project.description}</p>

                    {hasWebsite ?
                        <div>
                            <a href={project.websiteUrl} target="_blank" className="flex items-center text-teal-300 hover:text-blue-700 hover:underline mt-8">
                                <FaLink className="text-teal-300 mr-2 hover:text-blue-700" />Website</a>
                            <a href={project.githubUrl} target="_blank" className="flex items-center text-teal-300 hover:text-blue-700 hover:underline mt-2">
                                <FaGithub className="text-teal-300 mr-2 hover:text-blue-700" />Github</a>
                        </div>
                        :
                            <a href={project.githubUrl} target="_blank" className="flex items-center text-teal-300 hover:text-blue-700 hover:underline mt-8">
                                <FaGithub className="text-teal-300 mr-2 hover:text-blue-700" />Github</a>

                    }
                </div>
            </div>
        </>
    )
}

export default Project
