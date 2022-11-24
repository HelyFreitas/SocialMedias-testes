import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const Input = styled.input`
  width: 300px;

  background-color: transparent;
  border: none;
  outline: none;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.03rem;

  margin-bottom: 30px;

  ::placeholder {
    color: #d14eef;
  }
`;

export const ShowPass = styled.div``;

export const BtnShowPass = styled.button`
  background-color: transparent;

  outline: none;
  overflow: hidden;
  border: none;

  cursor: pointer;
`;
