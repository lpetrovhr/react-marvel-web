import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-toolbox/lib/button'

const ButtomComponent = ({ children, ...rest }) =>
  <Button
    {...rest}
  >
    {children}
  </Button>

ButtomComponent.prototype = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]).isRequired
}

export default ButtomComponent
