import styled from "styled-components";
import {fontColors} from "../../globalStyle.js"

const Container = styled.footer`
  width: 100vw;
  height: 141px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-between;

  svg{ 
    width:90px;
    margin:2%;
    color: ${fontColors.primary};
    transition:0.5ms;
  }

  svg:hover{
    color: ${fontColors.hover};
  }
`;

export { Container };
