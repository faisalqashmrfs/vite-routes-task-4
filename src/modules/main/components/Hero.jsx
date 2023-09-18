import './MainStylee/Hero.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function Hero() {
  useEffect(() => {
    Aos.init({duration: 1000});
  } , []);
  return (
    <section className='FQ-Hero'>
        <div className='Fq-opacity-back'>
        </div>
        <div className='Fq-opacity-back2 hidden'>
            <span data-aos="fade-right">WATCH THE VIDEO</span>
            <h1 data-aos="fade-right">Education is the Mother of <br></br> Leadership</h1>
            <button>EXPLORE COURSES</button>
        </div>
    </section>
  )
}

export default Hero