import styled from 'styled-components';

export default styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justifyContent || "flex-start"};
  align-items: ${props => props.alignItems || "stretch"};
  justify-items: ${props => props.alignContent || "stretch"};
  margin-top: ${props => `${props.marginTop}px` || 0};
  flex-basis: ${props => `${props.basis}px` || "auto"};
  height: ${props => `${props.height}px` || "auto"};
  margin-bottom: ${props => `${props.marginBottom}px` || 0};
`;