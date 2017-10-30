import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'

import Crypto from 'crypto-js'

import './styles.scss'

class HeroeCardComponent extends Component {

	constructor() {
    	super();
    	this.onHeroeClick = this.onHeroeClick.bind(this);
  	}

	onHeroeClick(heroeId) {
		const { router } = this.props
		router.push(`/heroes/${heroeId}`)
	}

	render () {
		const { id, name, thumbnail } = this.props
		const image = thumbnail.path + '.' + thumbnail.extension
		return (
			<Link onClick={() => this.onHeroeClick(id)}>
				<div styleName="heroCard">
					<img src={image} alt={name} />
					<h4>{name}</h4>
				</div>
			</Link>
		)
	}
}

HeroeCardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}
export default HeroeCardComponent
