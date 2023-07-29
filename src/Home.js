import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import Common from './Common';
import web from "../src/web/home.jpg"

const Home = () => {
   
    return (
        <Common name="Grow your business" imgsrc={web} visit="/contact" btname="Contact Me :)" />
    )
}

export default Home
