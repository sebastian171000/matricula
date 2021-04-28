import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
import DUMMY_ADMINISTRADORES from "../../shared/util/dummy_administradores";
import Card from "../../shared/components/UIElements/Card";

const UpdateAdministrador = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { adminId } = useParams();
  const [formState, inputHandler, setFormData] = useForm(
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
  const identifiedAdmin = DUMMY_ADMINISTRADORES.find(
    (admin) => adminId === admin._id
  );
  useEffect(() => {
    if (identifiedAdmin) {
      setFormData(
        {
          username: {
            value: identifiedAdmin.username,
            isValid: true,
          },
          password: {
            value: identifiedAdmin.password,
            isValid: true,
          },
          nombres: {
            value: identifiedAdmin.nombres,
            isValid: true,
          },
          apellidos: {
            value: identifiedAdmin.apellidos,
            isValid: true,
          },
          email: {
            value: identifiedAdmin.email,
            isValid: true,
          },
          tipoDoc: {
            value: identifiedAdmin.tipoDoc,
            isValid: true,
          },
          documento: {
            value: identifiedAdmin.documento,
            isValid: true,
          },

          telefono: {
            value: identifiedAdmin.telefono,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedAdmin]);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };
  if (!identifiedAdmin) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find admin!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
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
          initialValue={formState.inputs.username.value}
          initialValid={formState.inputs.username.isValid}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Contraseña"
          validators={[VALIDATOR_PASSWORD()]}
          errorText="Entre 8 y 16 caracteres, al menos 1 digito, minuscula y mayúscula."
          onInput={inputHandler}
          initialValue={formState.inputs.password.value}
          initialValid={formState.inputs.password.isValid}
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
          errorText="Entre 3 y 100 caracters no especiales."
          onInput={inputHandler}
          initialValue={formState.inputs.nombres.value}
          initialValid={formState.inputs.nombres.isValid}
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
          errorText="Entre 3 y 100 caracters no especiales."
          onInput={inputHandler}
          initialValue={formState.inputs.apellidos.value}
          initialValid={formState.inputs.apellidos.isValid}
        />
        <Input
          id="email"
          element="input"
          label="Correo"
          validators={[VALIDATOR_EMAIL(), VALIDATOR_MAXLENGTH(30)]}
          errorText="Tiene que tener el fomato de un correo y máximo 30 caracters"
          onInput={inputHandler}
          initialValue={formState.inputs.email.value}
          initialValid={formState.inputs.email.isValid}
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
          initialValue={formState.inputs.tipoDoc.value}
          initialValid={formState.inputs.tipoDoc.isValid}
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
          errorText="Entre 8 y 12 caracters no especiales."
          onInput={inputHandler}
          initialValue={formState.inputs.documento.value}
          initialValid={formState.inputs.documento.isValid}
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
          initialValue={formState.inputs.telefono.value}
          initialValid={formState.inputs.telefono.isValid}
        />

        <Button type="submit" disabled={!formState.isValid}>
          ACTUALIZAR ADMINISTRADOR
        </Button>
      </form>
    </section>
  );
};

export default UpdateAdministrador;
