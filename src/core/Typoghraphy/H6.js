import styled from 'styled-components';
import spitCommonProps from './helpers';

const H6 = styled.h6`
  font-size: 0.75em; /* 12px */
  line-height: 1.22222222em;
  ${props => spitCommonProps(props)};
`;

export default H6;
