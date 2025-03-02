import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import "./App.css"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Social-Media" element={<Home />} />
        <Route path="/Social-Media/item/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
