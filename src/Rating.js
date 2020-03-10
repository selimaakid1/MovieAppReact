import React, { Component } from "react"


class Rating extends Component{

    render(){
        let stars = []
        for(let i = 0; i<5; i++){
            if(this.props.rating > i){
                stars.push(<i onClick={() => this.props.setRate(i + 1)} className="fas fa-star"></i>)
            }else{
                stars.push(<i onClick={() => this.props.setRate(i + 1)} className="far fa-star"></i>)
            }
        }
        return(
            <div className='starsDisplay'>
                {stars}
            </div>
        )
    }
}

export default Rating