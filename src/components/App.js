import React, { createContext, useState } from "react";
import "./../styles/App.css";
import Auth from "./Auth";
import { AuthProvider } from "../context/AuthContext";

const App = () => {
  // const [checkData, setCheckData] = useState(false);
  return (
    <AuthProvider>
      <h1>Click on the checkbox to get authenticated</h1>
      <Auth/>
    </AuthProvider>
  );
};

export default App;
