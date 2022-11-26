import "./styles.css";

import { Button } from "../Button";
import { FormLoginProps } from "../../types/types";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Form = (props: FormLoginProps) => {
  const { setAuth } = useContext(AuthContext);
  const [form, setForm] = useState<any>();

  const navigate = useNavigate();

  function handleChange(event: any) {
    console.log("event 1", event.target.name);
    console.log("event 2", event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("form", form);
  }

  function handleClick(event: any) {
    event?.preventDefault();
    if (form.email == "dev@gmail.com" && form.pass == "1234") {
      setAuth(true);
      navigate("/home");
      window.alert("logado com sucesso");
    } else {
      window.alert("dados inseridos incorretos, tente novamente!");
    }
  }

  return (
    <div className="container">
      <div className="box">
        <form className="form" onSubmit={handleClick}>
          <h2>{props.title}</h2>
          <div className="input-box">
            <input name="email" type="text" onChange={handleChange} required />
            <span>E-mail</span>
            <i></i>
          </div>
          <div className="input-box">
            <input
              name="pass"
              type="password"
              onChange={handleChange}
              required
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="/forgot-password">Forgot password</a>
            <a href={props.link}>{props.titlelink}</a>
          </div>
          <div className="button-container">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
