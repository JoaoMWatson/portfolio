import React from 'react'
import {Linkedin, Github, Medium} from "../../assets/svg"
import { Container } from './style.js'


function Footer() {
  return (
    <Container>
      <Linkedin />
      <Github />
      <Medium />
    </Container>
  )
}

export default Footer
