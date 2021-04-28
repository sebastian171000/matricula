import React, { useContext } from "react";
import { useForm } from "../../../shared/hooks/form-hook";

import TopNavigation from "../../../shared/components/Navigation/TopNavigation";
import Button from "../../../shared/components/FormElements/Button";
import Input from "../../../shared/components/FormElements/Input";
import { AuthContext } from "../../../shared/context/auth-context";
import classes from "./Auth.module.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: true,
      },
      password: {
        value: "",
        isValid: true,
      },
    },
    true
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
    auth.login();
  };
  return (
    <>
      <TopNavigation
        className={classes.TopNavigation}
        customRightItem={
          <div className={classes.Recuperar}>
            <p>Olvidaste tu contraseña?</p>
            <a href="/">Recuperar</a>
          </div>
        }
        hideRightItem
      />
      <section className={classes.Auth}>
        <form onSubmit={placeSubmitHandler}>
          <h2>Bienvenido otra vez!</h2>

          <Input
            className={classes.Input}
            id="username"
            element="input"
            type="text"
            label="Usuario"
            onInput={inputHandler}
            validators={[]}
          />
          <Input
            className={classes.Input}
            id="password"
            element="input"
            type="password"
            label="Contraseña"
            onInput={inputHandler}
            validators={[]}
          />

          <Button className={"custom"} type="submit">
            Entrar a Matricula Online
          </Button>
        </form>
      </section>
    </>
  );
};

export default Auth;
