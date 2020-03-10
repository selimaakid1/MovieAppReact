import React, { Component } from 'react'
import MovieCards from './MovieCards'


class ListMovies extends Component {
    constructor(props) {
        super(props)
}

    render() {

        return (

            <div className='movieList'>{this.props.data.map (el => <MovieCards movie={el} />)}</div>
        )
    } 
}
export default ListMovies