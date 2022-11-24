import { ButtonProps } from "../../types/types"
import * as C from "./styles"

export const Button = (props : ButtonProps) => {
    return(
        <C.Container>
            <C.Button>{props.text}</C.Button>
        </C.Container>
    )
}