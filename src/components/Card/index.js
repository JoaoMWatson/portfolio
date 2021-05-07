import React, { useState } from "react";
import Slider from "react-slick";
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <NavBar>
        <NavItem isSelect as="a" href="#">
          About
        </NavItem>
        <NavItem as="a" href="#">
          Knowledge
        </NavItem>
        <NavItem as="a" href="#">
          Interest
        </NavItem>
        <NavItem as="a" href="#">
          Experiences
        </NavItem>
      </NavBar>
      <Slider {...settings}>
        <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </Slider>
    </>
  );
}

export default Card;
