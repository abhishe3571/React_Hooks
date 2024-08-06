import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import NoMatchFound from "./NoMatchFound";
import NavBar from "./NavBar";
import { UserContext } from "./UserContext";
import { useState } from "react";

export default function App() {
  let [user, setUser] = useState({
    isLoggedIn: false,
    currentUserId: null,
    currentUserName: null,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
    </UserContext.Provider>
  );
}
