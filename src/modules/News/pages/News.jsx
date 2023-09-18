import React, { useState } from 'react'
import news from './../components/News/const/news.js'
import Article from '../components/article/article.jsx'
import './News.css'
import HeroNews from '../components/hero/Hero.jsx'


function News() {
  let btnLink1 = document.querySelector('#btn-link1')
  let btnLink2 = document.querySelector('#btn-link2')
  let btnLink3 = document.querySelector('#btn-link3')
  window.addEventListener('load' , () => {
    btnLink1.classList.add("activLink")
  })
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);
  return (
    <>
    <HeroNews />
    <div className='rm_container_news'>
      {
        news.slice(start, end).map(({title1 ,desc}, index) => (
        <div className='rm_container_news' key={index}>
     <Article 
     title = {title1}
     desc = {desc}
     /> 
    </div>
    
      ))}
    </div>
    <div className='fq-links-pagition'>
    <a
      onClick={(event) => {
      event.preventDefault();
      setStart(0);
      setEnd(8);
      btnLink1.classList.add("activLink")
      btnLink2.classList.remove("activLink")
      btnLink3.classList.remove("activLink")
      console.log(1)
      }}
      className="page-link activLink"
      id='btn-link1'
      href="#"
      
      >1
    </a>
    <a
      onClick={(event) => {
      event.preventDefault();
      setStart(8);
      setEnd(16);
      btnLink1.classList.remove("activLink")
      btnLink3.classList.remove("activLink")
      btnLink2.classList.add("activLink")
      }}
      className="page-link"
      id='btn-link2'
      href="#"
      >2
    </a>
    <a
      onClick={(event) => {
      event.preventDefault();
      setStart(16);
      setEnd(24);
      btnLink1.classList.remove("activLink")
      btnLink2.classList.remove("activLink")
      btnLink3.classList.add("activLink")
      }}
      className="page-link"
      id='btn-link3'
      href="#"
      >3
    </a>
    </div>
    </>
  )
}

export default News;
