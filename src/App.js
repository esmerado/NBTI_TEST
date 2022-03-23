import { Dashboard } from "Components/Dashboard/dashboard";
import Navbar from "Components/Navbar";
import Home from "Pages/Home";
import Login from "Pages/LoginAuth0/Login";
import LoginPage from "Pages/LoginJWT/LoginPage";
import PdfGeneratorPage from "Pages/PdfGeneratorPage";
import TodoList from "Pages/TodoList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/pdfGeneratorPage" element={<PdfGeneratorPage />} />
        <Route path="/loginAuth0" element={<Login />} />
        <Route path="/loginJwt" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>

      <footer />
    </div>
  );
}

export default App;
