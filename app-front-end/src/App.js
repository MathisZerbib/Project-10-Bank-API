import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
// import About from "./pages/About";
// import Location from "./pages/Location";
// import Footer from "components/Footer";
// import NotFound from "pages/NotFound";
// import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
// import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <div className="App">
    <NavBar></NavBar>          

<div className="main-container">
    {/* <SideBar></SideBar> */}

      <Routes>
        {/* <Route path={pathName+"*" }element={<NotFound />} /> */}
        <Route path={"/"} element={<Home />} />
        <Route path={"/sign-in"} element={<SignIn />} />
        {/* <Route path={pathName+"about"} element={<About />} />
        <Route path={pathName+"location/:id"} element={<Location />} /> */}
      </Routes>     

    </div>
    </div>
  );
}

export default App;
