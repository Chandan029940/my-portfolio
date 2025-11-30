import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.jpg'
import Sidebar1 from '../../img/sidebar1.jpg'
import Ecommerce from '../../img/ecommerce.jpg'
import HOC from '../../img/hoc.png'
import HRMS from '../../img/hrms.png'
import MusicApp from '../../img/musicapp.jpg'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import 'swiper/css'
const Portfolio = () => {
       const theme = useContext(themeContext);
       const darkMode = theme.state.darkMode;
  return (
     
    <div className="portfolio" id='Portfolio'>
        <span style={{color: darkMode? 'white':''}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={-30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                 <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={Sidebar1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                 <img src={HRMS} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio