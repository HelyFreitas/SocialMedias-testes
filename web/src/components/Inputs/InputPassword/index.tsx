import { Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";
import { InputsProps } from "../../../types/types";
import * as C from "./styles";

const InputPassword = (props: InputsProps) => {
  const [state, setState] = useState<boolean>(false);

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };

  return (
    <C.Container>
      <C.Input
        placeholder={props.placeholder}
        type={state ? "text" : "password"}
        required={true}
      />

      

      <C.I></C.I>

      <C.ShowPass>
        <C.BtnShowPass type="button" onClick={toggleBtn}>
          {state ? (
            <Eye size={20} color="#fff" className="icon" />
          ) : (
            <EyeSlash size={20} color="#fff" className="icon2" />
          )}
        </C.BtnShowPass>
      </C.ShowPass>
    </C.Container>
  );
};

export default InputPassword;
