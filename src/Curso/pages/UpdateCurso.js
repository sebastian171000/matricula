import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MIN,
  VALIDATOR_MAX,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_NO_ESPECIAL_CHARACTER,
  VALIDATOR_NUMBER,
} from "../../shared/util/validators";
import "../../shared/components/FormElements/PlaceForm.css";
import DUMMY_CURSOS from "../../shared/util/dummy_cursos";
import Card from "../../shared/components/UIElements/Card";

const UpdateProfesor = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { cursoId } = useParams();
  const [formState, inputHandler, setFormData] = useForm(
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
  const identifiedCurso = DUMMY_CURSOS.find((curso) => cursoId === curso._id);
  useEffect(() => {
    if (identifiedCurso) {
      setFormData(
        {
          codigo: {
            value: identifiedCurso.codigo,
            isValid: true,
          },
          ciclo: {
            value: identifiedCurso.ciclo,
            isValid: true,
          },
          nombre: {
            value: identifiedCurso.nombre,
            isValid: true,
          },
          creditos: {
            value: identifiedCurso.creditos,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedCurso]);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };
  if (!identifiedCurso) {
    return (
      <div className="center">
        <Card>
          <h2>No pudimos identificar el Curso!</h2>
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
          initialValue={formState.inputs.codigo.value}
          initialValid={formState.inputs.codigo.isValid}
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

        <Input
          id="nombre"
          element="input"
          label="Nombre"
          validators={[VALIDATOR_MINLENGTH(5), VALIDATOR_MAXLENGTH(100)]}
          errorText="Tiene que tener 5 a 100 caracteres"
          onInput={inputHandler}
          initialValue={formState.inputs.nombre.value}
          initialValid={formState.inputs.nombre.isValid}
        />
        <Input
          id="creditos"
          element="input"
          type="number"
          label="Creditos"
          validators={[VALIDATOR_NUMBER(), VALIDATOR_MIN(3), VALIDATOR_MAX(6)]}
          errorText="Sólo números del 3 al 6"
          onInput={inputHandler}
          initialValue={formState.inputs.creditos.value}
          initialValid={formState.inputs.creditos.isValid}
        />

        <Button type="submit" disabled={!formState.isValid}>
          AÑADIR CURSO
        </Button>
      </form>
    </section>
  );
};

export default UpdateProfesor;
