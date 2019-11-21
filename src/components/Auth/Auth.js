import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import StyledAuth from './styles';
import curve from '../../assets/illustrations/curve.svg';
import workIll from '../../assets/illustrations/login-illustration.svg';

export default function Auth({history}) {
  return (
    <StyledAuth>
      <StyledAuth.ImgWrapper>
        <StyledAuth.Img src={workIll} alt="" />
      </StyledAuth.ImgWrapper>

      <StyledAuth.StyledFormWrapper backgroungImage={curve}>
        <Switch>
          <Route exact path="/login">
            <Login history={history} />
          </Route>
          <Route exact path="/signup">
            <Signup history={history} />
          </Route>
        </Switch>
      </StyledAuth.StyledFormWrapper>
    </StyledAuth>
  )
}
