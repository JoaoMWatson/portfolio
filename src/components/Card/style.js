import styled from "styled-components";
import { fontColors, fontSize } from "../../globalStyle.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 600px;
  align-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 980px;
  height: 547px;
  background-color: #1095e0;
  border: 3px solid rgba(255, 255, 255, 0.87);
  box-shadow: 0px 0px 20px 3px #1a54ab;
  border-radius: 10px;
  padding: 2%;
  overflow-y: auto;
  text-align:justify;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #278FCF;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #0f7bba;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
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
  line-height: 2rem;

  b {
    font-weight: bold;
    line-height: 1.5rem;
    padding-bottom: 10px;
  }
  p {
    margin-left: 20px;
    line-height: 1.5rem;
    margin-bottom: 10px;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;

  a {
    text-decoration: none;
  }
`;

const NavItem = styled.h2`
  color: ${(props) =>
    props.isSelect ? fontColors.primary : fontColors.secondary};
  font-size: ${(props) => (props.isSelect ? "1.8rem" : fontSize.secondary)};
  font-family: "Poppins";
  margin-left: 2%;
  margin-bottom: ${(props) => (props.isSelect ? "0.3%" : "0px")};
  font-weight: ${(props) => (props.isSelect ? "600" : "500")};
  transition: 2;

  &:hover {
    color: ${fontColors.primary};
    transform: scale(1.1);
  }
`;

export { CardContainer, Title, Item, List, Container, NavBar, NavItem };
