import React, { Component } from 'react'
import ReactLoading from 'react-loading';

export default class App extends Component {
  render() {
  
    return (
      <div>
          <ReactLoading type="balls" color="red" height={667} width={375} />
          
      </div>
    )
  }
}
