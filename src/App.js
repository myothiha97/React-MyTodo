import "./App.css";

import React, { Component } from "react";
import TodoMenu from "./components/todo-menu/todo-menu.component";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div
        className="app"
        style={{
          backgroundColor: `${theme ? "rgb(20, 20, 20)" : "white"}`,
        }}
      >
        <img
          src={
            theme
              ? "/images/bg-desktop-dark.jpg"
              : "/images/bg-desktop-light.jpg"
          }
          alt="background image"
          className="app-bg"
        />
        <div className="middle">
          <TodoMenu />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});
export default connect(mapStateToProps)(App);
