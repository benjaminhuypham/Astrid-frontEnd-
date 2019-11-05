import React, {Component} from 'react';
import './App.css';
import CardContainer from './components/CardContainer'
import Nav from './components/Nav'
import FilterBox from './components/FilterBox'

const BASE_URL = "http://localhost:4000/zodiacs"

class App extends Component{
  state = {
    zodiacs: [], 
    searchTerm: "",
}

componentDidMount() {
  fetch(BASE_URL)
    .then(response => response.json())
    // .then(console.log)
    .then(zodiacs => this.setState({ zodiacs }))
}

updateSearchTerm =event => {
  this.setState({
    searchTerm: event.target.value,
  })
}

filteredZodiacs = () => this.state.zodiacs
  .filter(zodiac => zodiac.name && zodiac.element && zodiac.planet)
  .filter(zodiac => {
    return (zodiac.name
      .toLowerCase()
      .includes(this.state.searchTerm.toLowerCase())
      ) || (zodiac.element
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
        ) || (zodiac.planet
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
        )
  })


  render() {
    return (
      <div>
        <Nav />
        <FilterBox searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} />
        <CardContainer zodiacs={this.filteredZodiacs()}/>

      </div>
    )
}}

export default App;
