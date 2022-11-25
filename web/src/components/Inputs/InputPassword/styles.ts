import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  align-items: center; */

  position: relative;
`;

export const Input = styled.input`
  position: relative;

  width: 100%;

  padding: 20px 10px 10px;

  background-color: transparent;

  border: none;
  outline: none;

  color: rgba(0, 0, 0);

  font-size: 1em;
  letter-spacing: 0.05em;

  :valid,
  :focus {
    color: blue;
    transform: translate(-34px);
    font-size: 0.75em;
  }
`;

export const TextInput = styled.span`
  position: absolute;
  left: 0;

  padding: 20px 10px 10px;

  font-size: 1em;
  font-family: sans-serif;

  color: #8f8f8f;

  pointer-events: none;

  letter-spacing: 0.08em;

  transition: all 0.5s;

  :valid,
  :focus {
    color: blue;
    transform: translate(-34px);
    font-size: 0.75em;
  }
`;

export const ShowPass = styled.div``;

export const I = styled.i``;

export const BtnShowPass = styled.button`
  background-color: transparent;

  outline: none;
  overflow: hidden;
  border: none;

  cursor: pointer;
`;
