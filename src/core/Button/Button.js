import React from 'react'

import StyledButton from './styles';
import { getSize, getShape, getType } from './helpers';
import Spinner from '../Spinner';

const Button = ({
  mt,
  mb,
  ml,
  mr,
  icon,
  type,
  size,
  ghost,
  shape,
  buttonType,
  iconType,
  children,
  loading,
  disabled,
  onClick,
  block
}) => {
  return (
    <StyledButton
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      block={block}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      size={getSize(size)}
      type={type || "button"}
      shape={getShape(shape)}
      buttonType={getType(buttonType)}
    >
      {loading && <Spinner />}
      {!!(icon && iconType !== "right") && <StyledButton.Icon>icon</StyledButton.Icon>}
      {children}
      {!!(icon && iconType === "right") && <StyledButton.Icon>icon</StyledButton.Icon>}

    </StyledButton>
  )
}

export default Button;