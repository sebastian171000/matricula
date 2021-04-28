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
  VALIDATOR_PASSWORD,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "../../shared/components/FormElements/PlaceForm.css";

const NewAdministrador = () => {
  const [formState, inputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
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
      telefono: {
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
          id="username"
          element="input"
          type="text"
          label="Username"
          validators={[
            VALIDATOR_MINLENGTH(5),
            VALIDATOR_MAXLENGTH(9),
            VALIDATOR_NO_ESPECIAL_CHARACTER(),
          ]}
          errorText="Entre 5 a 9 caracteres no especiales."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Contraseña"
          validators={[VALIDATOR_PASSWORD()]}
          errorText="Entre 8 y 16 caracteres, al menos 1 digito, minuscula y mayúscula."
          onInput={inputHandler}
        />
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

        <Button type="submit" disabled={!formState.isValid}>
          AÑADIR ADMIN
        </Button>
      </form>
    </section>
  );
};

export default NewAdministrador;
