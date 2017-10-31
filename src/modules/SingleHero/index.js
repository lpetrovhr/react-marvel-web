import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchSingleHero } from '../../actions/heroes'
import { fetchHeroComics } from '../../actions/comics'
import CardComponent from 'components/MarvelCard'

import './style.scss'

class SingleHero extends Component {
	constructor() {
	    super()
	    this.getSingleHero = this.getSingleHero.bind(this)
	}

	componentWillMount() {
		this.getSingleHero()
	}

	getSingleHero() {
		const { dispatch } = this.props
		const id = this.props.match.params.heroeId
		dispatch(fetchSingleHero(id))
		dispatch(fetchHeroComics(id))
	}

	renderHeroComics(comics) {
		return comics.map((comic,key) =>
			<CardComponent
				key={key}
				id={comic.id}
				name={comic.title}
				thumbnail={comic.thumbnail}
				myRoute={'comics'}
			/>
		)
	}

	render () {
		const { heroes, comics } = this.props
		const comicTotal = comics.total
		const comicResults = comics.results
		const hero = heroes.results[0]
		const imagePath = hero.thumbnail.path + '.' + hero.thumbnail.extension

		return (
			<div styleName="heroCard">
				<img src={imagePath} alt={hero.name} />
				<h2>{hero.name}</h2>
				<p>{hero.description}</p>
				<span>Appearing in comics:</span> 
				{comicTotal > 0 ? this.renderHeroComics(comicResults) : 
				 <span>There's no available commics for this hero</span>}
			</div>
		)
	}
}

SingleHero.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  heroes: PropTypes.object.isRequired,
  comics: PropTypes.object.isRequired,
  error: PropTypes.string,
}

export default withRouter(connect(state => ({
  heroes: state.heroes,
  comics: state.comics
}))(SingleHero))

