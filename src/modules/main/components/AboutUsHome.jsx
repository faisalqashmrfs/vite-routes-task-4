import React from 'react'
import './MainStylee/AboutUsHome.css'
import imgf from './../assets/img/home-card-2.jpg'


function AboutUsHome() {
  return (
    <section className='AboutUsHome'>
        <div className='container'>
            <div className='left-fq-desc hidden' data-aos="fade-right">
                <h2>About Us</h2>
                <p className='para2'>Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts.</p>
                <p className='para1'><i class="fa-solid fa-check" style={{color: '#2070d7'}}></i> <span>Behind the word Mountains .</span></p>
                <p className='para1'><i class="fa-solid fa-check" style={{color: '#2070d7'}}></i> <span>Behind the word Mountains .</span></p>
                <p className='para1'><i class="fa-solid fa-check" style={{color: '#2070d7'}}></i> <span>Behind the word Mountains .</span></p>
                <div className='fq-plus-number'> 
                    <div>
                        <span>204+</span>
                        <p>No, students</p>
                    </div>
                    <div>
                        <span>204+</span>
                        <p>No, students</p>
                    </div>
                    <div>
                        <span>204+</span>
                        <p>No, students</p>
                    </div>
                </div>
                <div className='fq-buttons'>
                    <button className='btn1-fq'>ADMISORE</button>
                    <button className='btn2-fq'>LEARN MORE</button>
                </div>
            </div>
            <div className='vedio-fq-shadow' data-aos="fade-left"><img src={imgf}/></div>
        </div>
    </section>
  )
}

export default AboutUsHome