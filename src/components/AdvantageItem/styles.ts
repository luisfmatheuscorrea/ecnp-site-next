import styled from "styled-components";
import { colors } from "../../assets/styles/global";

interface AdvantageItemProps {
  index: number,
}

export const AdvantageItemS = styled.div<AdvantageItemProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 2.063rem;

    .circle-icon {
      min-width: 3.375rem;
      min-height: 3.375rem;
      width: 3.375rem;
      height: 3.375rem;
      border-radius: 1000px;
      padding: ${props => props.index === 0 ? '0.65rem 0.4rem 0.65rem 0.65rem' : props.index === 1 ? '0.65rem 0.55rem 0.65rem 0.65rem' : props.index === 2 ? '0.65rem 0.55rem 0.65rem 0.65rem' : props.index === 3 ? '0.65rem 0.1rem 0.65rem 0.65rem' : '0.65rem 0.85rem'};

      margin-right: 1.125rem;

      background-color: ${colors.white};
      box-shadow: 0px 22px 199px rgba(89, 93, 129, 0.12), 0px 9.19107px 93.3539px rgba(89, 93, 129, 0.0864317), 0px 4.91399px 65.1923px rgba(89, 93, 129, 0.0719964), 0px 2.75474px 47.738px rgba(89, 93, 129, 0.0606925), 0px 1.46302px 32.2105px rgba(89, 93, 129, 0.0492338), 0px 0.608796px 16.5111px rgba(89, 93, 129, 0.0342772);

      display: flex;
      align-items: center;
      justify-content: center;
    }

    h3 {
      margin-bottom: 2.063rem;
    }
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
`