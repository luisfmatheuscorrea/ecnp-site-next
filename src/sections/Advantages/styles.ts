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
  flex-direction: row;
  align-items: center;

  .texts-box {
    width: 80%;
  }

  @media (max-width: 436px) {
    padding: 7.5rem 5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .texts-box {
      width: 90%;
      margin-top: 4rem;
    }
  }
`;