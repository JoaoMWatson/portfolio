import React from "react";
import { Title, Wrapper, Container, Logo } from "./style.js";

export default function Header() {
  return(
    <Container>
      <Wrapper>
        <Title primary>Hi, i am João Pedro Watson</Title>
        <Title>Backend developer</Title>
      </Wrapper>
    </Container>
  )
}