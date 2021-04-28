import React, { useState } from "react";
import FirstRow from "../../shared/components/PageRows/FirstRow";
import SecondRow from "../../shared/components/PageRows/SecondRow";
import Table from "../../shared/components/Table/Table";
import DUMMY_CURSOS from "../../shared/util/dummy_cursos";

const Cursos = () => {
  const [todosActive, setTodosActive] = useState(true);
  const [activosActive, setActivosActive] = useState(false);
  const [noactivossActive, setNoactivosActive] = useState(false);
  const [curso, setCurso] = useState(DUMMY_CURSOS);
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
    setCurso((prevState) => {
      const copyPreveState = [...prevState];
      return copyPreveState.map((curso) => {
        const copyCurso = { ...curso };
        if (copyCurso._id === id) copyCurso.estado = !copyCurso.estado;
        return copyCurso;
      });
    });
  };
  let filterList;
  if (todosActive) filterList = curso;
  if (activosActive) filterList = curso.filter((curso) => curso.estado);
  if (noactivossActive) filterList = curso.filter((curso) => !curso.estado);
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
        page="Cursos"
        total={filterList.length}
        style={{ width: "17rem" }}
      />
      <SecondRow title="Cursos" to="/curso/new" />
      <Table
        page={filterList}
        headerTable={[
          "Código",
          "Nombre",
          "Vacantes",
          "Estado",
          "Operación",
          "Acción",
        ]}
        headerModalKeys={["nombres", "apellidos"]}
        labelsModal={{
          codigo: "Codigo:",
          ciclo: "Ciclo:",
          nombre: "Nombre:",
          creditos: "Creditos",
          vacantes: "Vacantes:",
          estado: "Estado",
        }}
        statusType="A"
        tableKeys={["codigo", "nombre", "vacantes", "estado"]}
        tableType="curso"
        onChangeStatus={changeStatusHandler}
      />
    </section>
  );
};

export default Cursos;
