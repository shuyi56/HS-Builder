import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppTheme from "./AppTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import registerServiceWorker from "./registerServiceWorker";
injectTapEventPlugin();
ReactDOM.render(<AppTheme />, document.getElementById("root"));
registerServiceWorker();
