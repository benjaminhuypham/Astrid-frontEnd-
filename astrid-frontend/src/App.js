import React, {Component} from 'react';
import './App.css';
import CardContainer from './components/CardContainer'
import Nav from './components/Nav'
// import FilterBox from './components/FilterBox'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component{
  state = {
    zodiacs: [{
      imageURL: "",
      name: 'Virgo',  
      dates: '9/16 - 10/26',
      ruling_planet: 'Mercury'
    }, 
    {
      name: 'Leo',  
      dates: '5/16 - 6/26',
      ruling_planet: 'Mars'
    },
    {
      name: 'Libra',  
      dates: '1/16 - 2/26',
      ruling_planet: 'Earth'
    },
    {
      name: 'Cancer',  
      dates: '8/16 - 9/26',
      ruling_planet: 'Saturn'
    },
    {
      name: 'Virgo',  
      dates: '9/16 - 10/26',
      ruling_planet: 'Mercury'
    }, 
    {
      name: 'Leo',  
      dates: '5/16 - 6/26',
      ruling_planet: 'Mars'
    },
    {
      name: 'Libra',  
      dates: '1/16 - 2/26',
      ruling_planet: 'Earth'
    },
    {
      name: 'Cancer',  
      dates: '8/16 - 9/26',
      ruling_planet: 'Saturn'
    }
  ] 
}

  render() {
    return (
      <div>
        <Nav />
        <CardContainer zodiacs={this.state.zodiacs}/>
      </div>
    )
}}

export default App;
