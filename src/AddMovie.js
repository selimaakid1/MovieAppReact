import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";

class AddMovie extends Component{
    constructor (props){
        super(props)
        this.state={
            title:'',
            year:'',
            image:'',
            rating:'',
            show:false
            
       }
    }
     handleShow = () => {
        this.setState({ show: !this.state.show });
      };
      handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    add = () => {
        let newMovie = {
              title: this.state.title,
              year: this.state.year,
              image: this.state.image,
              rating: this.state.rating
              
            }
        this.props.addMovie(newMovie) 
        this.setState({show: false})
    }
    
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
                <Button variant="dark" onClick={this.add}>Add Movie</Button>
              </Modal.Footer>
            </Modal>
          </div>
            
        )
    }
}
export default AddMovie