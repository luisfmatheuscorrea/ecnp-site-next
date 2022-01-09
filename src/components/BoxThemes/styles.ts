import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface BoxThemesProps {
  image: string,
}

export const BoxThemesS = styled.div<BoxThemesProps>`
    width: 21.25rem;
    height: 19.875rem;
    
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 1.25rem;

    border-radius: 0.625rem;
    box-shadow: 0px 41px 96px rgba(89, 93, 129, 0.12), 0px 11.5672px 35.0416px rgba(89, 93, 129, 0.0791138), 0px 4.446px 17.012px rgba(89, 93, 129, 0.0603315), 0px 1.47211px 8.33962px rgba(89, 93, 129, 0.0448601), 0px 0.285217px 3.2975px rgba(89, 93, 129, 0.0272423);

    .circle-icon {
      width: 4.438rem;
      height: 4.438rem;
      position: absolute;
      border-radius: 1000px;
      padding: 0.9rem;
      top: 0;

      margin-top: -2.219rem;

      background-color: ${colors.primary};

      display: flex;
      align-items: center;
      justify-content: center;
    }

    p:last-child {
      margin-top: 1.375rem;
    }
`;

export const Bg = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    mix-blend-mode: overlay;
`

export const Container = styled.div`
    position: relative;
    height: 24.125rem;
`