import React, { Component } from 'react'
import MovieCards from './MovieCards'
import { connect } from "react-redux";


class ListMovies extends Component {
    constructor(props) {
        super(props)
}

    render() {

        return (

            <div className='movieList'>{this.props.AllData.movies
                .filter(
                    el =>
                      el.rating >= this.props.AllData.rating &&
                      el.title
                        .toLowerCase()
                        .includes(this.props.AllData.keyword.trim().toLowerCase())
                  )
                
                
                .map (el => <MovieCards movie={el} />)}</div>
            
        )
    } 
}
const mapStateToProps = state => {
    return {
      AllData: state.MovieReducer
    };
  }; 
export default connect(mapStateToProps)(ListMovies)