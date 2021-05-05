import styled from "styled-components";
import { fontColors, fontSize } from "../../globalStyle.js";

const Container = styled.div``;

const CardContainer = styled.div`
  width: 380px;
  height: 494px;
  background-color: #1095e0;
  border: 3px solid rgba(255, 255, 255, 0.87);
  box-shadow: 0px 0px 20px 3px #1a54ab;
  border-radius: 20px;
  padding: 2%;
`;

const Title = styled.h2`
  font-size: ${fontSize.primary};
  color: ${fontColors.primary};
  font-family: "Poppins";
  font-weight: bold;
  text-align: center;
  padding-bottom: 10%;
`;

const List = styled.ul`
  width: 100%;
  color: ${fontColors.primary};
  font-family: "Poppins";
`;

const Item = styled.li`
  font-size: ${fontSize.secondary};
  margin-top: 15px;
`;

export { CardContainer, Title, Item, List, Container };
