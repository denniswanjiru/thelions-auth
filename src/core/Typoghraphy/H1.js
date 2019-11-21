import styled from 'styled-components';
import spitCommonProps from './helpers';
import devices from '../../utils/breakpoints';

const H1 = styled.h1`
  font-size: 3em; /* 48px */
  line-height: 1.05em;
  ${props => spitCommonProps(props)};

  @media(${devices.tablet}) {
    font-size: 2.5em; /* 40px */
    line-height: 1.125em;
  };

  @media(${devices.phone}) {
    font-size: 2em; /* 32px */
    line-height: 1.25em;
  };
`;

export default H1;