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
    <div className="webFooterOuter bg-blue-100 px-5 py-10">
      <div className="webFooter text-center">
        <div className="grid grid-cols-3 justify-around text-gray-700">
          <div className="footerLeft">
            <div className="w-32 m-auto">
              <img src={logo} alt="webwise-logo" />
            </div>
            <div className="my-5 address italic text-base ">
              <p>
                Office No. 1923, Etherea, Alphathum <br />
                Sector 90, Noida, <br />
                Uttar Pradesh, 201305
              </p>

              <p className="my-2">info@webwisestudio.in</p>
              <p className="my-2">+91 7683021914 </p>
            </div>
          </div>
          <div className="footerCenter">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="font-bold uppercase text-lg">
                  <h4>Useful Links</h4>
                </div>
                <div>
                  <ul className="text-base my-3 leading-8">
                    <li className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/"}>
                        <p>Home</p>
                      </Link>
                    </li>
                    <li className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/services"}>
                        <p>Services</p>
                      </Link>
                    </li>
                    <li className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/about-us"}>
                        <p>About Us</p>
                      </Link>
                    </li>
                    <li className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"/"}>
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
                  <ul className="text-base my-3 leading-8">
                    <li className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"https://webwisestudio.in/privacy"}>
                        <p>Privacy Policy</p>
                      </Link>
                    </li>
                    <li className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"https://webwisestudio.in/tnc"}>
                        <p>Terms and Conditions</p>
                      </Link>
                    </li>
                    <li className="hover:text-blue-700 transition-transform duration-300 hover:translate-x-4">
                      <Link to={"https://webwisestudio.in/disclaimer"}>
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
            <div className="followUs flex items-center justify-center my-3">
              <div className="h-10 w-10">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-6 w-6 hover:text-blue-800 cursor-pointer "
                />
              </div>
              <div className="h-10 w-10">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-6 w-6 hover:text-blue-800 cursor-pointer "
                />
              </div>
              <div className="h-10 w-10">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-6 w-6 hover:text-[#ee2a7b] cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" border-b-2 border-gray-500 my-5"></div>
        <div className="text-gray-500 text-base">
          <p>
            © 2025
            <span className="cursor-pointer hover:text-blue-800">
              <Link to={"https://webwisestudio.in/"}>
                {" "}
                Webwise Studio Pvt. Ltd.{" "}
              </Link>
            </span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebFooter;
