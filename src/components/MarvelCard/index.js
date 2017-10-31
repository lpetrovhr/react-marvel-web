import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'

import Crypto from 'crypto-js'

import './styles.scss'

class CardComponent extends Component {

	render () {
		const { id, name, thumbnail, myRoute } = this.props
		const image = thumbnail.path + '.' + thumbnail.extension
		return (
			<Link to={`/${myRoute}/${id}`}>
				<div styleName="marvelCard">
					<img src={image} alt={name} />
					<h4>{name}</h4>
				</div>
			</Link>
		)
	}
}

CardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  myRoute: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
}
export default withRouter(CardComponent)
