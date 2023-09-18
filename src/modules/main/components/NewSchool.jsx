import React from 'react'
import './MainStylee/newSchool.css'
import Imgf from './../assets/img/background-home.jpg'

function NewSchool() {
  return (
    <section id="news" class="news pt-5 news--fq hidden">
      <div class="container mt-5">
        <h2 class="text-primary  text-center mb-4"  data-aos="fade-right">School News</h2>
        <p class="text-secondary text-center m-auto w-50" data-aos="fade-left">Lorem ipsum, dolor sit amet consectetur
          sit amet consectetus Et atque quas adipisicing elit. Et atque quas
          i assumenda poss </p>
        <div class="row mt-5">
          <div class="col-lg-6 col-md-12 col-sm-12 mb-5" data-aos="flip-left">
            <div class="card position-relative ">
              <div class="row">
                <div class="col-lg-5">
                  <img  className='img-stilhight' src={Imgf} alt="" width="100%"/>
                </div>
                <div class="col-lg-6 p-3 p-md-4">
                  <h6 class="text-primary ">Eaucation For Tomoroww Leaders</h6>
                  <i class="fa fa-calendar" style={{color:'#ddd'}}></i>
                  <span style={{color:'#ddd'}}>junn 22 2022 </span>
                  <i class="fa fa-user " style={{color:'#ddd'}}></i>
                  <span style={{color:'#ddd'}}> Admin</span>
                  <p class="text-secondary mt-3 w-100">Lor ipisicing qptio,
                    aliquid deserunt dolorem laboriosam et unde accusamus
                    dolore maiores repellendus saepe. Hic!</p>
                  <p class="text-primary"> learn More</p>
                </div>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12" data-aos="flip-right">
            <div class="card">
              <div class="row">
                <div class="col-lg-5">
                  <img className='img-stilhight' src={Imgf} alt="" width="100%" />
                </div>
                <div class="col-lg-6 p-3 p-md-4">
                  <h6 class="text-primary ">Eaucation For Tomoroww Leaders</h6>
                  <i class="fa fa-calendar" style={{color:'#ddd'}}></i>
                  <span style={{color:'#ddd'}}>junn 22 2022 </span>
                  <i class="fa fa-user " style={{color:'#ddd'}}></i>
                  <span style={{color:'#ddd'}}> Admin</span>
                  <p class="text-secondary mt-3 w-100">Lor ipisicing qptio,
                    aliquid deserunt dolorem laboriosam et unde accusamus
                    dolore maiores repellendus saepe. Hic!</p>
                  <p class="text-primary"> learn More</p>
                </div>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default NewSchool;