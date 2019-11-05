import React from 'react'
import './../stylesheets/CardContainer.css'

import Card from './Card'

export default function CardContainer({zodiacs}){
    const $zodiacs = zodiacs.map(zodiac => {
        return <li>
            <Card name={zodiac.name} dates={zodiac.dates} ruling_planet={zodiac.ruling_planet}/>
        </li>
    })
    return (
        <div className='card-container'>
            <h1>All Zodiacs </h1>
            <ul className='card-list'>
                {$zodiacs}
            </ul>
        </div>
    )
}
