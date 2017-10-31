import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Button, Input, FontIcon } from 'react-toolbox'

import './style.scss'

class Search extends Component {

	constructor() {
	    super()
	    this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit (event) {
		console.log(event)
	}

	render () {
		return (
			<div>
				<Input styleName='searchBox' type="text" label="Search" icon="search " />
				<Button onClick={() => this.handleSubmit()} label='Search' raised />
			</div>
		)
	}
}

export default Search
