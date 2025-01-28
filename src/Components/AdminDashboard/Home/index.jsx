import React from "react";
import MainNav from "../../SharedComponent/MainNavbar";
import SideNavbar from "../../SharedComponent/SideNavbar";
import HomeCards from "./HomeCards/index.jsx";
import Footer from "../../SharedComponent/Footer/index.jsx";

const Home = () => {
  return (
    <div className="homeOuterMost w-full ">
      <div className="homeOuter">
            <HomeCards />
            <div className="footerSection ">
              <Footer />
            </div>
          </div>
        </div>
      
  );
};

export default Home;
