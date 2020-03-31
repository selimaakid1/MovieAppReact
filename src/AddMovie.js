import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";
import { AddMovie, EditMovie } from "./Actions/actions";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid'

class AddMovieModal extends Component{
    constructor (props){
        super(props)
        this.state={
          show: false,
          title: this.props.editMode  ? this.props.movieToEdit.title : "",
          year: this.props.editMode ? this.props.movieToEdit.year : "",
          rating: this.props.editMode ? this.props.movieToEdit.rating : "",
          image: this.props.editMode ? this.props.movieToEdit.image : ""
            
       }
    }
    handleShow = () => {
      this.setState({ show: !this.state.show });
    };
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    add = () => {
      var newMovie = {
        id: uuidv4(),
        title: this.state.title,
        year: this.state.year,
        image: this.state.image,
        rating: this.state.rating
      };
      this.props.addNewMovie(newMovie);
    };
    editM = () => {
      this.props.EditMovie(this.props.movieToEdit.id, this.state);
      this.setState({ show: false });
    };
    
    render() {
        return(
            <div>
            <Button variant="dark" onClick={this.handleShow} className='addNewMv'>
              Add New Movie
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleShow}>
              <Modal.Header closeButton>
                <Modal.Title>Movie Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                  </div>
                  <div>
                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
                  </div>
                  <div>
                    <label>Rating:</label>
                    <input type="text" name="rating" value={this.state.rating} onChange={this.handleChange}/>
                  </div>
                  <div>
                    <label>Year:</label>
                    <input type="text" name="year" value={this.state.date} onChange={this.handleChange}/>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={this.handleShow}>
                  Close
                </Button>
                <Button variant="dark" onClick={this.props.editMode ? this.editM : this.add}>{this.props.editMode ? "Edit" : "Add Movie"}</Button>
              </Modal.Footer>
            </Modal>
          </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewMovie: newMovie => dispatch(AddMovie(newMovie)),
    EditMovie: (id, updatedMovie) => dispatch(EditMovie(id, updatedMovie))
  };
};

export default connect(null, mapDispatchToProps) (AddMovieModal)