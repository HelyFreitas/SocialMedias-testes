import styled from "styled-components";

import Back from "../../assets/backgroundLogin.jpg";

export const Container = styled.div`
  background-image: url(${Back});
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;
