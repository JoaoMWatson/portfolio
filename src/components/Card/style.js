import styled from "styled-components";
import { fontColors, fontSize } from "../../globalStyle.js";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 1098px;
  height: 547px;
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
  padding-bottom: 2%;
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

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

const NavItem = styled.h2`
  color: ${(props) =>
    props.isSelect ? fontColors.primary : fontColors.secondary};
  font-size: ${(props) =>
    props.isSelect ? '1.8rem' : fontSize.secondary};
  font-family: "Poppins";
  margin-left: 2%;
  margin-bottom: ${(props) => (props.isSelect ? "0.3%" : "0px")};
  font-weight: ${(props) => (props.isSelect ? "600" : "500")};
  transition: 2;

  &:hover{
    color: ${fontColors.primary};
    transform: scale(1.1);
  }
`;

export { CardContainer, Title, Item, List, Container, NavBar, NavItem };
