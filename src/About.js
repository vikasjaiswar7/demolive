import React from 'react'
import Common from './Common'
import web from "../src/web/About.avif"

const About = () => {
    return (
        <div>
            <Common 
            name="Welcome to About page"
             imgsrc={web}
              visit="/contact"
              btname="Contact Me :)" />
        </div>
    )
}

export default About
