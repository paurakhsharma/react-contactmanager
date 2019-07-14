import React, { Component } from 'react'
import Contracts from './components/Contacts'
import Header from './components/Header'

import { Provider } from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contracts />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App