import * as C from "./styles";

import { Form } from "../../components/Form";

export const Signin = () => {
  return (
    <C.Container>
      <Form title="Signin" link="/signup" titlelink="Signup" />
    </C.Container>
  );
};
