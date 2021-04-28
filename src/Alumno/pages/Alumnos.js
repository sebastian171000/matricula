import React, { useState } from "react";

import FirstRow from "../../shared/components/PageRows/FirstRow";
import SecondRow from "../../shared/components/PageRows/SecondRow";
// import AlumnoTable from "../components/AlumnoTable";
import Table from "../../shared/components/Table/Table";
import DUMMY_ALUMNOS from "../../shared/util/dummy_alumnos";

// import classes from "./Alumnos.module.css";

const Alumnos = () => {
  const [todosActive, setTodosActive] = useState(true);
  const [matriculadosActive, setMatriculadosActive] = useState(false);
  const [noMatriculadossActive, setNoMatriculadosActive] = useState(false);
  const [alumno, setAlumno] = useState(DUMMY_ALUMNOS);

  const todosActiveHandler = () => {
    setTodosActive(true);
    setMatriculadosActive(false);
    setNoMatriculadosActive(false);
  };
  const matriculadosActiveHandler = () => {
    setTodosActive(false);
    setMatriculadosActive(true);
    setNoMatriculadosActive(false);
  };
  const noMatriculadossActiveHandler = () => {
    setTodosActive(false);
    setMatriculadosActive(false);
    setNoMatriculadosActive(true);
  };
  let filterList;
  if (todosActive) filterList = alumno;
  if (matriculadosActive) filterList = alumno.filter((alumno) => alumno.estado);
  if (noMatriculadossActive)
    filterList = alumno.filter((alumno) => !alumno.estado);
  return (
    <section className="main-content">
      <FirstRow
        todosActive={todosActive}
        btn1Active={matriculadosActive}
        btn2Active={noMatriculadossActive}
        onTodos={todosActiveHandler}
        onBtn1={matriculadosActiveHandler}
        onBtn2={noMatriculadossActiveHandler}
        btn1="Matriculados"
        btn2="No Matriculados"
        page="Alumnos"
        total={filterList.length}
      />
      <SecondRow title="Alumnos" to="/alumno/new" />

      {/* <AlumnoTable alumnos={alumno} /> */}
      <Table
        page={filterList}
        headerTable={[
          "nro. Documento",
          "Correo",
          "Estado",
          "Operación",
          "Acción",
        ]}
        headerModalKeys={["nombres", "apellidos"]}
        labelsModal={{
          tipoDoc: "Tipo de documento:",
          documento: "Número de Documento",
          nombres: "Nombres:",
          apellidos: "Apellidos",
          sexo: "Sexo:",
          email: "Correo:",
          telefono: "Telefono",
          direccion: "Direccion: ",
          ciclo: "Ciclo",
          estado: "Estado: ",
        }}
        statusType="M"
        tableKeys={["documento", "email", "estado"]}
        tableType="alumno"
      />
    </section>
  );
};

export default Alumnos;
