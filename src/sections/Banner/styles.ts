import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  extended?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 40rem;
  background-image: url('images/hero-bg.jpg');
  background-size: 46rem;
  background-repeat: no-repeat;
  background-position-x: right;
  border-bottom-left-radius: 50% 10%;
  border-bottom-right-radius: 50% 10%;
  background-color: ${colors.bgHero};
  margin: 0;
  padding: 0.6rem 15%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  .box {
    width: 58.5%;
    height: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 436px) {
    padding: 4rem 5% 0.6rem 5%;
    min-height: 38rem;
    background-size: 41.5rem;
    background-position-x: -100%;

    .box {
      width: 100%;
      height: 22rem;
    }
  }
`;

export const Button = styled.button<ButtonProps>`
    color: ${colors.white};
    background-color: ${colors.primary};
    font-size: 1.125rem;
    font-weight: 600;
    width: ${props => props.extended ? '100%' : 'fit-content'};
    padding: 0.5rem 2.2rem;
    border-radius: 1000px;
    transition: 400ms;

    cursor: pointer;

    & + & {
      margin-left: 0.5rem;
    }

    &:hover {
      background-color: ${colors.secondary};

      transition: 600ms;
    }
`;