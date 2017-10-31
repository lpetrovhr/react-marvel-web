import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Card from 'react-toolbox/lib/card'

import Menu from '../Menu'
import Search from '../Search'
import Heroes from 'modules/Heroes'
import Comics from 'modules/Comics'
import Home from 'modules/Home'
import SingleHero from 'modules/SingleHero'
import SingleComic from 'modules/SingleComic'

import './style.scss'

class Content extends Component {
  render () {
    return (
      <main styleName='layout'>
        <Menu />
        <Search />
        <div styleName='content'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/heroes" component={Heroes} />
            <Route path="/heroes/:heroeId" component={SingleHero} />
            <Route exact path="/comics" component={Comics} />
            <Route path="/comics/:comicId" component={SingleComic} />
          </Switch>
        </div>
      </main>
    )
  }
}

export default Content
