import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      console.log(res)
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    
    let displayCars = this.state.cars.map( (e, i) => 
      <ul>
        <li>{e.make}</li>
        <li>{e.model}</li>
        <li>{e.year}</li>
      </ul>
    )

    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {displayCars}
      </div>
    );
  }
}

export default App;
