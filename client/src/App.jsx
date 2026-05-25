import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LayoutWrapper from "./layout/LayoutWrapper";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { showLogin } = useAppContext();

  return (
    <Router>
      <Toaster />
      {showLogin && <Login />}
      <LayoutWrapper />
    </Router>
  );
};

export default App;
