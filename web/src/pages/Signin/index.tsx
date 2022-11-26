import * as C from "./styles";

import { Form } from "../../components/Form";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

export const Signin = () => {
  return (
    <C.Container>
      <Form title="Signin" link="/signup" titlelink="Signup" />
    </C.Container>
  );
};
