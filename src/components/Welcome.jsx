import Gallery from './Gallery';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import sidePiano from '../assets/SidePiano.png';



const Welcome = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        })
    }, [])

    return (
        <div id="Home" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[24px] md:text-[54px] font-semibold mb-8 leading-normal"> Hi! My name is <span className="text-teal-300">Ryan Lei</span>
                </h1>
                <p data-aos="fade-left">Hello! I'm Ryan Lei, an incoming Software Engineering Intern at IMC Trading. I am interested in creating modern, innovative, yet creative solutions to everyday problems.
                    At Northwestern University, I study Computer Science but simultaneously pursuing certificate programs at the Kellogg School of Management. In terms of future career
                    aspirations, I look to work at the intersection of both technology and entrepreneurship.
                </p>
                <div data-aos="fade-left" className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/RyanL3i" target="_blank" className="text-teal-300 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]" />
                            </a>
                            <a href="https://www.linkedin.com/in/ryan-lei9/" target="_blank" className="text-teal-300 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]" />
                            </a>
                            <a href="https://www.instagram.com/ryanl3i/" target="_blank" className="text-teal-300 rounded-full glow p-2">
                                <FaInstagram className="text-[28px]" />
                            </a>
                            <a href="mailto:ryanleiapps@gmail.com" className="text-teal-300 rounded-full glow p-2">
                                <IoIosMail className="text-[28px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/*<Gallery/>*/}
                <img data-aos="fade-up" src={sidePiano} className="w-full max-w-[1000px] h-auto rounded-3xl border-2 border-teal-300 img_glow" alt="Display Photo: Me playing piano" />
            </div>
        </div>
    )
}

export default Welcome
