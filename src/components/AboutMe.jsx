import React from 'react'
import hawaiiFlex from '../assets/HawaiiFlex.png';

const AboutMe = () => {
  return (
    <div id="About" className="mb-24 lg:mb-40 mt-20 lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <img data-aos="fade-down" src={hawaiiFlex} width={350} height={350} className="border-2 border-teal-300 img_glow" alt="Display Photo: Me playing piano" />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-left" className="text-[54px] font-semibold mb-8 leading-normal uppercase text-teal-300">About Me</h1>
        <p data-aos="fade-right">Besides academics, I love to travel, with Hawaii and Europe being 2 of my favorite destinations. Throughout my life,
          I have worked hard to try and incorporate my love of music and fitness through piano performance and bodybuilding.
          Would always love to chat about sports, movies, TV shows, music, food, or fitness!
        </p>
        <div data-aos="fade-right" className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <a href="https://firebasestorage.googleapis.com/v0/b/resume-4aaff.appspot.com/o/Resume%2FRyan%20Lei_%20Resume%20(1).pdf?alt=media&token=2d7f0fb3-cfaa-4892-9738-6cc69cd47b07" target="_blank">
                <button className="neon-button shadow-2xl hover:shadow-teal-300/50 text-white border-2 hover:bg-teal-300 hover:text-slate-800 border-teal-300
              rounded-lg py-4 px-8 uppercase relative overflow-hidden font-bold">Resume</button>
              </a>
              
              {/* <button className="neon-button shadow-2xl hover:shadow-teal-300/50 text-white border-2 hover:bg-teal-300 hover:text-slate-800 border-teal-300
              rounded-lg py-4 px-8 uppercase relative overflow-hidden font-bold">More About Me</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
