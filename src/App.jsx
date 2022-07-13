import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/authentication/SignUp";
import Login from "./pages/authentication/Login";
import ForgotPassword from "./pages/authentication/ForgotPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<SignUp />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/password/forgot" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
