import React from "react";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
function PageNotfound() {
    return (
        <>
            <div className="page-not-found-container">

                <h2> Error 404</h2>
                <p>The page you were looking for doesn't exist.</p>
                <NavLink to={"/"} className="button-not-found" >Go back</NavLink>
            </div>
            <Footer></Footer>
        </>
    );
}

export default PageNotfound;
