import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAX,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
  VALIDATOR_NO_ESPECIAL_CHARACTER,
  VALIDATOR_NUMBER,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "../../shared/components/FormElements/PlaceForm.css";
import DUMMY_ALUMNOS from "../../shared/util/dummy_alumnos";
import Card from "../../shared/components/UIElements/Card";

const UpdateAlumnos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { alumnoId } = useParams();
  const [formState, inputHandler, setFormData] = useForm(
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
      ciclo: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const identifiedAlumno = DUMMY_ALUMNOS.find(
    (alumno) => alumnoId === alumno._id
  );
  useEffect(() => {
    if (identifiedAlumno) {
      setFormData(
        {
          nombres: {
            value: identifiedAlumno.nombres,
            isValid: true,
          },
          apellidos: {
            value: identifiedAlumno.apellidos,
            isValid: true,
          },
          email: {
            value: identifiedAlumno.email,
            isValid: true,
          },
          tipoDoc: {
            value: identifiedAlumno.tipoDoc,
            isValid: true,
          },
          documento: {
            value: identifiedAlumno.documento,
            isValid: true,
          },
          sexo: {
            value: identifiedAlumno.sexo,
            isValid: true,
          },
          telefono: {
            value: identifiedAlumno.telefono,
            isValid: true,
          },
          direccion: {
            value: identifiedAlumno.direccion,
            isValid: true,
          },
          ciclo: {
            value: identifiedAlumno.ciclo,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedAlumno]);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };
  if (!identifiedAlumno) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find alumno!</h2>
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
          initialValue={formState.inputs.sexo.value}
          initialValid={formState.inputs.sexo.isValid}
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
        <Input
          id="direccion"
          element="input"
          type="text"
          label="Dirección"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(100)]}
          errorText="Entre 0 y 100 caracteres."
          onInput={inputHandler}
          initialValue={formState.inputs.direccion.value}
          initialValid={formState.inputs.direccion.isValid}
        />

        <Input
          id="ciclo"
          element="input"
          type="number"
          label="Ciclo Académico"
          validators={[VALIDATOR_NUMBER(), VALIDATOR_MIN(1), VALIDATOR_MAX(14)]}
          errorText="Sólo números del 1 al 14."
          onInput={inputHandler}
          initialValue={formState.inputs.ciclo.value}
          initialValid={formState.inputs.ciclo.isValid}
        />

        <Button type="submit" disabled={!formState.isValid}>
          ACTUALIZAR ALUMNO
        </Button>
      </form>
    </section>
  );
};

export default UpdateAlumnos;
