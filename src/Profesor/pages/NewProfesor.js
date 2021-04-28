import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_NO_ESPECIAL_CHARACTER,
  VALIDATOR_NUMBER,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "../../shared/components/FormElements/PlaceForm.css";

const NewProfesor = () => {
  const [formState, inputHandler] = useForm(
    {
      nombres: {
        value: "",
        isValid: false,
      },
      apellidos: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      tipoDoc: {
        value: "",
        isValid: false,
      },
      documento: {
        value: "",
        isValid: false,
      },
      sexo: {
        value: "",
        isValid: false,
      },
      telefono: {
        value: "",
        isValid: false,
      },
      direccion: {
        value: "",
        isValid: false,
      },
      linkedin: {
        value: "",
        isValid: true,
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
          id="nombres"
          element="input"
          type="text"
          label="Nombres"
          validators={[
            VALIDATOR_MINLENGTH(3),
            VALIDATOR_MAXLENGTH(100),
            VALIDATOR_NO_ESPECIAL_CHARACTER(),
          ]}
          errorText="Entre 3 y 100 caracteres no especiales"
          onInput={inputHandler}
        />
        <Input
          id="apellidos"
          element="input"
          label="Apellidos"
          validators={[
            VALIDATOR_MINLENGTH(3),
            VALIDATOR_MAXLENGTH(100),
            VALIDATOR_NO_ESPECIAL_CHARACTER(),
          ]}
          errorText="Entre 3 y 100 caracteres no especiales"
          onInput={inputHandler}
        />
        <Input
          id="email"
          element="input"
          label="Correo"
          validators={[VALIDATOR_EMAIL(), VALIDATOR_MAXLENGTH(30)]}
          errorText="Tiene que tener el fomato de un correo y máximo 30 caracters"
          onInput={inputHandler}
        />
        <Input
          id="tipoDoc"
          element="select"
          options={[
            { value: "dni", text: "DNI" },
            { value: "pasaporte", text: "Pasaporte" },
            { value: "extranjeria", text: "Carnet de extranjería" },
          ]}
          label="Tipo de Documento"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Este campo es requerido"
          onInput={inputHandler}
        />
        <Input
          id="documento"
          element="input"
          type="text"
          label="Número de documento"
          validators={[
            VALIDATOR_MINLENGTH(8),
            VALIDATOR_MAXLENGTH(12),
            VALIDATOR_NUMBER(),
          ]}
          errorText="Entre 8 y 12 caracteres no especiales."
          onInput={inputHandler}
        />
        <Input
          id="sexo"
          element="select"
          options={[
            { value: "M", text: "M" },
            { value: "F", text: "F" },
          ]}
          label="Sexo"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Este campo es requerido"
          onInput={inputHandler}
        />
        <Input
          id="telefono"
          element="input"
          type="text"
          label="Teléfono"
          validators={[
            VALIDATOR_NUMBER(),
            VALIDATOR_MINLENGTH(9),
            VALIDATOR_MAXLENGTH(13),
          ]}
          errorText="Entre 9 y 13 digitos."
          onInput={inputHandler}
        />
        <Input
          id="direccion"
          element="input"
          type="text"
          label="Dirección"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(100)]}
          errorText="Entre 0 y 100 caracteres."
          onInput={inputHandler}
        />

        <Input
          id="linkedin"
          element="input"
          type="text"
          label="Perfil de linkedin"
          validators={[]}
          errorText=""
          onInput={inputHandler}
          initialValid={true}
        />

        <Button type="submit" disabled={!formState.isValid}>
          AÑADIR PROFESOR
        </Button>
      </form>
    </section>
  );
};

export default NewProfesor;
