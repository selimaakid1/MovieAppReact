import React, { Component } from 'react'
import StarRatingComponent from "react-star-rating-component";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Description extends Component {
    state = {
        movies: {
            title: "",
            rating: 1,
            year: "",
            image: "",
            description: ""
        }
    };

    componentWillMount() {
        this.setState({
            movies: this.props.allData.movies.filter(
                el => el.id === this.props.match.params.id
            )[0]
        });
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <Container className='FilmContainer'>
                    <Card border="dark" style={{ width: '18rem' }}>
                        <Card.Img src={this.state.movies.image} />
                        <Card.Body>
                            <Card.Title>{this.state.movies.title}</Card.Title>
                            <Card.Text>
                                {this.state.movies.year}
                            </Card.Text>
                            <Card.Text>
                                {this.state.movies.description}
                            </Card.Text>
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={this.state.movies.rating} />
                            <Link to="/">
                                <button>Home</button>
                            </Link>


                        </Card.Body>
                    </Card>
                    <br />
                </Container>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        movies: state.MovieReducer.movies
    };
};

export default connect(mapStateToProps)(Description);
