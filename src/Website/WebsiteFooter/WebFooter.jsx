import React from "react";
import logo from "../../Assests/webwiseLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const WebFooter = () => {
  return (
    <div className="webFooterOuter bg-blue-100 px-5 pt-10 pb-3">
      <div className="webFooter lg:text-center">
        <div className="grid lg:grid-cols-3 lg:justify-around text-gray-700">
          <div className="footerLeft">
            <div className="w-32 lg:m-auto">
              <img src={logo} alt="webwise-logo" />
            </div>
            <div className="my-5 address italic text-sm md:text-base ">
              <p>
                Office No. 1923, Etherea, Alphathum <br />
                Sector 90, Noida, <br />
                Uttar Pradesh, 201301
              </p>

              <p className="my-2">Email: info@webwisestudio.in</p>
              <p className="my-2">Call: +91 7683021914 </p>
            </div>
          </div>
          <div className="footerCenter">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <div className="font-bold uppercase text-lg">
                  <h4>Useful Links</h4>
                </div>
                <div>
                  <ul className="text-sm md:text-base my-3 gap-2 ">
                    <li className="hover:text-blue-700 leading-8 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/"}>
                        <p>Home</p>
                      </Link>
                    </li>
                    <li className="hover:text-blue-700 leading-8 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/services"}>
                        <p>Services</p>
                      </Link>
                    </li>
                    <li className="hover:text-blue-700 leading-8 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/about-us"}>
                        <p>About Us</p>
                      </Link>
                    </li>
                    <li className="hover:text-blue-700 leading-8 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/contact-us"}>
                        <p>Contact</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="font-bold uppercase text-lg">
                  <h4>Company</h4>
                </div>
                <div>
                  <ul className="text-sm md:text-base my-3 leading-8">
                    <li className="hover:text-blue-700 leading-8 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/privacy"}>
                        <p>Privacy Policy</p>
                      </Link>
                    </li>
                    <li className="hover:text-blue-700 leading-8 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/tnc"}>
                        <p>Terms and Conditions</p>
                      </Link>
                    </li>
                    <li className="hover:text-blue-700 leading-8 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/disclaimer"}>
                        <p>Disclaimer</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footerRight">
            <div className="font-bold uppercase text-lg">
              <h4>Follow Us</h4>
            </div>
            <div className="followUs flex items-center lg:justify-center my-3">
              <div className="h-10 w-10">
                <Link to={"https://www.facebook.com/webwisestudio.in/"}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="h-6 w-6 hover:text-blue-800 cursor-pointer "
                  />
                </Link>
              </div>
              <div className="h-10 w-10">
                <Link
                  to={
                    "https://www.linkedin.com/company/webwise-studio-pvt-ltd/posts/?feedView=all"
                  }
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-6 w-6 hover:text-blue-800 cursor-pointer "
                  />
                </Link>
              </div>
              <div className="h-10 w-10">
                <Link to={"https://www.instagram.com/mayawebtech"}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="h-6 w-6 hover:text-[#ee2a7b] cursor-pointer "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-b-2 border-gray-500 my-5"></div>
        <div className="text-gray-500 text-sm md:text-base text-center">
          <p>
            © 2025 {" "}
            <span className="cursor-pointer hover:text-blue-800">
              <Link to={"https://webwisestudio.in/"}>
                Webwise Studio Pvt. Ltd. {" "}
              </Link>
            </span>
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebFooter;
