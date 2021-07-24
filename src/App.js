import "./App.css";

import React, { Component } from "react";
import TodoMenu from "./components/todo-menu/todo-menu.component";
import { connect } from "react-redux";
import ThemeContext from "./contexts/theme/theme.context";

class App extends Component {
  state = {
    theme: false,
  };

  toggleTheme() {
    this.setState({ theme: !this.state.theme });
  }

  render() {
    const { theme } = this.state;
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
        <ThemeContext.Provider
          value={{
            theme,
            toggleTheme: this.toggleTheme.bind(this),
          }}
        >
          <div className="middle">
            <TodoMenu />
          </div>
        </ThemeContext.Provider>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});
export default connect(mapStateToProps)(App);
