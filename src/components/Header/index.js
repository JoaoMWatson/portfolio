import React from "react";
import { Title, Wrapper, Container, Logo } from "./style.js";

export default function Header() {
  return(
    <Container>
      <Wrapper>
        <Title primary>Prazer, João Pedro Watson </Title>
        <Title>Desenvolvedor Backend</Title>
      </Wrapper>
    </Container>
  )
}