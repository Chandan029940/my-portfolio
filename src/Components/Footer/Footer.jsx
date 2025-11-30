import React from 'react'
import './Footer.css'
import Cave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className="footer">

      <img src={Cave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>Chandanpatel029940@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/_chichi_2994?igsh=aDdyN2lmZXYwNjB6">
            <Insta color='white' size='3rem' />
          </a>
          <a href="https://www.instagram.com/_chichi_2994?igsh=aDdyN2lmZXYwNjB6">
            <Facebook color='white' size='3rem' />
          </a>
          <a href="https://github.com/Chandan029940">
            <Github color='white' size='3rem' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer