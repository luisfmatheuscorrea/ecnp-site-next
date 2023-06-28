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
  justify-content: space-between;

  .or-text {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${colors.secondary};
    margin-top: 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 100%;
  }

  .box {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    button {
      margin-top: 2rem;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.7rem;
      grid-row-gap: 1.5rem;

      margin: 2rem 0;
    }
  }

  .box-image {
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    img {
      height: 80%;
    }
  }

  @media (max-width: 436px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 7.5rem 5%;

    .box {
      width: 95%;
    }

    .box-image {
      width: 95%;
    }
  }
`;