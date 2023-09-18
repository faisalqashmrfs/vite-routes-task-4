import React from 'react';
import './MainStylee/ClassEducation.css';
import CatigurisCard from './CatigurisCard';

function ClassEducation() {
  return (
    <section className='ClassEducation-fq'>
        <div>
            <h2 data-aos="fade-right">We Have Best Education </h2>
            <p data-aos="fade-left">Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts.</p>
        </div>
        <div className='all-cards'>
        <CatigurisCard title = {"Music Class"}  descrip = {"Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts."}/>
        <CatigurisCard title = {"Math Class"}  descrip = {"Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts."}/>
        <CatigurisCard title = {"English Class"} descrip = {"Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts."}/>
        <CatigurisCard title = {"Reading for Kids"} descrip = {"Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts."}/>
        <CatigurisCard title = {"History Class"}  descrip = {"Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts."}/>
        <CatigurisCard title = {"Music"}  descrip = {"Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts."}/>
        </div>
    </section>
  )
}

export default ClassEducation