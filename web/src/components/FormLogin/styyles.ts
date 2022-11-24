import styled from "styled-components";

import Back from "../../assets/backgroundLogin.jpg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background-image: url(${Back});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
    width: 400px;
    height: 400px;

    border-radius: 10px;

    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;

    color: white;
`;

export const InputsContainer = styled.section``;

export const Paragraph = styled.p``;

export const Link = styled.a``;
