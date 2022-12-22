import React, { Component } from 'react'
import ClickCounter from './components/context/HigherOrder/ClickCounter'
import HoverCounter from './components/context/HigherOrder/HoverCounter'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter/>
        < HoverCounter/>
      </div>
    )
  }
}

