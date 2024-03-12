import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomeScreen } from "./screens/HomeScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HomeScreen />);
