import styled from 'styled-components';
import spitCommonProps from './helpers';
const H4 = styled.h4`
  font-size: 1.125em; /* 18px */
  line-height: 1.22222222em;
  ${props => spitCommonProps(props)};
`;

export default H4;