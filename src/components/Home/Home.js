import React from 'react'

import Button from '../../core/Button';
import StyledLink from '../../styled/StyledLink';

export default function Home() {
  return (
    <div>
      <Button buttonType="primary">
        <StyledLink to="/login" color="#fff">Login</StyledLink>
      </Button>
    </div>
  )
}
