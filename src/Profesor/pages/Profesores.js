import React, { useState } from "react";
import FirstRow from "../../shared/components/PageRows/FirstRow";
import SecondRow from "../../shared/components/PageRows/SecondRow";
import Table from "../../shared/components/Table/Table";
import DUMMY_PROFESORES from "../../shared/util/dummy_profesores";

const Profesores = () => {
  const [todosActive, setTodosActive] = useState(true);
  const [activosActive, setActivosActive] = useState(false);
  const [noactivossActive, setNoactivosActive] = useState(false);
  const [profesor, setProfesor] = useState(DUMMY_PROFESORES);
  const todosActiveHandler = () => {
    setTodosActive(true);
    setActivosActive(false);
    setNoactivosActive(false);
  };
  const activosActiveHandler = () => {
    setTodosActive(false);
    setActivosActive(true);
    setNoactivosActive(false);
  };
  const noactivossActiveHandler = () => {
    setTodosActive(false);
    setActivosActive(false);
    setNoactivosActive(true);
  };
  const changeStatusHandler = (id) => {
    setProfesor((prevState) => {
      const copyPreveState = [...prevState];
      return copyPreveState.map((profesor) => {
        const copyProfesor = { ...profesor };
        if (copyProfesor._id === id) copyProfesor.estado = !copyProfesor.estado;
        return copyProfesor;
      });
    });
  };
  let filterList;
  if (todosActive) filterList = profesor;
  if (activosActive)
    filterList = profesor.filter((profesor) => profesor.estado);
  if (noactivossActive)
    filterList = profesor.filter((profesor) => !profesor.estado);
  return (
    <section className="main-content">
      <FirstRow
        todosActive={todosActive}
        btn1Active={activosActive}
        btn2Active={noactivossActive}
        onTodos={todosActiveHandler}
        onBtn1={activosActiveHandler}
        onBtn2={noactivossActiveHandler}
        btn1="Activo"
        btn2="Inactivo"
        page="Profesores"
        total={filterList.length}
        style={{ width: "17rem" }}
      />
      <SecondRow title="Profesores" to="/profesor/new" />
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
          estado: "Estado: ",
          linkedin: "Linkedin: ",
        }}
        statusType="A"
        tableKeys={["documento", "email", "estado"]}
        tableType="profesor"
        onChangeStatus={changeStatusHandler}
      />
    </section>
  );
};

export default Profesores;
