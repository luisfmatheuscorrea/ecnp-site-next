import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const SliderDiv = styled.div`
  position: relative;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;

  .embla__viewport {
    overflow: visible;
    width: 40rem;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -10px;
  }

  @media (max-width: 436px) {
    width: 100%;

    .embla__viewport {
      width: 35rem;
      margin-left: -1.4rem;
    }
  }
`;

interface EmblaDivProps {
  selected: boolean,
}

export const EmblaDiv = styled.div<EmblaDivProps>`
  position: relative;
  min-width: 80%;
  padding-left: 10px;

  .embla__slide__div {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    z-index: 1000;
    background-color: #FFFFFF;
    border-radius: 0.625rem;
    padding: 1.2rem 1.2rem;
    /* width: auto; */
    /* min-height: 100%; */
    /* min-width: 100%; */
    word-wrap: break-word;
    text-overflow: ellipsis;
    width: ${props => props.selected ? '40.625rem' : '12.5rem'};
    max-height: ${props => props.selected ? 'none' : '14.25rem'};
    min-height: ${props => props.selected ? '20rem' : '14.25rem'};
    box-shadow: 0px 41px 96px rgba(89, 93, 129, 0.12), 0px 11.5672px 35.0416px rgba(89, 93, 129, 0.0791138), 0px 4.446px 17.012px rgba(89, 93, 129, 0.0603315), 0px 1.47211px 8.33962px rgba(89, 93, 129, 0.0448601), 0px 0.285217px 3.2975px rgba(89, 93, 129, 0.0272423);
    /* max-width: none; */
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.selected ? 'flex-start' : 'center'};
    
    transition: width 1s;
    transition: height 400ms;

    .text-box {
      width: 100%;
      word-wrap: break-word;
      text-overflow: ellipsis;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: ${props => props.selected ? 'flex-start' : 'center'};
    }

    .circle-initials {
      position: ${props => props.selected ? 'inherit' : 'absolute'};
      top: ${props => props.selected ? '0' : '-1.438rem'};
      left: ${props => props.selected ? '0' : '4.75rem'};
      background-color: ${colors.primary};
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: ${props => props.selected ? '1.6rem' : '1.25rem'};
      margin-right: ${props => props.selected ? '0.75rem' : '0'};
      min-width: ${props => props.selected ? '4.063rem' : '2.875rem'};
      min-height: ${props => props.selected ? '4.063rem' : '2.875rem'};
      width: ${props => props.selected ? '4.063rem' : '2.875rem'};
      height: ${props => props.selected ? '4.063rem' : '2.875rem'};
    }

    p {
      font-weight: 400;
      overflow: hidden;
      word-wrap: normal;
      text-overflow: ellipsis;
      max-height: ${props => props.selected ? 'initial' : '60%'};
      margin-top: ${props => props.selected ? '1rem' : '0.688rem'};
      font-size: ${props => props.selected ? '1rem' : '0.688rem'};
      color: ${colors.secondary};
      text-align: ${props => props.selected ? 'left' : 'center'};
      line-height: ${props => props.selected ? '1.2rem' : '0.7rem'};
    }
  }

  .embla__slide__inner {
    position: relative;
    overflow: visible;
    height: 20rem;
  }

  @media (max-width: 436px) {
    .embla__slide__div {
      width: 27rem;
      min-height: ${props => props.selected ? '20rem' : '14.25rem'};
      height: ${props => props.selected ? 'fit-content' : '14.25rem'};
      justify-content: flex-start;
      
      .text-box {
        justify-content: flex-start;
      }

      .circle-initials {
        position: inherit;
        top: 0;
        left: 0;
      }
    }
  }
`;
