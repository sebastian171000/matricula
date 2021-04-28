import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_NO_ESPECIAL_CHARACTER,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "../../shared/components/FormElements/PlaceForm.css";

const NewSeccion = () => {
  const [formState, inputHandler] = useForm(
    {
      codigo: {
        value: "",
        isValid: false,
      },
      modalidad: {
        value: "",
        isValid: false,
      },
      dia: {
        value: "",
        isValid: false,
      },
      hora: {
        value: "",
        isValid: false,
      },

      profesor: {
        value: "",
        isValid: false,
      },
      curso: {
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
          id="modalidad"
          element="select"
          options={[
            { value: "presencial", text: "Presencial" },
            { value: "virtual", text: "Virtual" },
          ]}
          label="Modalidad"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Este campo es requerido"
          onInput={inputHandler}
        />
        <Input
          id="dia"
          element="select"
          options={[
            { value: "lunes", text: "Lunes" },
            { value: "martes", text: "Martes" },
            { value: "miercoles", text: "Miercoles" },
            { value: "jueves", text: "Jueves" },
            { value: "viernes", text: "Viernes" },
            { value: "sabado", text: "Sabado" },
          ]}
          label="Día"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Este campo es requerido"
          onInput={inputHandler}
        />
        <Input
          id="hora"
          element="select"
          options={[
            { value: "7-9a.m", text: "7-9a.m" },
            { value: "9-11.am", text: "9-11.am" },
            { value: "11-1pm", text: "11-1pm" },
            { value: "1-2pm", text: "1-2pm" },
            { value: "2-4pm", text: "2-4pm" },
            { value: "4-6pm", text: "4-6pm" },
          ]}
          label="Hora"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Este campo es requerido"
          onInput={inputHandler}
        />

        <Input
          id="profesor"
          element="select"
          options={[
            { value: "p1", text: "Profesor 1" },
            { value: "p2", text: "Profesor 2" },
            { value: "p3", text: "Profesor 3" },
          ]}
          label="Profesor"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Este campo es requerido"
          onInput={inputHandler}
        />
        <Input
          id="curso"
          element="select"
          options={[
            { value: "c1", text: "Curso 1" },
            { value: "c2", text: "Curso 2" },
            { value: "c3", text: "Curso 3" },
          ]}
          label="Curso"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Este campo es requerido"
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          AÑADIR SECCIÓN
        </Button>
      </form>
    </section>
  );
};

export default NewSeccion;
