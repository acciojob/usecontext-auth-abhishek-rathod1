import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const Auth = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  // const checkData = useContext(AuthContext);
   const handleCheckboxChange = (e) => {
    setIsAuthenticated(e.target.checked);
  };
  return (
    <div>
      <div>
        {isAuthenticated ? (
          <p>You are now authenticated, you can proceed</p>
        ) : (
          <p>you are not authenticated</p>
        )}
      </div>
      <input
        id="inp"
        type="checkbox"
        checked={isAuthenticated}
        onChange={handleCheckboxChange}
      />{" "}
      <label htmlFor='inp'>I'm not a robot</label>
      
    </div>
  );
};

export default Auth;
