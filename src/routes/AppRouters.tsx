
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from '../components/login/LoginForm.tsx'
import Register from '../components/register/Register.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}