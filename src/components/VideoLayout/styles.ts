import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const VideoLayoutS = styled.div`
  width: 35.438rem;
  min-height: 22.25rem;
  
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0.625rem;
  box-shadow: 0px 41px 96px rgba(89, 93, 129, 0.12), 0px 11.5672px 35.0416px rgba(89, 93, 129, 0.0791138), 0px 4.446px 17.012px rgba(89, 93, 129, 0.0603315), 0px 1.47211px 8.33962px rgba(89, 93, 129, 0.0448601), 0px 0.285217px 3.2975px rgba(89, 93, 129, 0.0272423);

  @media (max-width: 436px) {
    width: 101%;
    min-height: 12rem;

    .react-player {
      border-radius: 0.625rem;
      overflow: hidden;
    }
  }

  .tab-bar {
    width: 100%;
    height: 1.125rem;
    background-color: ${colors.barraCimaVideo};
    backdrop-filter: blur(0.25rem);
    border-radius: 0.625rem 0.625rem 0 0;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1rem;

    .close,
    .minimize,
    .maximize {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 1000px;

      margin-right: 0.563rem;
    }

    .close {
      background-color: ${colors.colorClose};
    }

    .minimize {
      background-color: ${colors.colorMinimize};
    }

    .maximize {
      background-color: ${colors.colorMinMax};
    }
  }

  .window {
    width: 100%;
    min-height: 21.125rem;
    position: relative;
    padding: 1.313rem 0.938rem 0.688rem 0.938rem;
    background-color: ${colors.layoutVideo};
    backdrop-filter: blur(0.25rem);
    border-radius: 0 0 0.625rem 0.625rem;

    .controls {
      height: 1.25rem;
      width: 100%;
      margin-top: 0.813rem;
      margin-bottom: 0.3rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      
      img {
        width: 1.5rem;
        margin-right: 0.4rem;

        cursor: pointer;
      }
    }
  }

  .react-player {
    border-radius: 0.625rem;
    overflow: hidden;
  }

  .blue-ball {
    width: 11.438rem;
    height: 11.438rem;
    background-color: ${colors.secondary};
    border-radius: 50%;
    z-index: -1;
    position: absolute;
    right: -2.125rem;
    bottom: -3rem;
  }

  .orange-ball {
    width: 11.438rem;
    height: 11.438rem;
    background-color: ${colors.primary};
    border-radius: 50%;
    z-index: -1;
    position: absolute;
    left: -4.125rem;
    top: -3rem;
  }
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 24.125rem;
`