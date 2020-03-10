import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Rating from './Rating'

class MovieCards extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (<div className='FilmCard'>
            <Container className='FilmContainer'>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Img src={this.props.movie.image} />
                    <Card.Body>
                        <Card.Title>{this.props.movie.title}</Card.Title>
                        <Card.Text>
                            {this.props.movie.year}
                        </Card.Text>
                        <Rating rating={this.props.movie.rating} setRate={()=> {}}/>
                    </Card.Body>
                </Card>
                <br />
            </Container>
        </div >)






    }
}
export default MovieCards