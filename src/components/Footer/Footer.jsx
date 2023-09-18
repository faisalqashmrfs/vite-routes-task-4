import React from 'react'
import './Footer.css'
import Fimg from './../../assets/img/emile-perron-xrVDYZRGdw4-unsplash.jpg'

function Footer() {
  return (
    <footer class="bg-primary">
    <div class="container pt-5 text-light">
      <div class="row ">
        <div class="col-lg-3 mb-4 text-sm-center  text-md-left">
          <h5 class="mb-3 trans">About us</h5>
          <p class="mb-3 trans">
            Lorem ssumenda lborum magni incidunt quae. Vitae nisi adipisci veniam nesciunt quaerat, corrupti nam quas
            ducimus velit.
          </p>
          <h5 class="mb-3 trans">contact</h5>
          <div class="icons d-flex justify-content-center">
            <div class="icon m-1 trans">
                <a href="https://www.instagram.com/">
                  <i class="fa-brands fa-instagram small-icon"></i></a>
            </div>
            <div class="icon  m-1 trans">
                <a href="https://www.twitter.com/">
                  <i class="fa-brands fa-twitter small-icon"></i></a>
            </div>
            <div class="icon  m-1 trans">
                <a href="https://www.twitter.com/">
                 <i class="fa-brands fa-facebook small-icon"></i></a>
            </div>
            <div class="icon m-1 trans">
                 <a href="https://www.linkedin.com/">
                 <i class="fa-brands fa-linkedin small-icon"></i></a>
            </div>
            <div class="icon m-1 trans">
                <a href="https://www.behance.com/">
                 <i class="fa-brands fa-behance small-icon"></i></a>
            </div>
            <div class="icon m-1 trans">
                <a href="https://www.github.com/ trans">
                <i class="fa-brands fa-github small-icon"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-4  text-md-left text-sm-center">
          <h5 class="mb-3 trans">About us</h5>
          <div class="programing-name">
            <p class="name-languag trans"> Web Design </p>
            <p class="name-languag trans">Html5</p>
            <p class="name-languag trans"> Css3</p>
            <p class="name-languag trans">jQuery</p>
            <p class=" name-languag trans">Bootstrap</p>
          </div>

        </div>
        <div class="col-lg-3 mb-4 text-md-left text-sm-center">
          <h5 class="mb-3 trans">Gellary</h5>
          <div class="row m-auto">
            <div class="col-lg-4 col-md-4 col-sm-4 img-gallary mb-2">
              <img src={Fimg} alt="gallary" />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4  img-gallary mb-2">
              <img src={Fimg} alt="gallary" />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4  img-gallary mb-2">
              <img src={Fimg} alt="gallary" />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4  img-gallary  mb-2">
              <img src={Fimg} alt="gallary" />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 img-gallary mb-2">
              <img src={Fimg} alt="gallary" />
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4  img-gallary mb-2">
              <img src={Fimg} alt="gallary" />
            </div>
          </div>

        </div>
        <div class="col-lg-3 mb-4  text-md-left text-sm-center   ">
          <h5 class="mb-3 trans">contact</h5>
          <p class="pb-3 trans">34 raymounth.Rd .platemoier london 3914 </p>
          <div class="infotmation-contact pb-3">
            <div class="number mb-3 ">
              <i class="fa fa-plus"></i>
              <span class="trans"> 1(123)-435-7890 </span>
            </div>
            <div class="number mb-3">
              <i class="fa fa-plus"></i>
              <span class="trans"> 1(123)-435-7890 </span>
            </div>
            <div class="number mb-3 trans">
              info@mydomin.com
            </div>
          </div>
        </div>

      </div>
    </div>





  </footer>
  )
}

export default Footer