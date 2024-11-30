import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contents from "./components/Contents";
import Create from "./components/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Contents />} /> {/* Default route */}
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
