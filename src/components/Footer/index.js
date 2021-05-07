import React from "react";
import { Linkedin, Github, Medium } from "../../assets/svg";
import { Container } from "./style.js";

function Footer() {
  return (
    <Container>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joaomwatson/">
        <Linkedin />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JoaoMWatson">
        <Github />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@joaopedro.wat22">
        <Medium />
      </a>
    </Container>
  );
}

export default Footer;
