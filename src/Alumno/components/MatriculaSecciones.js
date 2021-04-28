import React from "react";
import Card from "../../shared/components/UIElements/Card";

// import classes from "./MatriculaSecciones.module.css";

import DUMMY_SECCIONES from "../../shared/util/dummy_secciones";
import MatriculaSeccionRegistro from "./MatriculaSeccionRegistro";

const MatriculaSecciones = (props) => {
  const loadedSecciones = DUMMY_SECCIONES.filter(
    (seccion) => seccion.curso === props.curso._id
  );
  return (
    <Card>
      <ul className="header--seccion">
        <li>Codigo</li>
        <li>Profesor</li>
        <li>Dias</li>
        <li>Hora</li>
        <li>Vacantes</li>
        <li>Seleccionar</li>
      </ul>
      {loadedSecciones.map((seccion) => (
        <MatriculaSeccionRegistro
          onSaveAddSeccionData={props.onSaveAddSeccionData}
          key={seccion._id}
          seccion={seccion}
        />
      ))}
    </Card>
  );
};

export default MatriculaSecciones;
