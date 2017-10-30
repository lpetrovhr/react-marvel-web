import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Card from 'react-toolbox/lib/card'

import Menu from '../Menu'
import Heroes from 'modules/Heroes'
import Comics from 'modules/Comics'
import Home from 'modules/Home'
import SingleHeroe from 'modules/SingleHeroe'

import './style.scss'

class Content extends Component {
  render () {
    return (
      <main styleName='layout'>
        <Menu />
        <div styleName='content'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/heroes" component={Heroes} />
            <Route path="/heroes/:heroeId" component={SingleHeroe} />
            <Route path="/comics" component={Comics} />
          </Switch>
        </div>
      </main>
    )
  }
}

export default Content
