import styled from 'styled-components';

export const StyledSteps = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  & div:not(:first-child) {
    margin-left: 15px;
  }

  & div:not(:last-child) {
    width: 100%;
  }

  & div:not(:last-child) p {
    display: flex;
    align-items: center;
    flex: 1;

    &::after {
      z-index: 1;
      width: 100%;
      height: 1px;
      content: '';
      display: flex;
      margin-left: 10px;
      background: rgba(0,0,0,0.35);
    }
  }
`;

StyledSteps.Icon = styled.img`
  width: 20px;
`;

StyledSteps.Step = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.active || props.finished) ? "#807be3" : "rgba(0,0,0,0.35)"};
`;

StyledSteps.Title = styled.p`
  display: flex;
  align-items: center;
  white-space: nowrap;

  &:last-child {
    width: max-content;
  }
`;

StyledSteps.StepNumber = styled.span`
  color:  ${props => props.active ? "#fff" : "rgba(0,0,0,0.35)"};
`;

StyledSteps.StepWrapper = styled.div`
  display: grid;
  margin-right: 15px;
  border-radius: 50%;
  place-items: center;
  width: 34px!important;
  height: 34px!important;
  background-color: ${props => props.active ? "#807be3" : "#fff"};
  border: solid 1px ${props => (props.active || props.finished) ? "#807be3" : "rgba(0,0,0,0.35)"};
`;