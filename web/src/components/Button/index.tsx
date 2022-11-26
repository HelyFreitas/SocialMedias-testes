import React from "react"
import { ButtonProps } from "../../types/types"
import * as C from "./styles"

export const Button = ({ children } : React.ReactNode | any) => {
    return(
        <C.Container>
            <C.Button>{children}</C.Button>
        </C.Container>
    )
}