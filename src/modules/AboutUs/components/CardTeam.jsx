import React from 'react'
import { BiLogoFacebook , BiLogoLinkedin } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import "./styles/card.css";

function CardTeam({img , h1 , span , p}) {
  return (
    <div className="---card">
        <img src={img}/>
        <h1>{h1}</h1>
        <span>{span}</span>
        <p>{p}</p>
        <div className="icons">
            <BiLogoFacebook/>
            <AiOutlineTwitter/>
            <BiLogoLinkedin/>
        </div>
    </div>
  )
}

export default CardTeam