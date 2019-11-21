import styled from 'styled-components';
import spitCommonProps from './helpers';

export const H5 = styled.h5`
  font-size: 0.875em; /* 14px */
  line-height: 1.22222222em;
  ${props => spitCommonProps(props)};
`;

export default H5;