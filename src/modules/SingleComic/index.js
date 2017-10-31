import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchSingleComic } from '../../actions/comics'
import { fetchComicHeroes } from '../../actions/heroes'
import CardComponent from 'components/MarvelCard'

import './style.scss'

class SingleComic extends Component {

	constructor() {
	    super()
	    this.getSingleComic = this.getSingleComic.bind(this)
	}

	componentWillMount() {
		this.getSingleComic()
	}

	getSingleComic() {
		const { dispatch } = this.props
		const id = this.props.match.params.comicId
		dispatch(fetchSingleComic(id))
		dispatch(fetchComicHeroes(id))
	}

	renderComicHeroes(heroes) {
		return heroes.map((hero,key) =>
			<CardComponent
				key={key}
				id={hero.id}
				name={hero.name}
				thumbnail={hero.thumbnail}
				myRoute={'heroes'}
			/>
		)
	}

	render () {
		const { comics, heroes } = this.props
		const heroTotal = heroes.total
		const heroResults = heroes.results
		const singleComic = comics.results[0]
		const imagePath = singleComic.thumbnail.path + '.' + singleComic.thumbnail.extension
		
		return (
			<div styleName="comicCard">
				<img src={imagePath} alt={singleComic.title} />
				<h2>{singleComic.title}</h2>
				<p>{singleComic.description}</p>
				{heroTotal > 0 ? this.renderComicHeroes(heroResults) : <p>This comic has no heroes o.O</p>}
			</div>
		)
	}
}

SingleComic.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  comics: PropTypes.object.isRequired,
  heroes: PropTypes.object.isRequired,
  error: PropTypes.string
}

export default withRouter(connect(state => ({
  comics: state.comics,
  heroes: state.heroes
}))(SingleComic))
