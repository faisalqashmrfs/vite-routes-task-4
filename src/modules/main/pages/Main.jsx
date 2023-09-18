import React from 'react'
import  './MainStyle.css';
import Hero from '../components/Hero';
import TapCatig from '../components/TapCatig';
import Instructor from '../components/Instructor';
import ClassEducation from '../components/ClassEducation';
import RightForYou from '../components/RightForYou';
import Tomorrows from '../components/Tomorrows';
import AboutUsHome from '../components/AboutUsHome';
import NewSchool from '../components/newSchool';
import Pricess from '../components/pricess';
import Carousel from '../components/carousel';
import Acardion from '../components/Acardion';



function Main () {
  return (
    <>
    <Hero />
    <TapCatig />
    <Instructor />
    <ClassEducation />
    <RightForYou />
    <Tomorrows />
    <AboutUsHome />
    <NewSchool />
    <Pricess />
    <Carousel />
    <Acardion />
    </>
  )
}

export default Main;