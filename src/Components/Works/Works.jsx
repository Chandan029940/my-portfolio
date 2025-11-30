import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Work for All these</span>
        <span>Companies and clients</span>
        <span>I have collaborated with teams and companies on real-world projects, delivering
          <br />
           full-stack solutions and data-driven applications tailored to their business needs.
          <br />
          My work includes building responsive interfaces, optimizing backend systems,
          <br />
          and creating meaningful insights using data science techniques.
          <br />
          I focus on clean development, problem-solving, and delivering reliable results
          <br />
          that truly add value.</span>

        <Link spy={true} to='Contact' smooth={true}>
          <button className="button s-button">Hire me</button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div
        className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          animate={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }} className="w-mainCircle">
          <div className="w-secCircle c1">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle c1">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle c1">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle c1">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle c1">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works