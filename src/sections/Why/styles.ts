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

  .box-title {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p:last-child {
      margin-top: 1.25rem;
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
    padding: 7.5rem 5%;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .box-title {
      width: 95%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      p:last-child {
        margin-top: 1.25rem;
      }
    }

    .box-image {
      width: 95%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      img {
        height: 80%;
      }
    }
  }
`;