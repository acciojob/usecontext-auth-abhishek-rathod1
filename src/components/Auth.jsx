import React, { useContext } from "react";

import { AuthContext } from "./App";

const Auth = ({setCheckData}) => {
  const checkData = useContext(AuthContext);
  return (
    <div>
      <div>
        {checkData ? (
          <p>You are now authenticated, you can proceed</p>
        ) : (
          <p>You are not authenticated</p>
        )}
      </div>
      <input
        id="inp"
        type="checkbox"
        checked={checkData}
        onChange={() => setCheckData(!checkData)}
      />{" "}
      <label htmlFor='inp'>I am not a robot</label>
      
    </div>
  );
};

export default Auth;
