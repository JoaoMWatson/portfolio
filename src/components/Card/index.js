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
  const [sobre, setSobre] = useState(true);
  const [conhecimento, setConhecimento] = useState(false);
  const [experiencia, setExperiencia] = useState(false);
  const [curiosidade, setCuriosidade] = useState(false);
  const [slider, setSlider] = useState();
  const [indexSlider, setIndexSlider] = useState(0);

  const after = (index) => {
    if (isNaN(index) || index === undefined) {
      index = 1;
    }
    if (index === 4) {
      index = 0;
    }
    switch (index) {
      case 0:
        setSobre(true);
        setConhecimento(false);
        setExperiencia(false);
        setCuriosidade(false);
        break;
      case 1:
        setSobre(false);
        setConhecimento(true);
        setExperiencia(false);
        setCuriosidade(false);
        break;
      case 2:
        setSobre(false);
        setConhecimento(false);
        setExperiencia(true);
        setCuriosidade(false);
        break;
      case 3:
        setSobre(false);
        setConhecimento(false);
        setExperiencia(false);
        setCuriosidade(true);
        break;
      default:
        setSobre(true);
        setConhecimento(false);
        setExperiencia(false);
        setCuriosidade(false);
    }
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => after(indexSlider),
    beforeChange: (current, next) => {
      setIndexSlider(next);
    },
  };

  return (
    <>
      <NavBar>
        <NavItem
          onClick={() => {
            setSobre(true);
            setConhecimento(false);
            setExperiencia(false);
            setCuriosidade(false);
            slider.slickGoTo(0);
          }}
          isSelect={indexSlider === 0 ? true : false}
        >
          Sobre
        </NavItem>
        <NavItem
          onClick={() => {
            setSobre(false);
            setConhecimento(true);
            setExperiencia(false);
            setCuriosidade(false);
            slider.slickGoTo(1);
          }}
          value={indexSlider}
          isSelect={indexSlider === 1 ? true : false}
        >
          Conhecimentos
        </NavItem>
        <NavItem
          onClick={() => {
            setSobre(false);
            setConhecimento(false);
            setExperiencia(true);
            setCuriosidade(false);
            slider.slickGoTo(2);
          }}
          isSelect={indexSlider === 2 ? true : false}
        >
          Experi??ncias
        </NavItem>
        <NavItem
          onClick={() => {
            setSobre(false);
            setConhecimento(false);
            setExperiencia(false);
            setCuriosidade(true);

            slider.slickGoTo(3);
          }}
          isSelect={indexSlider === 3 ? true : false}
        >
          Curiosidades
        </NavItem>
      </NavBar>
      <Slider ref={(slider) => setSlider(slider)} {...settings}>
        <li>
          <Container>
            <CardContainer>
              {/* <Title>Sobre </Title> */}
              <List>
                <Item as="p">
                  Formado em Desenvolvimento de Sistemas pela ETEC Irm??
                  Agostina, estudante de Ci??ncia da Computa????o e amante de
                  tecnologia. Focado em Desenvolvimento backend e data science
                  com um p?? em Frontend. Atualmente atuo com C#, Python, e
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
              {/* <Title>Conhecimentos</Title> */}
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
                    - Relacional(MySQL/MariaBD, SQLServer, Oracle, Postegres,
                    SQLite)
                  </p>
                  <p>- N??o relacional(Firebase, MongoBD)</p>
                </Item>
                <Item>
                  <b>Misc:</b>
                  <p>- Git</p>
                  <p>- Microsoft azure</p>
                  <p>- Heroku</p>
                  <p>- AWS</p>
                </Item>
              </List>
            </CardContainer>
          </Container>
        </li>
        <li>
          <Container>
            <CardContainer>
              {/* <Title>Experi??ncias</Title> */}
              <List>
                <Item>
                  <b>Desenvolvedor Fullstack na Fiscosys</b>
                </Item>
                <b>Per??odo do emprego ago. de 2020 ??? o momento</b>
                <Item></Item>
                <Item>
                  <p>
                    - Atuando na cria????o e implementa????o de interfaces para
                    usu??rio final
                  </p>
                  <p>- Desenvolvimento de APIs REST com alto fluxo de dados</p>
                  <p>- Manuten????o de c??digo legado</p>
                  <p>- Refatora????o com foco em melhoria de desempenho</p>
                </Item>
                <Item>
                  <b>Analista t??cnico na Visomes</b>
                </Item>
                <b>Maio de 2019 ??? Maio de 2020, Dura????o: 1 ano 1 m??s</b>
                <Item></Item>
                <Item>
                  <p>- Helpdesk</p>
                  <p>- Participa????o em projetos de desenvolvimento</p>
                  <p>- Manuten????o de c??digo legado</p>
                  <p>
                    - Cria????o de planilhas utilizando t??cnicas de data science e
                    web scrapping
                  </p>
                </Item>
              </List>
            </CardContainer>
          </Container>
        </li>
        <li>
          <Container>
            <CardContainer>
              {/* <Title>Curiosidades</Title> */}
              <List>
                <Item>
                  {" "}
                  &middot; Nascido, criado e morando em S??o Paulo - SP
                </Item>
                <Item> &middot; Pronomes: [Ele/dele/he/him]</Item>
                <Item> &middot; Amante de podcasts</Item>
                <Item>
                  {" "}
                  &middot; Tenho 3 gatas, todas com nomes de personagens de
                  Legend of Zelda(Zelda, Midna, Mipha), minha casa ?? quase
                  Hyrule
                </Item>
                <Item> &middot; Jogador de lol(nick: To entediado #br1)</Item>
                <Item> &middot; Violinista</Item>
                <Item> &middot; Aspirante a masterchef</Item>
                <Item>
                  {" "}
                  &middot; Comecei a estudar programa????o com 13 anos mas parei
                  at?? voltar aos 17
                </Item>
              </List>
            </CardContainer>
          </Container>
        </li>
      </Slider>
    </>
  );
}

export default Card;
