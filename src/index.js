import React from "react";
import { render } from "react-dom";

import App from "./App";

//Global Styles adn Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

render(<App />, document.getElementById("app"));
