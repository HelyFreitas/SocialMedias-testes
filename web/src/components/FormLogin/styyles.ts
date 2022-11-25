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

export const Box = styled.div`
  width: 400px;
  height: 400px;

  position: relative;

  border-radius: 10px;

  background-color: rgba(0, 0, 0);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  ::before {
    content: "";

    position: absolute;
    top: -50%;
    left: -50%;

    width: 400px;
    height: 400px;

    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);

    transform-origin: right bottom;
    animation: animate 6s linear infinite;
  }

  ::after {
    content: "";

    position: absolute;
    top: -50%;
    left: -50%;

    width: 400px;
    height: 400px;

    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);

    transform-origin: right bottom;
    animation: animate 6s linear infinite;
    animation-delay: -3s;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Content = styled.form`
  position: absolute;
  inset: 3px;

  background-color: rgba(0, 0, 0);

  z-index: 10;

  border-radius: 10px;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #e68ed1;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 35px;
  `;

export const InputsContainer = styled.section`
  margin-top: 30px;

  width: 100%;
`;

export const Paragraph = styled.p``;

export const Link = styled.a`
  text-decoration: none;

  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;

  font-family: "Graphik";
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.35;

  color: #e68ed1;

  background: linear-gradient(#e68ed1, #e68ed1) no-repeat left 1.1em;
  transition: background 0.3s ease;
  background-size: 0% 3px;

  :hover {
    background: linear-gradient(#e68ed1, #e68ed1) no-repeat left 1.1em;
    transition: all 0.3s ease;
    background-size: 100% 2px;
  }
`;
