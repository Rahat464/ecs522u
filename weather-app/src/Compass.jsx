import React from "react";
import ReactDOMClient from "react-dom/client";
import { Compass } from "./screens/Compass";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Compass />);
