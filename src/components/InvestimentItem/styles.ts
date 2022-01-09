import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const InvestimentItemS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 19.75rem;

  .circle-icon {
    min-width: 2rem;
    min-height: 2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    padding: 0.375rem;

    margin-right: 0.75rem;

    background-color: ${colors.white};
    box-shadow: 0px 22px 199px rgba(89, 93, 129, 0.12), 0px 9.19107px 93.3539px rgba(89, 93, 129, 0.0864317), 0px 4.91399px 65.1923px rgba(89, 93, 129, 0.0719964), 0px 2.75474px 47.738px rgba(89, 93, 129, 0.0606925), 0px 1.46302px 32.2105px rgba(89, 93, 129, 0.0492338), 0px 0.608796px 16.5111px rgba(89, 93, 129, 0.0342772);
    overflow: visible;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin-top: 0;
    padding: 0;
  }

  p:last-child {
    margin-top: 0;
    padding: 0;
  }

  @media (max-width: 436px) {
    width: 15rem;

    .circle-icon {
      box-shadow: 0px 79px 199px rgba(89, 93, 129, 0.29), 0px 33.0043px 83.1374px rgba(89, 93, 129, 0.208468), 0px 17.6457px 44.4493px rgba(89, 93, 129, 0.172871), 0px 9.89203px 24.9179px rgba(89, 93, 129, 0.145), 0px 5.25358px 13.2337px rgba(89, 93, 129, 0.117129), 0px 2.18613px 5.50684px rgba(89, 93, 129, 0.0815322);
    }
  }
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
`