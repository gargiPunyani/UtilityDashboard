import React from "react";
import WebAbout from "./WebAbout/WebAbout";
import WebsiteNavbar from "../WebsiteNavbar/WebsiteNavbar";
import Partners from "../WebsiteHome/OurPartners/Partners";
import Vision from "./Vision/Vision";
import WebFooter from "../WebsiteFooter/WebFooter";

const WebsiteAboutUs = () => {
  return (
    <>
      <WebsiteNavbar />
      <WebAbout />
      <Vision/>
      <Partners/>
      <WebFooter/>
    </>
  );
};

export default WebsiteAboutUs;
