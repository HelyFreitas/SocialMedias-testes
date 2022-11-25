import "./styles.css";

import { Button } from "../Button";
import { FormLoginProps } from "../../types/types";

export const Form = (props : FormLoginProps) => {
  return (
    <div className="container">
      <div className="box">
        <form className="form">
          <h2>{props.title}</h2>
          <div className="input-box">
            <input type="text" required />
            <span>E-mail</span>
            <i></i>
          </div>
          <div className="input-box">
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="/forgot-password">Forgot password</a>
            <a href={props.link}>{props.titlelink}</a>
          </div>
          <div className="button-container">
            <Button text="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
