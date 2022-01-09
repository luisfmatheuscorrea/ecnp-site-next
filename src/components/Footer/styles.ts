import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
}

export const FooterS = styled.footer`
  width: 100%;
  background-color: ${colors.white};
  margin: 0;
  padding: 4rem 13%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* box-shadow: 0px 0.25rem 0.25rem #00000040; */

  img {
    width: 6rem;
  }

  .top {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    .social {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      img {
        margin-left: 0.5rem;
        width: 2rem;
        cursor: pointer;
        transition: 400ms;
        
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .separator {
    height: 0.05rem;
    width: 100%;
    background-color: ${colors.barraCimaVideo};
    margin: 1rem 0 1.5rem 0;
  }

  .bottom {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 436px) {
    img {
      width: 9rem;
    }

    .top {
      flex-direction: column;
      align-items: center;
      
      .social {
        justify-content: center;
        margin-top: 1rem;
        width: 100%;
      }
    }

    .bottom {
      div {
        width: 100%;
        justify-content: space-evenly;
        
        a {
          text-align: center;
          border-bottom: none;
        }
      }
    }
  }
`;