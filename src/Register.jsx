import React, { useEffect } from "react";

let Register = () => {
  useEffect(() => {
    console.log("initial render");
    document.title = "Register - eCommerce";
  }, []);

  return <div>Register</div>;
};

export default Register;
