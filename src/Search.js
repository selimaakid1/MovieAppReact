import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: '',
            state: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            getValue: this.props.getValue
        })
    }
    
    search = (e) => {
        this.setState({
            state: true
        })
    }


    render() {
        return (
            <div>
                <div className='searchTerm'>
                    <input type="text" placeholder="Type movie name to search" value={this.props.value} onChange={e => this.props.getValue(e.target.value)} />
                    <Button variant="outline-dark" onClick={this.search}>Search</Button>
                </div>
            </div>
        )
    }
}
export default Search
