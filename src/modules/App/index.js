import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import theStore from './../../store'

import Content from './Content'

class App extends Component {
  render () {
    return (
      <Provider store={theStore}>
	      <Router>
	        <Route component={Content} />
	      </Router>
      </Provider>
    )
  }
}

export default App
