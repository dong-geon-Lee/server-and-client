import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header></Header>
          <Routes>
            <Route path="/" element={<DashBoard></DashBoard>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
