import React, { useState } from "react";
import FirstRow from "../../shared/components/PageRows/FirstRow";
import SecondRow from "../../shared/components/PageRows/SecondRow";
import Table from "../../shared/components/Table/Table";
import DUMMY_ADMINISTRADORES from "../../shared/util/dummy_administradores";
//ESTA PAGINA SOLO LO VA A VER EL ADMINISTRADOR PRINCIPAL
const Administradores = () => {
  const [todosActive, setTodosActive] = useState(true);
  const [activosActive, setActivosActive] = useState(false);
  const [noactivossActive, setNoactivosActive] = useState(false);
  const [administrador, setAdministrador] = useState(DUMMY_ADMINISTRADORES);
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
    setAdministrador((prevState) => {
      const copyPreveState = [...prevState];
      return copyPreveState.map((administrador) => {
        const copyAdministrador = { ...administrador };
        if (copyAdministrador._id === id)
          copyAdministrador.estado = !copyAdministrador.estado;
        return copyAdministrador;
      });
    });
  };
  let filterList;
  if (todosActive)
    filterList = administrador.filter((admin) => admin.permiso !== "principal");
  if (activosActive)
    filterList = administrador.filter(
      (admin) => admin.estado && admin.permiso !== "principal"
    );
  if (noactivossActive)
    filterList = administrador.filter(
      (admin) => !admin.estado && admin.permiso !== "principal"
    );
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
        page="Administradores"
        total={filterList.length}
        style={{ width: "17rem" }}
      />
      <SecondRow title="Administradores" to="/admin/new" />
      <Table
        page={filterList}
        headerTable={[
          "nro. Documento",
          "Username",
          "Correo",
          "Estado",
          "Operación",
          "Acción",
        ]}
        headerModalKeys={["username"]}
        labelsModal={{
          username: "Username: ",
          password: "Contraseña: ",
          tipoDoc: "Tipo de documento:",
          documento: "Número de Documento",
          nombres: "Nombres:",
          apellidos: "Apellidos",
          email: "Correo:",
          telefono: "Telefono",
          estado: "Estado: ",
          permiso: "Tipo de permiso: ",
        }}
        statusType="A"
        tableKeys={["documento", "username", "email", "estado"]}
        tableType="admin"
        onChangeStatus={changeStatusHandler}
      />
    </section>
  );
};

export default Administradores;
