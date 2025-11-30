import React from 'react'
import './Card.css'
import MORE from "./more.pdf"
const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <a href={MORE}>
        <button className="c-button">LEARN MORE</button>
        </a>
    </div>
  )
}

export default Card