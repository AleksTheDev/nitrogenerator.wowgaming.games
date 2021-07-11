import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./pages/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();