import React from 'react'
import { StyledSteps } from './styles';
import check from '../../assets/icons/check.svg';


export default function Steps({ children, current }) {
  const childrenWithProps = React.Children.map(children, (child, idx) => {
    const index = idx + 1;
    return React.cloneElement(child, {current, index});
  }
  );

  return (
    <StyledSteps>
      {childrenWithProps}
    </StyledSteps>
  )
}

Steps.Step = ({ title, current, index }) => {
  const active = current === index;
  const finished = current > index;
  const pending = current < index;

  return (
    <StyledSteps.Step active={active} finished={finished}>
      <StyledSteps.StepWrapper active={active} finished={finished}>
        {finished && <StyledSteps.Icon src={check} alt="check"/>}
        {(active || pending) && <StyledSteps.StepNumber active={active}>{index}</StyledSteps.StepNumber>}
      </StyledSteps.StepWrapper>
      <StyledSteps.Title>{title}</StyledSteps.Title>
    </StyledSteps.Step>
  )
}