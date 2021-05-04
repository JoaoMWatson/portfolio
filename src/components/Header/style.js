import styled from "styled-components";
import { fontSize, fontColors } from "../../globalStyle.js";

const Title = styled.h1`
  color: ${(props) =>
    props.primary ? fontColors.primary : fontColors.secondary};
  font-size: ${(props) =>
    props.primary ? fontSize.title.primary : fontSize.title.secondary};
  font-family: "Poppins";
  font-weight: 900;
  margin-top:15px
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Logo = styled.image`
  padding:10px;
  width: 100px;
  height: 100px;
  flex: 0;
`;

export { Container, Wrapper, Title, Logo };
