import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import NoMatchFound from "./NoMatchFound";
import NavBar from "./NavBar";

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatchFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
