import styled from "styled-components";
import curved from '../../assets/illustrations/curve.svg';

const StyledAuth = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

StyledAuth.ImgWrapper = styled.div`
  width: 50vw;
  display: grid;
  place-items: center;
`;

StyledAuth.Img = styled.img`
  width: 100%;
`;

StyledAuth.StyledFormWrapper = styled.div`
  display: grid;
  place-items: center;
  background-size: cover;
  background-position: center;
  background-image: url(${curved});
`;

export default StyledAuth;
