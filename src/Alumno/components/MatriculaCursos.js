import React from "react";
import Card from "../../shared/components/UIElements/Card";

import "./MatriculaCursos.css";
import DUMMY_CURSOS from "../../shared/util/dummy_cursos";
import MatriculaCursoRegistro from "./MatriculaCursoRegistro";

const MatriculaCursos = (props) => {
  const loadedCursos = DUMMY_CURSOS.filter(
    (curso) => curso.ciclo === props.alumno.ciclo
  );

  return (
    <Card>
      <ul className="header--curso">
        <li>Código del Curso</li>
        <li>Nombre del Curso</li>
        <li>No. Créditos</li>
        <li>Visualizar Horarios</li>
      </ul>
      {loadedCursos.map((curso) => (
        <MatriculaCursoRegistro
          onSaveVerSeccionData={props.onSaveVerSeccionData}
          key={curso._id}
          curso={curso}
        />
      ))}
    </Card>
  );
};

export default MatriculaCursos;
