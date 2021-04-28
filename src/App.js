import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Administradores from "./Admin/pages/Administradores";
import Alumnos from "./Alumno/pages/Alumnos";
import Matricula from "./Alumno/pages/Matricula";
import Profesores from "./Profesor/pages/Profesores";
import Secciones from "./Seccion/pages/Secciones";
import Auth from "./Admin/pages/Auth/Auth";
import Error from "./Error";
import TopNavigation from "./shared/components/Navigation/TopNavigation";
import LeftNavigation from "./shared/components/Navigation/LeftNavigation";
import NewAlumno from "./Alumno/pages/NewAlumno";
import UpdateAlumno from "./Alumno/pages/UpdateAlumno";
import NewProfesor from "./Profesor/pages/NewProfesor";
import UpdateProfesor from "./Profesor/pages/UpdateProfesor";
import NewAdministrador from "./Admin/pages/NewAdministrador";
import UpdateAdministrador from "./Admin/pages/UpdateAdministrador";
import NewSeccion from "./Seccion/pages/NewSeccion";
import UpdateSeccion from "./Seccion/pages/UpdateSeccion";
import UpdateCurso from "./Curso/pages/UpdateCurso";

import Cursos from "./Curso/pages/Cursos";
import NewCurso from "./Curso/pages/NewCurso";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  let routes;
  if (isLoggedIn) {
    routes = (
      <Switch>
        {/* ADMIN ROUTES */}
        <Route path="/admin" exact>
          <Administradores />
        </Route>
        <Route path="/admin/new" exact>
          <NewAdministrador />
        </Route>
        <Route path="/admin/update/:adminId" exact>
          <UpdateAdministrador />
        </Route>
        {/* ALUMNO ROUTES */}
        <Route path="/alumno" exact>
          <Alumnos />
        </Route>
        <Route path="/alumno/new" exact>
          <NewAlumno />
        </Route>
        <Route path="/alumno/update/:alumnoId" exact>
          <UpdateAlumno />
        </Route>
        <Route path="/alumno/:alumnoId/matricula" exact>
          <Matricula />
        </Route>
        {/* PROFESOR ROUTES */}
        <Route path="/profesor" exact>
          <Profesores />
        </Route>
        <Route path="/profesor/new" exact>
          <NewProfesor />
        </Route>
        <Route path="/profesor/update/:profesorId" exact>
          <UpdateProfesor />
        </Route>
        {/* SECCION ROUTES */}
        <Route path="/seccion" exact>
          <Secciones />
        </Route>
        <Route path="/seccion/new" exact>
          <NewSeccion />
        </Route>
        <Route path="/seccion/update/:seccionId" exact>
          <UpdateSeccion />
        </Route>
        {/* SECCION CURSO */}
        <Route path="/curso" exact>
          <Cursos />
        </Route>
        <Route path="/curso/new" exact>
          <NewCurso />
        </Route>
        <Route path="/curso/update/:cursoId" exact>
          <UpdateCurso />
        </Route>
        <Redirect to="/alumno" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        {/* AUTH ROUTES */}
        <Route path="/login" exact>
          <Auth />
        </Route>
        <Redirect to="/login" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      <Router>
        {isLoggedIn && <TopNavigation />}
        <div className={isLoggedIn && "container-main-content"}>
          {isLoggedIn && <LeftNavigation />}
          <Switch>{routes}</Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
