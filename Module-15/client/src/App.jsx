import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import SavePage from "./pages/savePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/save" element={<SavePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
