import App from "./App.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from "react";

export default class ThemedApp extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <App />
        </MuiThemeProvider>
      </div>
    );
  }
}
