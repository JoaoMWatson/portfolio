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
    arrows:true,
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
          Experiences
        </NavItem>
        <NavItem as="a" href="#">
          Interest
        </NavItem>
      </NavBar>
      <Slider {...settings}>
        <li>
          <Container>
            <CardContainer>
              <Title>About</Title>
              <List>
                <Item as="p">
                  Formado em Desenvolvimento de Sistemas pela ETEC Irmã
                  Agostina, estudante de Ciências da Computação e amante de
                  tecnologia. Focado em Desenvolvimento backend e data science
                  com um pé em Frontend. Atualmente atuo com C#, Python, e
                  Javascript utilizando tecnologias como .NetCore, Flask,
                  ReactJS dentre outras. Procuro evoluir como dev aprendendo
                  cada dia mais!
                </Item>
              </List>
            </CardContainer>
          </Container>
        </li>
        <li>
          <Container>
            <CardContainer>
              <Title>Knowledge</Title>
              <List>
                <Item>
                  <b>Backend:</b>
                  <p>- Python(Flask, Django, Scipy, Pandas, Matplotlib)</p>
                  <p>- C#(.NetCore, .AspNet, EntityFramework)</p>
                  <p>- PHP(Lumen, Laravel)</p>
                </Item>
                <Item>
                  <b>Frontend:</b>
                  <p>- HTML</p>
                  <p>- CSS</p>
                  <p>- Javascript(ReactJS, Vanilla JS)</p>
                </Item>
                <Item>
                  <b>Database:</b>
                  <p>
                    - Relacional(MySQL/MariaBD, SQLServer, Oracle, Postegres, SQLite)
                  </p>
                  <p>
                    - Não relacional(Firebase, MongoBD)
                  </p>
                </Item>
                <Item>
                  <b>Misc:</b>
                  <p>
                    - Git
                  </p>
                  <p>
                    - Microsoft azure
                  </p>
                  <p>
                    - Heroku
                  </p>
                  <p>
                    - AWS
                  </p>
                </Item>
              </List>
            </CardContainer>
          </Container>
        </li>
        <li>
          <Container>
            <CardContainer>
              <Title>Experiences</Title>
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
