import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchComics } from '../../actions/comics'
import CardComponent from 'components/MarvelCard'

import Crypto from 'crypto-js'

class Comics extends Component {

	constructor() {
	    super()
	    this.getComics = this.getComics.bind(this)
	}

	componentWillMount() {
		this.getComics()
	}

	getComics() {
		const { dispatch } = this.props
		dispatch(fetchComics())
	}

	render () {
		const { comics } = this.props
		const allComics = comics.results
		return allComics.map((comic, key) => 
			<CardComponent
				key={key}
				id={comic.id}
				name={comic.title}
				thumbnail={comic.thumbnail}
				myRoute={'comics'}
			/>
		)
	}
}

Comics.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  comics: PropTypes.object.isRequired,
  error: PropTypes.string
}

export default withRouter(connect(state => ({
  comics: state.comics
}))(Comics))
