import React, { useState } from "react";
import {
  CardContainer,
  Title,
  List,
  Item,
  Container,
  NavBar,
  NavItem,
} from "./style.js";

function Card() {
  return (
    <>
      <NavBar>
        <NavItem isSelect as="a" href="#">
          Sobre
        </NavItem>
        <NavItem as="a" href="#">
          Conhecimentos
        </NavItem>
        <NavItem as="a" href="#">
          Interesses
        </NavItem>
        <NavItem as="a" href="#">
          Experiencias
        </NavItem>
      </NavBar>
      <Container>
        <CardContainer>
          <Title>Interest</Title>
          <List>
            <Item> - Bla blaBla s</Item>
            <Item> - xaxael</Item>
            <Item> - ahduashd</Item>
            <Item> - Blabaaaaaaa</Item>
            <Item> - Bla blablalbla</Item>
            <Item> - Bla blablalbla</Item>
            <Item> - Bla blablalbla</Item>
            <Item> - Bla blablalbla</Item>
          </List>
        </CardContainer>
      </Container>
    </>
  );
}

export default Card;
