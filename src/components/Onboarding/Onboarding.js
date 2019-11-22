import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Resume from './Resume';
import Education from './Education';
import Experience from './Experience';
import StyledOnboarding from './styles';
import PersonalInfo from './PersonalInfo';
import { Container } from '../../core/Layout';
import Steps, { Step } from '../../core/Steps';

export default function Onboarding({ history }) {
  const [current, setCurrent] = useState(1);

  const handleCurrent = (next) => {
    setCurrent(current + next);
  }

  return (
    <Container>
      <Steps current={current}>
        <Step title="Resume" />
        <Step title="Personal Info" />
        <Step title="Experience and Skills" />
        <Step title="Education" />
      </Steps>

      <StyledOnboarding>
        <Switch>
          <Route exact path="/onboarding/resume">
            <Resume handleCurrent={handleCurrent} history={history} />
          </Route>
          <Route exact path="/onboarding/personal-info">
            <PersonalInfo handleCurrent={handleCurrent} history={history} />
          </Route>
          <Route exact path="/onboarding/experience">
            <Experience handleCurrent={handleCurrent} history={history} />
          </Route>
          <Route exact path="/onboarding/education">
            <Education handleCurrent={handleCurrent} history={history} />
          </Route>
        </Switch>
      </StyledOnboarding>
    </Container>
  )
};
