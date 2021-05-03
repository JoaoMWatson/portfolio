import styled from "styled-components";
import { fontSize, fontColors } from "../../globalStyle.js";

const Title = styled.h1`
  color: ${(props) =>
    props.primary ? fontColors.primary : fontColors.secondary};
  font-size: ${(props) =>
    props.primary ? fontSize.primary : fontSize.secondary};
  font-family: "Poppins";
  font-weight:900;
`;

const Container = styled.header`
  display: flex;
  flex-direction:column;
  align-content:center;
  justify-content:center;
  align-items:center

`;

export { Container, Title };
