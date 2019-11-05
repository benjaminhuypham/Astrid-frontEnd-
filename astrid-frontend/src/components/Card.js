import React, { Component } from 'react'
import './../stylesheets/Card.css'

export default class Card extends Component {
    state = {
        isClicked: false,
    }

    toggleZodiacInfo = () => {
        const {isClicked} = this.state
        this.setState({isClicked: !isClicked})
    }

    render() {

        return (
            <div className='zodiac-card fade' onClick={this.toggleZodiacInfo}>
                {this.state.isClicked
                    ?
                        <>
                        <h3>{this.props.name}</h3>
                        <p>{this.props.dates}</p>
                        <p>Vibe: {this.props.vibe}</p>
                        <p>{this.props.element}</p>
                        <p>{this.props.planet}</p> 
                        </>
                    :
                        <>
                        <img className='zodiac-img' alt={this.props.name} src={this.props.image}/>
                        </>
                }
        </div>
    )
}
}


