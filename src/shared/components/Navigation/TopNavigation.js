import React from "react";

import classes from "./TopNavigation.module.css";

const TopNavigation = (props) => {
  return (
    <nav className={`${classes.TopNavigation} ${props.className}`}>
      <div className={classes.LeftItem}>
        <i className="fas fa-school"></i>
        <h1>Matrícula Online</h1>
      </div>

      {!props.hideRightItem && (
        <div className={classes.RightItem}>
          <div className={classes.PreviewAdmin}>
            <h3>Sebastian Pajes</h3>
            <p>Administrador de Matriculas</p>
          </div>
          <div className={classes.Sort}>
            <i className="fas fa-sort-down"></i>
          </div>
        </div>
      )}
      {props.hideRightItem && props.customRightItem}
    </nav>
  );
};

export default TopNavigation;
