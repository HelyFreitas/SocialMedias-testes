import styled from "styled-components";

import Back from "../../assets/backgroundsignup.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${Back});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;
