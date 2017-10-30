import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchHeroes } from '../../actions/heroes'

import Crypto from 'crypto-js'

class SingleHeroe extends Component {
	render () {
		return (
			<div>Single one</div>
		)
	}
}
export default SingleHeroe
