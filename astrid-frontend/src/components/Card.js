import React from 'react'
import './../stylesheets/Card.css'

export default function Card({name, dates, ruling_planet}){
    return (
        <div className='zodiac-card fade'>
            <h3>{name}</h3>
            <p>{dates}</p>
            <p>{ruling_planet}</p>
        </div>
    )
}