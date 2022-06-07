import styled from "styled-components";
import { colors } from "../../assets/styles/global";

export const InputFieldS = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  label {
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 0.838rem;
    color: ${colors.secondary};
    margin-bottom: 0.3rem;
  }

  p {
    height: 1rem;
    margin: 0;
    margin-top: 0.2rem;
    text-align: start;
    font-size: 0.6rem;
  }

  .input {
    border: 0.16rem solid ${colors.primary};
    border-radius: 0.3rem;

    height: 3rem;
    color: ${colors.secondary};

    &:focus {
      background-color: #fff;
    }

    &:hover {
      background-color: #fff;
    }
  }

  .input-right-element {
    width: 4.2rem;
    height: 100%;
    
    .button-password {
      width: 3.4rem;
      height: 80%;
      margin: 0 !important;
      
      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    label {
      font-size: 0.9rem;
      margin-bottom: 0.7rem;
    }

    .input {
      font-size: 0.9rem;
      height: 3rem;
      border-radius: 0.3rem;
      padding: 0.7rem 0.7rem;
    }

    .input-right-element {
      width: 5rem;
      height: 100%;
      
      .button-password {
        width: 5rem;
        height: 80%;
        margin: 0 !important;
        
        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
  
  @media (max-width: 425px) {
    label {
      font-size: 1.3rem;
      margin-bottom: 0.7rem;
    }
    
    .input {
      font-size: 1.3rem;
      height: 4.5rem;
      border-radius: 0.5rem;
      padding: 1rem 1rem;
    }
    
    .input-right-element {
      width: 6rem;
      height: 100%;
      
      .button-password {
        width: 5rem;
        height: 80%;
        margin: 0 !important;
        
        svg {
          width: 2.3rem;
          height: 2.3rem;
        }
      }
    }
  }
`;