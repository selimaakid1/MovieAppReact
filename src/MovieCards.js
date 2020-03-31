import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import { DeleteMovie } from './Actions/actions'
import { Link } from "react-router-dom";

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
                        <StarRatingComponent  
                        name="rate1" 
                        starCount={5} 
                        value={this.props.movie.rating} />
                        <br />
                        <i class="fas fa-times" onClick={() => this.props.DeleteM(this.props.movie.id)}></i>
                        <Link to={`/movie/${this.props.movie.id}`}>
                        <i class="fas fa-info"></i>
                        </Link>
                        {/* <Button variant="dark" className='card-btn'>Delete</Button> */}
                        {/* <Button variant="dark" className='card-btn'>Description</Button> */}

                    </Card.Body>
                </Card>
                <br />
            </Container>
        </div >)






    }
}
const mapDispatchToProps = dispatch => {
    return {
        DeleteM: movie => dispatch(DeleteMovie(movie))
    };
  };

export default connect(null, mapDispatchToProps)(MovieCards)