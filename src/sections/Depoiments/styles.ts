import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const Section = styled.section`
  width: 100%;
  min-height: 38.85rem;
  background-color: ${colors.white};
  margin: 0;
  padding: 6.25rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  .box-texts {
    p:last-child {
      margin-top: 1rem;
      margin-bottom: 2.5rem;
    }
  }
`;