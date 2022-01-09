import { createGlobalStyle } from "styled-components";
import pxtovw from '../../utils/pxtovw';

export const colors = {
  primary: '#EFB214',
  secondary: '#595D81',
  white: '#FFFFFF',

  bgHero: '#ECE4CE',
  
  colorTextBase: '#595D81',
  
  barraCimaVideo: '#EBEBEBE6',
  layoutVideo: '#F9F9F9F0',
  timelineVideo: '#D6D6D6',

  colorClose: '#F20F0F',
  colorMinimize: '#FAA80A',
  colorMinMax: '#0BD944',
}

export const gradients = {
  hero: 'linear-gradient(90deg, #ECE4CE 0%, rgba(196, 196, 196, 0) 87.93%), url(.jpg)'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FFFFFF;
    overflow-x: hidden;
  }

  body,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  input,
  button,
  textarea {
    font: 500 1.125rem Montserrat;
    color: ${colors.colorTextBase};
  }

  input {
    border: none;

    &:focus {
      outline: none;
    }
  }

  .container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  :root {
    font-size: ${pxtovw(12)};
    overflow-x: hidden;
  }

  @media (max-width: 436px) {
    :root {
      font-size: ${pxtovw(41)}
    }
  }
`;

export default GlobalStyle;