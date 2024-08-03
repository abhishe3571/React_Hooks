import React, { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    console.log("initial render");
    document.title = "Dashboard - eCommerce";
  }, []);
  return <h1>Dashboard</h1>;
}

export default Dashboard;
