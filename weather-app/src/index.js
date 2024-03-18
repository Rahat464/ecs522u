import React from "react";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import {HomeScreen} from "./screens/HomeScreen";
import {ViewMore} from "./screens/ViewMore";
import {Compass} from "./screens/Compass";
import {Map} from "./screens/Map";

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/viewmore" element={<ViewMore />} />
      <Route path="/compass" element={<Compass />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  </Router>
);