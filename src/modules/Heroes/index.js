import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchHeroes } from '../../actions/heroes'
import CardComponent from 'components/MarvelCard'

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
		dispatch(fetchHeroes())
	}

	render () {
		const { heroes } = this.props
		const allHeroes = heroes.results
		return allHeroes.map((heroe, key) => 
			<CardComponent
				key={key}
				id={heroe.id}
				name={heroe.name}
				thumbnail={heroe.thumbnail}
				myRoute={'heroes'}
			/>
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
