import React from 'react'
import img from "./../../assets/img/chris-montgomery-smgTvepind4-unsplash.jpg"
import "./article.css"



function Article ({title , desc}) {
  return (
    <div className='rm_container_article'>
     <img className='rm_container-img' src={img} alt=''/>
     <div className='rm_text'>
        <h2 className='rm_text_title1'>{title}</h2>

        <p className='rm_text_p'>{desc}</p>
     </div>
    </div>
  )
}

export default Article;
