import React from 'react'
import './MainStylee/pricess.css'

function Pricess() {
  return (
    <section class="pricing mt-5" id="pricing">
      <div class="container">
        <h2 class="text-primary  text-center mb-4 hidden" data-aos="fade-down"> Pricing</h2>
        <p class="text-secondary text-center m-auto w-50 hidden" data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur
          sit amet consectetus Et atque quas adipisicing elit. Et atque quas
          i assumenda poss </p>

        <div class="row mt-5">
          <div class="col-lg-4 col-md-6 col-sm-12 mb-5 hidden" data-aos="fade-up-right">
            <div class="card text-center p-3  shadow m-auto" style={{width: '18rem'}}>
              <div class="card-body">
                <h4 class="card-title text-primary mb-3">Starter</h4>
                <h3 class="text-primary d-inline mb-3"> $50.99</h3> <span class="text-secondary">/month</span>
                <p class="card-text pt-3 text-secondary">Some quick example text to build on the card title and make up
                  the bulk of the card's content.</p>
                <button type="button" class="btn btn-secondry rounded-pill p-2 m-2 text-primary"
                  style={{border: '1px solid #0d6efd'}}>GET STARTED</button>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 mb-5 hidden" data-aos="fade-up">
            <div class="card text-center p-3  shadow m-auto" style={{width: '18rem'}}>
              <div class="card-body">
                <h4 class="card-title text-primary mb-3">Bussines</h4>
                <h3 class="text-primary d-inline mb-3"> $50.99</h3> <span class="text-secondary">/month</span>
                <p class="card-text pt-3 text-secondary">Some quick example text to build on the card title and make up
                  the bulk of the card's content.</p>
                <button type="button" class="btn btn-primary rounded-pill p-2 m-2">GET STARTED</button>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 mb-5 hidden" data-aos="fade-up-left">
            <div class="card text-center p-3 m-auto  shadow" style={{width: '18rem'}}>
              <div class="card-body">
                <h4 class="card-title text-primary mb-3">Preufiom</h4>
                <h3 class="text-primary d-inline mb-3"> $50.99</h3> <span class="text-secondary">/month</span>
                <p class="card-text pt-3 text-secondary">Some quick example text to build on the card title and make up
                  the bulk of the card's content.</p>
                <button type="button" class="btn btn-secondry rounded-pill p-2 m-2 text-primary"
                  style={{border: '1px solid #0d6efd'}}>GET STARTED</button>
              </div>
              <div class="overlay"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Pricess