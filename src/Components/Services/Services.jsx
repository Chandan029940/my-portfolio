import React from 'react'
import './Services.css'
import HeratEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Resume from "./resume.pdf"
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
const Services = () => {
   const transition = { duration: 1, type: 'spring' }
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
   return (
      <div className="Services" id='Services'>
         <div className="awesome">
            <span style={{ color: darkMode ? 'white' : '' }}>My Work And </span>
            <span>Services</span>
            <span>I build modern web applications and create data-driven solutions  
               <br />
              using analytics, visualization, and machine learning.</span>
            <a href={Resume} downloads>
               <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
         </div>

         <div className="cards">
            <motion.div
               initial={{ left: "25rem" }}
               animate={{ left: "22rem" }}
               transition={transition}
               style={{ left: '22rem' }}>
               <Card
                  emoji={HeratEmoji}
                  heading={'Design'}
                  detail={"Figma, Sketch, Photoshop, Adobe, Canva"}
               />
            </motion.div>

            <motion.div
               initial={{ left: "5%" }}
               animate={{ left: "4rem" }}
               transition={{duration: 1.3, type: 'spring'}}
               style={{ left: '4rem', top: "12rem", right: "0" }}>

               <Card
                  emoji={Glasses}
                  heading={'Developer'}
                  detail={"HTML, CSS, JavaScript, React.js, Next.js "}
               />
            </motion.div>

            <motion.div
               initial={{ left: "35rem" }}
               animate={{ left: "21rem" }}
               transition={ {duration: 1.5, type: 'spring'} }
               style={{ left: '21rem', top: "19rem" }}>
               <Card
                  emoji={Humble}
                  heading={'Programing'}
                  detail={"Python, Java, JavaScript, C Sharp, C++, SQL"}
               />
            </motion.div>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
         </div>
      </div>

   )
}

export default Services