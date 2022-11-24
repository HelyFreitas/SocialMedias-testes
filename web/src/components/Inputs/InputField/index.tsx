import { InputsProps } from "../../../types/types";
import * as C from "./styles";

export const InputField = (props: InputsProps) => {
  return <C.Input placeholder={props.placeholder} />;
};
