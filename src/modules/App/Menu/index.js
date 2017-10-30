import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import {Button, IconButton, FontIcon} from 'react-toolbox'
import store from 'store'

import './style.scss'

class Menu extends Component {

  render () {
    return (
      <div styleName="menu">
        <Link to="/heroes"><Button icon='people' label='Heroes' raised /></Link>
        <Link to="/comics"><Button icon='notes' label='Comics' raised /></Link>
      </div>
    )
  }
}

export default Menu