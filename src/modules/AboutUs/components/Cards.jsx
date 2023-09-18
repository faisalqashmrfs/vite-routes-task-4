import React from 'react';
import img from '../assets/img/teatcher.jpg'
import CardTeam from './CardTeam';
import "./styles/Cards.css";

function Cards() {

    const data = [
        {
            image: img,
            h1: "mina colina",
            span: "Teacher in music",
            p: `Far far away behind the word 
             mountians, far from the countries Vokalia
             and Consonantia, there live the blind text.`
        },
        {
            image: img,
            h1: "mina colina",
            span: "Teacher in music",
            p: `Far far away behind the word 
             mountians, far from the countries Vokalia
             and Consonantia, there live the blind text.`
        },
        {
            image: img,
            h1: "mina colina",
            span: "Teacher in music",
            p: `Far far away behind the word 
             mountians, far from the countries Vokalia
             and Consonantia, there live the blind text.`
        },

    ]
    return (
        <div className="---cards" >
            <CardTeam img={data[0].image} h1={data[0].h1} span={data[0].span} p={data[0].p} />
            <CardTeam img={data[1].image} h1={data[1].h1} span={data[1].span} p={data[1].p} />
            <CardTeam img={data[2].image} h1={data[2].h1} span={data[2].span} p={data[2].p} />
        </div>
    )
}

export default Cards;