import * as C from "./styyles";

import { FormLoginProps } from "../../types/types";

import { SignIn } from "phosphor-react";
import { InputField } from "../Inputs/InputField";
import InputPassword from "../Inputs/InputPassword";
import { Button } from "../Button";

export const FormLogin = (props: FormLoginProps) => {
  return (
    <C.Container>
      <C.Box>
        <C.Content>
          <C.Title>
            <SignIn size={32} weight="bold" />
            {props.title}
          </C.Title>

          <C.InputsContainer>
            <InputField placeholder="" />
            <InputPassword placeholder="" />
            <Button text="Entrar" />
          </C.InputsContainer>
          <C.Paragraph>
            Não tem uma conta?&nbsp;
            <C.Link href="#">cadastre-se</C.Link>
          </C.Paragraph>
        </C.Content>
      </C.Box>
    </C.Container>
  );
};
