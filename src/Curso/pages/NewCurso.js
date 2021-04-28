import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MAX,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
  VALIDATOR_NO_ESPECIAL_CHARACTER,
  VALIDATOR_NUMBER,
} from "../../shared/util/validators";
import "../../shared/components/FormElements/PlaceForm.css";

const NewCurso = () => {
  const [formState, inputHandler] = useForm(
    {
      codigo: {
        value: "",
        isValid: false,
      },
      ciclo: {
        value: "",
        isValid: false,
      },
      nombre: {
        value: "",
        isValid: false,
      },
      creditos: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };
  return (
    <section className="main-content form">
      <form className="place-form" onSubmit={placeSubmitHandler}>
        <Input
          id="codigo"
          element="input"
          type="text"
          label="Codigo"
          validators={[
            VALIDATOR_MINLENGTH(5),
            VALIDATOR_MAXLENGTH(5),
            VALIDATOR_NO_ESPECIAL_CHARACTER(),
          ]}
          errorText="Debe de ser de 5 caracteres no especiales."
          onInput={inputHandler}
        />
        <Input
          id="ciclo"
          element="input"
          type="number"
          label="Ciclo Académico"
          validators={[VALIDATOR_NUMBER(), VALIDATOR_MIN(1), VALIDATOR_MAX(14)]}
          errorText="Sólo números del 1 al 14."
          onInput={inputHandler}
        />

        <Input
          id="nombre"
          element="input"
          label="Nombre"
          validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(100)]}
          errorText="Tiene que tener 5 a 100 caracteres"
          onInput={inputHandler}
        />
        <Input
          id="creditos"
          element="input"
          type="number"
          label="Creditos"
          validators={[VALIDATOR_NUMBER(), VALIDATOR_MIN(3), VALIDATOR_MAX(6)]}
          errorText="Sólo números del 3 al 6"
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          AÑADIR CURSO
        </Button>
      </form>
    </section>
  );
};

export default NewCurso;
