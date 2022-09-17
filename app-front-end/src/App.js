import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React from "react";
// import About from "./pages/About";
// import Location from "./pages/Location";
// import Footer from "components/Footer";
// import NotFound from "pages/NotFound";
// import Dashboard from "./pages/Dashboard";
// import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import { Login } from "./pages/Login";
import User from "./pages/User";
import { history } from "./_helpers";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

import { Nav } from "./components/Nav/Nav";


function App() {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="App">
      <Nav></Nav>

      <div className="main-container">
        {/* <SideBar></SideBar> */}

        <Routes>
        <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route
            path={"/user"}
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
