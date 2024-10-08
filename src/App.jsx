import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import NoMatchFound from "./NoMatchFound";
import NavBar from "./NavBar";
import { UserContext } from "./UserContext";
import { useState } from "react";
import Store from "./Store";
import ProductList from "./ProductList";

export default function App() {
  let [user, setUser] = useState({
    isLoggedIn: false,
    currentUserId: null,
    currentUserName: null,
    currentUserRole: null,
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
            <Route path="/store" element={<Store />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="*" element={<NoMatchFound />} />
          </Routes>
        </div>
      </HashRouter>
    </UserContext.Provider>
  );
}
