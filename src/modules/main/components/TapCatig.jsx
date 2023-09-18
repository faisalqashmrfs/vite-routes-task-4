import React, { useState } from 'react'
import './MainStylee/TapCatig.css'
import CatigurisCard from './CatigurisCard'

function TapCatig() {
  return (
    <>
    <section className='FQ-catig'>
        <h2  data-aos="flip-left">Browse Top Category</h2>
        <div className='all-cards'>
            <CatigurisCard title = {"Science"}  descrip = {"3,234 course"}/>
            <CatigurisCard title = {"Business"}  descrip = {"3,234 course"}/>
            <CatigurisCard title = {"Accounting"} descrip = {"931 coures"}/>
            <CatigurisCard title = {"Design"} descrip = {"7,291 coures"}/>
            <CatigurisCard title = {"Music"}  descrip = {"9,114 coures"}/>
            <CatigurisCard title = {"Markiting"}  descrip = {"2,391 coures"}/>
            <CatigurisCard title = {"Photography"}  descrip = {"7,991 coures"}/>
            <CatigurisCard title = {"Animation"}  descrip = {"6,491 coures"}/>
        </div>
    </section>
    </>
  )
}

export default TapCatig