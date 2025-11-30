import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Profile from '../../img/chandanportfolio.png';
import Thumbsup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glasses from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from "react";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const Intro = () => {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hello! I Am </span>
                    <span>Chandan Patel</span>
                    <span>Full-stack developer exploring machine learning, passionate about building scalable web applications and intelligent solutions that solve real problems.</span>
                   <Link spy={true} to='Contact' smooth={true}>
                    <button className="button i-button">Hire me</button>
                    </Link>
                </div>
                <div className="i-icons">
                    <a href='https://github.com/Chandan029940'> <img src={Github} alt="Github" /></a>
                    <a href=' https://www.linkedin.com/in/chandan-patel-400806306'><img src={Linkedin} alt="Linkedin" /></a>
                    <a href='https://www.instagram.com/_chichi_2994?igsh=aDdyN2lmZXYwNjB6'> <img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Profile} alt="" />
                <motion.img
                    className="glasses-emoji"
                    initial={{ left: "-36%" }}
                    animate={{ left: "-24%" }}
                    transition={transition}
                    src={Glasses}
                    alt=""
                />


                <motion.div
                    initial={{ top: '-5%', left: "74%" }}
                    animate={{ left: "69%" }}
                    transition={transition}
                    style={{ top: '-5%', left: '69%' }} className="floating-div1">

                    <FloatingDiv image={Crown} txt1='Python' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ top: '16rem', left: "9rem" }}
                    animate={{ left: "0rem" }}
                    transition={transition}
                    style={{ top: '16rem', left: '0rem' }} className="floating-div2">
                    <FloatingDiv image={Thumbsup} txt1='Web' txt2='Developer' />
                </motion.div>
                <div className="blur" style={{ backgroundColor: "rgb(238 210 255" }}></div>
                <div className="blur" style={{ backgroundColor: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>
        </div >
    )
}

export default Intro


