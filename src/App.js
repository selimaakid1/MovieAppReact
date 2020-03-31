import React, { Component } from 'react';
import './App.css';
import ListMovies from './ListMovies'
import Filter from './Filter';
import AddMovie from './AddMovie'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }
  
  render() {
    return (
      <div className="App">
        <Filter />
        <ListMovies />
        <AddMovie editMode={true} />
      </div>
    );
  }
}


export default App;
