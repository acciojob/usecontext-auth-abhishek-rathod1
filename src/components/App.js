import React, { createContext, useState } from "react";
import "./../styles/App.css";
import Auth from "./Auth";

export const AuthContext = createContext();

const App = () => {
  const [checkData, setCheckData] = useState(true);
  return (
    <AuthContext.Provider value={checkData}>
      <div>        
        <h1>Click on the checkbox to get authenticated</h1>
        <Auth setCheckData={setCheckData} />        
      </div>
    </AuthContext.Provider>
  );
};

export default App;
