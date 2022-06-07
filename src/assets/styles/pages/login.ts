import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Bg = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-image: url('images/hero-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BoxLogin = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;