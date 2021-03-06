import styled from "styled-components";
const StyledHero = styled.div`
 &.kl{ 
     
  background: linear-gradient(
    rgba(146, 5, 71, 0.541),
    rgba(218, 127, 173, 0.596)
  ), url(${(props) => props.img}) center/cover no-repeat;
 
  background-size: 100% 100%;
  // width:96.7vw
  
  }
`;
export default StyledHero;