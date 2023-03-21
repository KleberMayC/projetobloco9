import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Header />

      <Outlet />
    </div>
  );
}

export default App;
