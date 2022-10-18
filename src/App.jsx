import React, { useState } from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Layouts/Home";
import Dummy from "./Layouts/Dummy";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<Dummy />}></Route>
    </Routes>
  );
}

export default App;
