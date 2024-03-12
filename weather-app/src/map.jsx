import React from "react";
import ReactDOMClient from "react-dom/client";
import { Map } from "./screens/Map";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Map />);
