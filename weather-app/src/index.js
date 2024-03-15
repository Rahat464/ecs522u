import React from "react";
import ReactDOMClient from "react-dom/client";

// Pages
import {HomeScreen} from "./screens/HomeScreen";
// import {ViewMore} from "./screens/ViewMore";
// import {Compass} from "./screens/Compass";
// import {Map} from "./screens/Map";

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);
root.render(<HomeScreen />);