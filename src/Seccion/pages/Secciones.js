import React, { useState } from "react";
import FirstRow from "../../shared/components/PageRows/FirstRow";
import SecondRow from "../../shared/components/PageRows/SecondRow";
import Table from "../../shared/components/Table/Table";
import DUMMY_SECCIONES from "../../shared/util/dummy_secciones";

const Secciones = () => {
  const [todosActive, setTodosActive] = useState(true);
  const [activosActive, setActivosActive] = useState(false);
  const [noactivossActive, setNoactivosActive] = useState(false);
  const [seccion, setSeccion] = useState(DUMMY_SECCIONES);
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
    setSeccion((prevState) => {
      const copyPreveState = [...prevState];
      return copyPreveState.map((seccion) => {
        const copySeccion = { ...seccion };
        if (copySeccion._id === id) copySeccion.estado = !copySeccion.estado;
        return copySeccion;
      });
    });
  };
  let filterList;
  if (todosActive) filterList = seccion;
  if (activosActive) filterList = seccion.filter((seccion) => seccion.estado);
  if (noactivossActive)
    filterList = seccion.filter((seccion) => !seccion.estado);
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
        page="Secciones"
        total={filterList.length}
        style={{ width: "17rem" }}
      />
      <SecondRow title="Secciones" to="/seccion/new" />
      <Table
        page={filterList}
        headerTable={[
          "Código",
          "Curso",
          "Vacantes",
          "Estado",
          "Operación",
          "Acción",
        ]}
        headerModalKeys={["codigo"]}
        labelsModal={{
          codigo: "Codigo de sección: ",
          dia: "Día:",
          hora: "Hora:",
          vacantes: "Vacantes",
          profesor: "Profesor:",
          curso: "Curso:",
          modalidad: "Modalidad:",
          estado: "Estado: ",
        }}
        statusType="A"
        tableKeys={["codigo", "curso", "vacantes", "estado"]}
        tableType="seccion"
        onChangeStatus={changeStatusHandler}
      />
    </section>
  );
};

export default Secciones;
