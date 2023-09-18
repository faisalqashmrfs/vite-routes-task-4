import React from 'react'
import './MainStylee/carousel.css'
import fimg from './../assets/img/home-card-1.jpg'
import fimg2 from './../assets/img/home-card-2.jpg'
import fimg3 from './../assets/img/home-card-3.avif'



function Carousel() {
  return (
    <section><div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active width-hight-imgFq">
      <h2>Testimiones</h2>
      <h4>Lorem sit amet consectetu i assumenda poss sit amet isicing elit Et atque quas poss si Et atque quas poss sit amet isicing elit. Et atque quas i assumenda po atque quas i assumenda poss ocean.</h4>
        <img src={fimg} class="d-block" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>lorem lorem</h5>
          <p>busines man</p>
        </div>
      </div>
      <div class="carousel-item active width-hight-imgFq">
      <h2>Testimiones</h2>
      <h4>Lorem sit amet consectetu i assumenda poss sit amet isicing elit Et atque quas poss si Et atque quas poss sit amet isicing elit. Et atque quas i assumenda po atque quas i assumenda poss ocean.</h4>
        <img src={fimg2} class="d-block" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>lorem lorem</h5>
          <p>busines man</p>
        </div>
      </div>
      <div class="carousel-item active width-hight-imgFq">
      <h2>Testimiones</h2>
      <h4>Lorem sit amet consectetu i assumenda poss sit amet isicing elit Et atque quas poss si Et atque quas poss sit amet isicing elit. Et atque quas i assumenda po atque quas i assumenda poss ocean.</h4>
        <img src={fimg3} class="d-block" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>lorem lorem</h5>
          <p>busines man</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
     </div>
  </section>
  )
}

export default Carousel