import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "../share/App.js";

hydrateRoot(document.getElementById("root")!, <App />);
