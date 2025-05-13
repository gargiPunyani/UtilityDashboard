import React from "react";

const WebAbout = () => {
  return (
    <div className="webAboutOuter">
      <div className="text-center bg-white ">
        <div
          className="webAboutInner h-[75vh] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dixfg1bvv/image/upload/v1747117756/Company_Profil_f0ofsv.png')",
            objectFit: "contain",
          }}
        ></div>
        <div className="px-5 py-10">
          <div className="font-bold text-4xl">
            <h2>
              About
              <span className="text-blue-700"> Webwise Studio</span>
            </h2>
          </div>
          <div className="text-base px-48 my-5 leading-7 text-justify ">
            <p>
              <b>Webwise Studio</b> Private Limited is a software leading
              provider of innovative software solutions. Our mission is to
              empower businesses of all sizes with cutting-edge technology that
              drives efficiency, productivity, and growth.
            </p>
            <p>
              We are guided by a set of core values that shape our approach to
              every project: innovation, integrity, and customer-centricity. Our
              team of passionate experts is dedicated to delivering exceptional
              results and building long-lasting partnerships with our clients.
            </p>
            <p>
              At <b>Webwise Studio</b>, we enable businesses to thrive in the
              B2B2C ecosystem by transforming local retail stores into powerful
              digital service points. Through our comprehensive and
              user-friendly platform, retailers can deliver a wide range of
              Assisted Digital Financial Services to their customers efficiently
              and securely.
            </p>
            <p>
              With <b>Webwise Studio</b>, our partners can offer:
            </p>
            <ul className="text-justify ">
              <li>
                <b>Aadhaar Enabled Payment System (AEPS): </b>
                Conduct secure Aadhaar-based transactions such as cash
                withdrawals, balance inquiries, and mini statements.
              </li>
              <li>
                <b>Utility Bill Payments: </b>
                Convenient payment options for electricity, gas, water,
                broadband, and more.
              </li>
              <li>
                <b>Mobile & DTH Recharges: </b>
                Instant recharges for all major telecom and DTH service
                providers.
              </li>
              <li>
                <b>Insurance Services: </b>
                Facilitate insurance purchases, premium payments, and renewals.
              </li>
              <li>
                <b>Cash Management Services(CMS): </b>
                Support EMI collections and cash drops for financial
                institutions, e-commerce logistics, and hyper-local delivery
                networks.
              </li>
              <li>
                <b>Digital Payment Solutions: </b>
                Accept payments via Bharat QR and other digital methods.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAbout;
