import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 32rem;
  margin: 0;
  padding: 7.5rem 15%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .box-title {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p:last-child {
      margin-top: 1.25rem;
    }
  }

  .box-boxs {
    margin-top: 8.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  
  @media (max-width: 436px) {
    padding: 7.5rem 5%;

    .box-boxs {
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .box-title {
      width: 90%;
    }
  }
`;