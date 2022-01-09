import styled from "styled-components";
import { colors } from "../../assets/styles/global";

// export const SliderDiv = styled.div`
//   position: relative;
//   /* padding: 0 1.2rem; */
//   width: 100%;
//   margin-left: auto;
//   margin-right: auto;

//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;

//   .embla__viewport {
//     overflow: hidden;
//     /* overflow: visible; */
//     width: 40.625rem;
//     /* width: 30%; */
//   }

//   .embla__container {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 21.875rem;
//     user-select: none;
//     -webkit-touch-callout: none;
//     -khtml-user-select: none;
//     -webkit-tap-highlight-color: transparent;
//   }

//   @media (max-width: 436px) {
//     max-width: 38rem;
//     padding: 20px;

//     .embla__viewport {
//       overflow: visible;
//       width: 30rem;
//       /* width: 30%; */
//     }

//     .embla__container {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       height: 21.875rem;
//       user-select: none;
//       -webkit-touch-callout: none;
//       -khtml-user-select: none;
//       -webkit-tap-highlight-color: transparent;
//     }
//   }
// `

// interface EmblaSlideProps {
//   selected: boolean,
// }

// export const EmblaSlide = styled.div<EmblaSlideProps>`
//   position: relative;
//   padding-left: 0.625rem;
//   min-width: ${props => props.selected ? '40.625rem' : '12.5rem'};
//   width: ${props => props.selected ? '40.625rem' : '12.5rem'};
//   padding: 0 0 4rem 0;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: flex-start;
  
//   .text-box {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//     width: 83%;
//     margin-left: 1.5rem;
//   }

//   img {
//     width: 7.563rem;
//     height: 7.563rem;
//     border-radius: 50%;
//   }
  
//   .embla__slide__inner {
//     position: relative;
//     overflow: hidden;
//     border-radius: 0.625rem;
//     margin: 0 2rem;
//     width: ${props => props.selected ? '40.625rem' : '12.5rem'};
//     height: ${props => props.selected ? '20rem' : '14.25rem'};
//     padding: 0 1rem;
//     box-shadow: 0px 41px 96px rgba(89, 93, 129, 0.12), 0px 11.5672px 35.0416px rgba(89, 93, 129, 0.0791138), 0px 4.446px 17.012px rgba(89, 93, 129, 0.0603315), 0px 1.47211px 8.33962px rgba(89, 93, 129, 0.0448601), 0px 0.285217px 3.2975px rgba(89, 93, 129, 0.0272423);
    
//     transition: 500ms;
//   }

//   .embla__viewport.is-draggable {
//     cursor: move;
//     cursor: grab;
//   }

//   .embla__viewport.is-dragging {
//     cursor: grabbing;
//   }

//   .embla__slide__div {
//     display: flex;
//     flex-direction: column;
//     justify-content: ${props => props.selected ? 'flex-start' : 'center'};
//     align-items: ${props => props.selected ? 'flex-start' : 'center'};

//     p {
//       font-weight: 400;
//       font-size: ${props => props.selected ? '1rem' : '0.688rem'};
//       color: ${colors.secondary};
//       line-height: ${props => props.selected ? '1.2rem' : '0.813rem'};
//       text-align: left;
//     }
//   }

//   @media (max-width: 436px) {
//     position: relative;
//     padding-left: 0.625rem;
//     min-width: 30rem;
//     padding: 0 0 4rem 0;

//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: flex-start;
    
//     .text-box {
//       display: flex;
//       flex-direction: column;
//       justify-content: flex-start;
//       align-items: flex-start;
//       width: 83%;
//       margin-left: 1.5rem;
//     }

//     img {
//       width: 7.563rem;
//       height: 7.563rem;
//       border-radius: 50%;
//     }

//     .embla__slide__inner {
//       position: relative;
//       overflow: hidden;
//       border-radius: 0.625rem;
//       margin: 0;
//       width: 30rem;
//       height: 20rem;
//       padding: 0;
//       box-shadow: 0px 41px 96px rgba(89, 93, 129, 0.12), 0px 11.5672px 35.0416px rgba(89, 93, 129, 0.0791138), 0px 4.446px 17.012px rgba(89, 93, 129, 0.0603315), 0px 1.47211px 8.33962px rgba(89, 93, 129, 0.0448601), 0px 0.285217px 3.2975px rgba(89, 93, 129, 0.0272423);
      
//       transition: 500ms;
//     }

//     .embla__viewport.is-draggable {
//       cursor: move;
//       cursor: grab;
//     }

//     .embla__viewport.is-dragging {
//       cursor: grabbing;
//     }

//     .embla__slide__div {
//       display: flex;
//       flex-direction: column;
//       justify-content: flex-start;
//       align-items: flex-start;

//       p {
//         font-weight: 400;
//         font-size: 1rem;
//         color: ${colors.secondary};
//         line-height: 1.2rem;
//         text-align: left;
//       }
//     }
//   }
// `;

export const SliderDiv = styled.div`
  /* .embla { */
    position: relative;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  /* } */

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
    width: ${props => props.selected ? '40.625rem' : '12.5rem'};
    height: ${props => props.selected ? '20rem' : '14.25rem'};
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
