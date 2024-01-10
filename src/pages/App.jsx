import React from 'react';
import Head from "../components/head/Head.jsx";
import Header from "../components/header/Header.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import Hero from "../components/hero/Hero.jsx";
import AboutUs from "../components/aboutUs/aboutUs.jsx";
import WhyUs from "../components/whyUs/whyUs.jsx";
import VideoSection from "../components/videoSection/videoSection.jsx";
import Teachers from "../components/teachers/teachers.jsx";
import PreFinal from "../components/preFinal/preFinal.jsx";
function App(props) {
    return (
        <div>
            {/*<Head/>*/}
            <Header/>
            <Navbar/>
            <Hero/>
            <AboutUs/>
            <WhyUs/>
            <VideoSection/>
            <Teachers/>
            <PreFinal/>
        </div>
    );
}

export default App;