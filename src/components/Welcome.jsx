import Gallery from './Gallery';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



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
                <p data-aos="fade-left">Hello! I'm Ryan Lei, a current software developer for TunePad. I am interested in creating modern, innovative, yet creative solutions to everyday problems.
                    At Northwestern University, I am studying Computer Science but simultaneously pursuing certificate programs in Economics and Finance. In terms of future career
                    aspirations, I look to work at the intersection of both technology and entrepreneurship.
                </p>
                <div data-aos="fade-left" className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/RyanL3i" target="_blank" className="text-teal-300 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]" />
                            </a>
                            <a href="https://www.linkedin.com/in/ryan-lei-a12835253/" target="_blank" className="text-teal-300 rounded-full glow p-2">
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
                <Gallery/>
            </div>
            {/*<img data-aos="fade-up" src={sidePiano} width={350} height={350} className="rounded-3xl border-2 border-teal-300 img_glow" alt="Display Photo: Me playing piano" />*/}
        </div>
    )
}

export default Welcome
