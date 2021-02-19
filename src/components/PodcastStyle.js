import styled from "styled-components";
const StyledHero = styled.div`
 &.kali{ min-height: 60vh;
  background: url(${(props) => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;}
`;
export default StyledHero;
// const StyledHeader = styled.div`
// &.banner{
//     min-height: 60vh;
//     background: linear-gradient(
//         rgba(146, 5, 71, 0.541),
//         rgba(218, 127, 173, 0.596)
//       ), url(${(props) => props.img}) center/cover no-repeat;
 
// }