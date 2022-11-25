import * as C from "./styles";

import { FormSignup } from "../../components/FormSignup";

export const Signup = () => {
  return (
    <C.Container>
      {/* <Form title="Signup" link="/" titlelink="Signin" /> */}
      <FormSignup title="Signup" link="/" titlelink="Signin" />
    </C.Container>
  );
};
