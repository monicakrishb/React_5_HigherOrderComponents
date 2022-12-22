import React, { Component } from 'react'
import ComponentC from './components/context/ComponentC'
import { UserProvider } from './components/context/userContext'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UserProvider value="Vishwas"> */}
  <ComponentC/>
      {/* </UserProvider> */}
      </div>
    )
  }
}

