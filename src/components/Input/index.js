import React from 'react'
import PropTypes from 'prop-types'
import Input from 'react-toolbox/lib/input'

import { hasError } from 'utils/validator'

const InputComponent = ({ input, meta, ...rest }) => (
  <Input
    {...input}
    {...rest}
    error={hasError(meta)}
  />
)

InputComponent.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default InputComponent
