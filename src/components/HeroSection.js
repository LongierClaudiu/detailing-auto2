import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>

            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <h1>EUP DETAILING AUTO</h1>
            <p>Ce mai astepti?</p>
           
        

        </div>
    )
}

export default HeroSection


/*
    <div className="hero-btns">
                <Button className='btns'
                 buttonStyle='btn--outline'
                 buttonSize='btn--large'
                 >
                     GET STARTED
                 </Button>
            </div>


            <div className="hero-btns">
                <Button className='btns'
                 buttonStyle='btn--primary'
                 buttonSize='btn--large'
                 >
                     WATCH TRAILER <i className='far fa-play-circle'/>
                 </Button>
            </div>


*/