import React from 'react'
import './../stylesheets/FilterBox.css'


export default function FilterBox(props) {
    return(
        <section>
            <form className='search'>
                <input 
                    type='text'
                    placeholder='Search for a Zodiac'
                    value={props.searchTerm}
                    onChange={props.updateSearchTerm}
                />
            </form>
        </section>
    )
}