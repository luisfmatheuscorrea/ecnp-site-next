import styled from "styled-components";
import { Link } from 'react-scroll';
import { colors } from "../../assets/styles/global";

interface ButtonProps {
  outlined?: boolean;
  extended?: boolean;
}

export const HeaderS = styled.header`
  width: 100%;
  margin: 0;
  padding: 0.7rem 15%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9999;

  background-color: #FFFFFF00;
  backdrop-filter: blur(1rem);

  img {
    width: 4rem;
    cursor: pointer;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .menu-mobile {
    display: none;
  }

  .buttons {
    a {
      margin-left: 1.3rem;
    }
  }

  a.active-button button {
    box-shadow: 0px 4px 75px rgba(243, 186, 15, 0.49), 0px 1.6711px 44.7154px rgba(243, 186, 15, 0.357047), 0px 0.893452px 34.6694px rgba(243, 186, 15, 0.29734), 0px 0.500862px 28.837px rgba(243, 186, 15, 0.253212), 0px 0.266004px 22.521px rgba(243, 186, 15, 0.20919), 0px 0.11069px 13.4067px rgba(243, 186, 15, 0.149307);
  }

  @media (max-width: 436px) {
    padding: 0.7rem 5%;
    
    nav {
      display: none;
    }

    .menu-mobile {
      display: inherit;

      .menu-icon {
        font-size: 1.8rem;
      }
    }

    img {
      width: 5rem;
    }
  }
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

interface AnchorProps {
  mobile?: boolean,
}

export const Anchor = styled(Link)<AnchorProps>`
    color: ${props => props.mobile ? colors.white : colors.secondary};
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.mobile ? '1rem' : '0.85rem'};
    font-weight: ${props => props.mobile ? '500' : '600'};
    transition: 400ms;

    cursor: pointer;

    & + & {
      margin-left: 1.5rem;
    }

    &:hover {
      color: ${colors.primary};
    }

    &.active {
      color: ${colors.primary};
    }

    @media (max-width: 436px) {
      width: 100%;
      margin: 0 !important;
      padding: 1rem 0.7rem;
      border-bottom: 0.05rem solid #0000002F;

      &:last-child {
        border-bottom: none;
      }

      &.active {
        color: ${colors.primary};
        background-color: #0000000F;
      }
    }
`;