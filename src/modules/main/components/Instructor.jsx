import React from 'react'
import './MainStylee/Instructor.css'

function Instructor() {
  return (
    <section className='FQ-catigores'>
      <div className='left-fq-desc hidden' data-aos="fade-right">
        <h2>Become an Instructor</h2>
        <p>Far far away , behind the word mountains , far form the countries Vokalia and Consonantia , there the blind texts.</p>
        <p><i class="fa-solid fa-check" style={{color: '#2070d7'}}></i> <span>Behind the word Mountains .</span></p>
        <p><i class="fa-solid fa-check" style={{color: '#2070d7'}}></i> <span>Behind the word Mountains .</span></p>
        <p><i class="fa-solid fa-check" style={{color: '#2070d7'}}></i> <span>Behind the word Mountains .</span></p>
        <button>GET STARTED</button>
      </div>
      <div className='right-fq-photo' data-aos="fade-left">
      </div>
    </section>
  )
}

export default Instructor