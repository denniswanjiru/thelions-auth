import styled from 'styled-components';

const Text = styled.p`
  color: ${props => props.color || "#000"};
  margin-top: ${props => `${props.mt}px` || 0};
  font-weight: ${props => props.weight || "normal"};
  text-align: ${props => props.textAlign || "left"};
  font-size: ${props => `${props.size}px` || "16px"};
  line-height: ${props => props.lineHeight || "unset"};
  margin-bottom: ${props => `${props.mb}px` || 0}!important;
`;

export default Text;
