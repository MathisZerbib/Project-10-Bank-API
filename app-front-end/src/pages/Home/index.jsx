import React from "react";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="home-container">
      
      <Banner></Banner>
      <Features></Features>
      <Footer></Footer>
    </div>
  );
}

export default Home;
