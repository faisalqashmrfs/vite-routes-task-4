import React from 'react'
import './MainStylee/RightForYou.css'
import RightFroYouCard from './RightFroYouCard';
import card1 from './../assets/img/home-card-1.jpg';
import card2 from './../assets/img/home-card-2.jpg';
import card3 from './../assets/img/home-card-3.avif';



function RightForYou() {
  return (
    <section className='FQ-Right-For-You'>
        <div className='fq-title-you'>
            <h2 data-aos="fade-right">The Right Course For You</h2>
            <p data-aos="fade-left">Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts. </p>
        </div>
        <div className='all-cardf-fq'>
            <RightFroYouCard  images = {card1}/>
            <RightFroYouCard  images = {card2}/>
            <RightFroYouCard  images = {card3}/>
        </div>
    </section>
  )
}

export default RightForYou;