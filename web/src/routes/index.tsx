import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForgotPassword } from "../pages/ForgotPassword";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";

export const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};
