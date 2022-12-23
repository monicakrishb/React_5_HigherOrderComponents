import React, { Component } from 'react'
import './Jsx.css'

class Jsx extends Component {
  render() {
  var mystyle={
    fontsize:100,
    color:'red'
  }
 
    return (
      <div className='style'>
        HelloWorld!!
        <h1 style={mystyle}>{1+1}</h1>
        </div>
    )
  }
}
export default Jsx
