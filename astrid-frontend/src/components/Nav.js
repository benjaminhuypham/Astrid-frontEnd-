import React from 'react'
import './../stylesheets/Nav.css'

export default function Nav() {
    return(
        <nav className="nav">
            <h3>Astrid</h3>
            <ul className='nav-links'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}