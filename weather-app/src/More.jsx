import React from "react";
import ReactDOMClient from "react-dom/client";
import { ViewMore } from "./screens/ViewMore";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ViewMore />);
