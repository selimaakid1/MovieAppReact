import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import ListMovies from './ListMovies'
import Rating from './Rating';
import AddMovie from './AddMovie'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: [{
        title: "Le Dernier maître de l'air",
        year: "2010",
        image: "https://occ-0-55-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa5wHCHzhjCPGQifwn3YCvFvMKuPZLSvQNB9DJ4LLNE60l_bTyRyN51W2HXJnBnwNyWwd3HZBuO6mHDrgPmSucveqBI.jpg?r=2cb",
        rating: 3
      },
      {
        title: "Mowgli",
        year: "2018",
        image: "https://occ-0-55-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUNK79CkWE_H9y3SfktKeR4AZIteyT6SBVOlocAqW8ZjWxJRnkuIr-edO-axfM4tKrAf29CWqtlUhV6Z3ZPE8KPz44fpt7ob9tVbiONtxyaSYfaaB1GUM7os97Xw.jpg?r=cec",
        rating: 5
      },
      {
        title: "The Witcher",
        year: "2019",
        image: "https://occ-0-778-300.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYCXCfVkAFjsSQJGuFsXPb7ANJ4GKjDYZU85JaiQ-qDc1QJJCH_55dJJ1RWTdlo62fLFpBLMWrM4JunTyNQbGZm0_iKOwdU91su6fYovYxIWxgtI1KJzhdbWq8ta.jpg?r=382",
        rating: 4
      }, {
        title: "Iron Fist",
        year: "2017",
        image: "https://occ-0-778-300.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVyhjE-0pEPXdy84YpW5p1MMWGmhwkz9Bdw2m5ItuZh-z-BTY7116o8ouzQgDxi-nMS1RpILeQ2wM3T3kS0staYzjLJunUKv5odrE2_DHciBaX4U-ujVx3d6HE8b.jpg?r=16d",
        rating: 3
      },
      {
        title: "Punisher",
        year: "2017",
        image: "https://occ-0-778-300.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXr99-I9s8cPs-OmzMh327Kr7WpYGIHBNO2yFz5HggMEolpHIGWmHpugXt5j7V14ilbGfDqkGacCDprBQ2CJF0iBPYu899N3nk_CTMciN3eDA0KTNedUl58uh7RQ.jpg?r=285",
        rating: 5
      },
      {
        title: "Polar",
        year: "2019",
        image: "https://occ-0-55-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe218cgXOR7v02Q2Ud8EPZXgp3GRJsedAX2Z_WK1zvq5i9sb_W1hN-dihzDR1ex4YTKFEcp_HPbFN5r8YxrghG1Vg0iYNEDZwnxG4g9k4GLKgHBg_poX3_nagKA8.jpg?r=7fa",
        rating: 2
      }],
      newRate: 1,
      newText: '',
      newMovie: []
    }

  }
  setRate = x => {
    this.setState({ newRate: x })
  }
  setText = y => {
    this.setState({ newText: y })
  }
  addMovie = s => {
    this.setState({ movie: this.state.movie.concat(s) })
  }
  render() {
    return (
      <div className="App">
        <Search setText={t => this.handleChange(t)} getValue={(s) => this.setText(s)} />
        <Rating setRate={x => this.setRate(x)} rating={this.state.newRate} />
        <ListMovies data={this.state.movie.filter(el => el.rating >= this.state.newRate && el.title.toLowerCase().includes(this.state.newText.trim()))} />
        <AddMovie addMovie={s => this.addMovie(s)} />
      </div>
    );
  }
}


export default App;
