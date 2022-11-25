import { FormLoginProps } from "../../types/types";
import { Button } from "../Button";

import "./styles.css";

export const FormSignup = (props: FormLoginProps) => {
  return (
    <div className="container-signup">
      <div className="box-signup">
        <form className="form-signup">
          <h2>{props.title}</h2>
          <div className="input-box-signup">
            <input type="text" required />
            <span>E-mail</span>
            <i></i>
          </div>
          <div className="input-box-signup">
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>
          <div className="input-box-signup">
            <input type="password" required />
            <span>Confirm   Password</span>
            <i></i>
          </div>
          <div className="links-signup">
            <a href="/forgot-password">Forgot password</a>
            <a href={props.link}>{props.titlelink}</a>
          </div>
          <div className="button-container-signup">
            <Button text="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
