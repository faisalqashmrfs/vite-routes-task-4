import React from 'react'
import HeroAbout from '../components/HeroAbout'
import Instructor from '../../main/components/Instructor'
import Text from '../components/Text';
import Cards from '../components/Cards';
import ClassEducation from '../../main/components/ClassEducation';
import Acardion from '../../main/components/Acardion';


function AboutUs () {
  return (
    <div>
       <HeroAbout />
       <Instructor />
       <Text />
       <Cards />
       <ClassEducation />
       <Acardion />
    </div>
  )
}

export default AboutUs