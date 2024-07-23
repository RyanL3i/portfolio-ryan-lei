import React from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


import sidePiano from '../assets/SidePiano.png';
import keshiLookDown from '../assets/KeshiLookDown.jpeg';
import pianoEnd from '../assets/PianoEnd.png'
import chinatown from '../assets/Chinatown.jpeg';



const Gallery = () => {
    const images = [
        {
            original: sidePiano,
            thumbnail: sidePiano,
        },
        {
            original: chinatown,
            thumbnail: chinatown
        },
        {
            original: keshiLookDown,
            thumbnail: keshiLookDown
        },
        {
            original: pianoEnd,
            thumbnail: pianoEnd
        },
       
    ];
    return (
        <div className=" border-2 border-teal-300 h-80 w-80 img_glow">
            <ImageGallery items={images} autoPlay={true} showThumbnails={false} showNav={false} slideInterval={1500}/>
        </div>
    )
}

export default Gallery
