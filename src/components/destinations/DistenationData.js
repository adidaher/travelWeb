import React, { Component } from 'react'


export default class DistenationData extends Component {
  render() {
    return (
      <div>
          <div className={this.props.cName}>
    <div className="des-text">
    <h2>{this.props.heading}</h2>
    <p>{this.props.text}</p>
    
    </div>
    <div className="image">
    <img alt="" src={this.props.image1}/>
    <img alt="" src={this.props.image2}/>
     </div>
   </div>
      </div>
    )
  }
}
