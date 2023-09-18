import React from 'react';
import './MainStylee/Catiguris.css';

function CatigurisCard({ title , descrip ,props}) {
  return (
    <div className='one-card'
    data-aos="flip-right"
    data-aos-easing="ease-in-back"
     data-aos-delay="300"
    >
                <div className='left-side'>
                    <div>
                    <i class="fa-solid fa-atom" style={{color: '#00aeff'}}></i>
                    </div>
                </div>
                <div className='right-side'>
                    <p>{title}</p>
                    <span>{descrip}</span>
                </div>
            </div>
  )
}

export default CatigurisCard;