import React, { useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  useEffect(() => {
    console.log("initial render");
    document.title = "Dashboard - eCommerce";
  }, []);
  //get context
  let userContext = useContext(UserContext);
  console.log(userContext);
  return <h1>Dashboard</h1>;
}

export default Dashboard;
