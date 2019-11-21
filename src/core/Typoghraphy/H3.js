import styled from 'styled-components';
import spitCommonProps from './helpers';
import devices from '../../utils/breakpoints';

const H3 = styled.h3`
  font-size: 1.75em; /* 28px */
  line-height: 1.25em;
  ${props => spitCommonProps(props)};

  @media(${devices.tablet}) {
    font-size: 1.5em; /* 24px */
    line-height: 1.25em;
  };

  @media(${devices.phone}) {
    font-size: 1.375em; /* 22px */
    line-height: 1.13636364em;
  };
`;

export default H3;