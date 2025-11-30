import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import profilePic5 from "../../img/profile5.jpg"
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonals = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "Kanishka is a talented front-end developer who builds responsive, user-focused interfaces with creativity and precision, consistently delivering clean code, elegant designs, and engaging web experiences that make every project shine."
    },
    {
      img: profilePic2,
      review:
      "Anshu is a dedicated backend developer who builds secure, scalable systems with clean architecture, efficient APIs, reliable databases, and consistent performance, ensuring every project runs smoothly and supports strong, stable functionality"
    },
    {
      img: profilePic3,
      review:
      "He is a detail-oriented data analyst who transforms raw information into clear insights through visualization, reporting, statistical analysis, and problem-solving, helping teams make informed decisions and understand patterns effectively and confidently."
    },
    {
      img: profilePic4,
      review:
      "Abhishek is a capable Java developer with machine learning skills, delivering high-performance applications, optimized algorithms, structured systems, and intelligent solutions designed to handle complex tasks and enhance user experience across various projects."
    },
    {
      img: profilePic5,
      review:
      "Jay is a skilled Python developer with strong machine learning expertise, creating intelligent models, automating tasks, analyzing data, and building smart solutions that improve accuracy, efficiency, and real-world decision-making for projects."
    },
  ]
return (
  <div className="t-wrapper" id='Testimonials'>
    <div className="t-heading">
      <span>Friends and colleagues </span>
      <span>I have worked and </span>
      <span>collaborated with</span>
      <div className="blur t-blur1" style={{ background: "rgb(238 210 255)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
    </div>

    <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    pagination={{ clickable: true }}
    >
        {clients.map((client, index)=>{
          return(
            <SwiperSlide key={index}>
              <div className="testimonial">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  </div>
)
}

export default Testimonals