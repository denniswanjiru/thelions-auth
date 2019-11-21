import styled from 'styled-components';

export default styled.p`
  color: ${props => props.color || "#000"};
  font-weight: ${props => props.weight || "normal"};
  text-align: ${props => props.textAlign || "left"};
  font-size: ${props => `${props.size}px` || "16px"};
  margin-top: ${props => `${props.marginTop}px` || 0};
  line-height: ${props => props.lineHeight || "unset"};
  margin-bottom: ${props => `${props.marginBottom}px` || 0}!important;
`;
