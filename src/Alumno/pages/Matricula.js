import React, { useState } from "react";

import { useParams } from "react-router-dom";

import DUMMY_ALUMNOS from "../../shared/util/dummy_alumnos";
import MatriculaCursos from "../components/MatriculaCursos";
import MatriculaHorarioFinal from "../components/MatriculaHorarioFinal";
import MatriculaSecciones from "../components/MatriculaSecciones";
import Button from "../../shared/components/FormElements/Button";
import classes from "./Matricula.module.css";
const Matricula = () => {
  const { alumnoId } = useParams();
  const loadedAlumno = DUMMY_ALUMNOS.find((alumno) => alumnoId === alumno._id);

  const [verSeccionData, setVerSeccionData] = useState({});
  //se va a inicializar con el horaio actual que tiene el alumno
  const [horario, setHorario] = useState([]);
  const saveVerSeccionData = (enteredData) => {
    const data = { ...enteredData };
    setVerSeccionData(data);
  };
  const saveAddSeccionData = (enteredData) => {
    const data = { ...enteredData };
    //Tenemos que restar -1 porque estamos verificando antes que se añada
    const LIMIT = 5;
    if (horario.length > LIMIT - 1) {
      alert(`Solo puedes matricular en ${LIMIT} cursos como máximo`);
      return;
    }
    if (horario.find((seccion) => data.curso === seccion.curso)) {
      alert("Ya agregaste este curso");
      return;
    }
    setHorario((prevHorario) => {
      return [...prevHorario, data];
    });
  };
  const saveRemoveSeccionData = (seccionId) => {
    setHorario((prevHorario) => {
      const prevHorarioCopy = [...prevHorario];
      let newHorario = [];
      prevHorarioCopy.forEach((seccion) => {
        const seccionCopy = { ...seccion };
        if (seccionCopy._id !== seccionId) newHorario.push(seccionCopy);
      });
      return newHorario;
    });
  };
  return (
    <section className="main-content">
      <div className={classes.FirstRow}>
        <div className={classes.Cursos}>
          <h3>Cursos Disponibles</h3>
          <MatriculaCursos
            onSaveVerSeccionData={saveVerSeccionData}
            alumno={loadedAlumno}
          />
        </div>
        <div className={classes.Horario}>
          <h3>Posible Horario</h3>
          <MatriculaHorarioFinal
            onSaveRemoveSeccionData={saveRemoveSeccionData}
            horario={horario}
          />
          <Button>Guardar</Button>
        </div>
      </div>
      <div>
        <h3>Secciones</h3>
        <MatriculaSecciones
          onSaveAddSeccionData={saveAddSeccionData}
          curso={verSeccionData}
        />
      </div>
    </section>
  );
};

export default Matricula;
