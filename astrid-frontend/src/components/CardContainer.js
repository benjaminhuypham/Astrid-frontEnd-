import React from 'react'
import './../stylesheets/CardContainer.css'

import Card from './Card'

export default function CardContainer({zodiacs}){
    const $zodiacs = zodiacs.map(zodiac => {
        return <li>
            <Card 
            name={zodiac.name} 
            dates={zodiac.dates} 
            vibe={zodiac.vibe}
            element={zodiac.element}
            planet={zodiac.planet}
            image={zodiac.image_file_path}
            />
        </li>
    })
    return (
        <div className='card-container'>
            <ul className='card-list'>
                {$zodiacs}
            </ul>
        </div>
    )
}
