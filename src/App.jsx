import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HeroPage, HeroesPage, HomePage } from "./pages";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/hero/:id" element={<HeroPage />} />
        <Route path="/heroes" element={<HeroesPage />} />
      </Route>
    </Routes>
  );  
}

export default App;
