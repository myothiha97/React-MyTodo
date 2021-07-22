// import "./todo-menu.styles.scss";

import { DarkBox, LightBox } from "../box/box.component";
import React from "react";
import "./todo-menu.styles.scss";

import { connect } from "react-redux";
import Logo from "../logo/logo.component";

const TodoMenu = ({ theme, toggleTheme }) => {
  return (
    <div className="todo-menu">
      <div className="todo-menu__header">
        <h1
          style={{
            color: `${theme ? "white" : "black"}`,
          }}
        >
          TODO
        </h1>
        <Logo theme={theme}></Logo>
      </div>

      {theme ? (
        <DarkBox>This is dark</DarkBox>
      ) : (
        <LightBox>This is light</LightBox>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(TodoMenu);
