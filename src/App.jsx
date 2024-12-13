import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contents from "./components/Contents";
import Create from "./components/Create";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Contents />} />
          <Route path="create" element={<Create />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
