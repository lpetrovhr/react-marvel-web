import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchComics } from '../../actions/comics'

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
	    const ts = new Date().getTime()
	    const hash = Crypto.MD5(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
	    const string = `ts=${ts}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`
		dispatch(fetchComics(string))
	}

	render () {
		return (
		   <div>
		     <h1>Comics</h1>
		   </div>
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
