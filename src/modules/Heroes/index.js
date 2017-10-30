import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchHeroes } from '../../actions/heroes'
import HeroeCard from 'components/HeroeCard'

import Crypto from 'crypto-js'

class Heroes extends Component {

	constructor() {
	    super()
	    this.getHeroes = this.getHeroes.bind(this)
	}

	componentWillMount() {
		this.getHeroes()
	}

	getHeroes() {
		const { dispatch } = this.props
	    const ts = new Date().getTime()
	    const hash = Crypto.MD5(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
	    const string = `ts=${ts}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`
		dispatch(fetchHeroes(string))
	}

	render () {
		const { heroes } = this.props
		const allHeroes = heroes.results
		return allHeroes.map((heroe, key) => 
			<HeroeCard key={key} id={heroe.id} name={heroe.name} thumbnail={heroe.thumbnail} />
		)
	}
}

Heroes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  heroes: PropTypes.object.isRequired,
  error: PropTypes.string
}

export default withRouter(connect(state => ({
  heroes: state.heroes
}))(Heroes))
