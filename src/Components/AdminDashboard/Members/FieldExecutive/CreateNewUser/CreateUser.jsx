import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { basicDetails, basicDetails2, permanentAddress } from "../../../../constant";

const CreateUser = () => {
  return (
    <div className="createUserOuterMost">
      <div className="createUserOuter">
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton p-1 mt-2 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} FIELDEXECUTIVE(FE)
                </span>
              </button>
            </div>
            <div className="createUserInner mx-5 my-3">
              <form className="userDetails text-xs sm-text-sm md:text-md">
                <div className="userDetailsForm bg-white p-4 shadow-lg rounded-lg">
                  <div className="basicDataHead uppercase font-semibold mb-2">
                    <h3>Basic details </h3>
                  </div>
                  <hr />
                  <div className="basicData grid md:grid-cols-2 lg:grid-cols-3 gap-6  mt-5 ">
                    {basicDetails.map((item, id) => {
                      return (
                        <div className="basicInformationForm " key={id}>
                          <div className="information">
                            <label>{item.name}</label>
                            <div className="infoInput mt-1">
                              <input className="border-2 p-2 mt-2 rounded-md outline-none w-full" placeholder={item.value} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="memberTypeInfo">
                      <label>Member Type :</label>
                      <select className="border-2 p-2 mt-2 rounded-md outline-none w-full text-gray-400">
                        <option>FieldExecutive(FE)</option>
                        <option>Franchise</option>
                        <option>SuperAdmin</option>
                        <option>Retailer</option>
                      </select>
                    </div>
                    <div className="packageDetails ">
                      <label>Package :</label>
                      <div className="packageData flex items-center w-full">
                        <div className="refershIcon bg-green-500 mt-[6px] py-[7px] px-[7px] text-white ">
                          <FontAwesomeIcon icon={faRefresh} />
                        </div>
                        <div className="packageInput w-[95%] ">
                          <select className="border-2 p-2 mt-2 outline-none uppercase rounded-md text-gray-500 w-[100%]">
                            <option>Select Package </option>
                            <option>FRANCHISE1 (FSDS) Package </option>
                            <option>FRANCHISE2 (FSDS) Package </option>
                            <option>SuperDisrtibutor (SDS) Package </option>
                            <option>Distributor (DS) Package </option>
                            <option>Retailer (RT) Package </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {basicDetails2.map((item, id) => {
                      return (
                        <div className="basicInfoData" key={id}>
                          <div className="information">
                            <label>{item.name}</label>
                            <div className="infoInput mt-1">
                              <input className="border-2 p-2 mt-2 rounded-md outline-none w-full" placeholder={item.value} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="permanentAddress bg-white p-4 shadow-lg rounded-lg mt-5">
                  <div className="basicDataHead uppercase font-semibold mb-2">
                    <h3>Permanent Address </h3>
                  </div>
                  <hr />
                  <div className="basicData grid md:grid-cols-2 lg:grid-cols-3 gap-6  mt-5 ">
                    {permanentAddress.map((item) => {
                      return (
                        <div className="permanentAddressInfo" key={item.id}>
                          <label> {item.address} : </label>
                          <div>
                            <input
                              className="permAddInput border-2 w-full p-2 mt-2 outline-none rounded-md"
                              placeholder={item.detail}
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className="permanentAddressInfo">
                      <label>District</label>
                      <div>
                        <input className="permAddInput border-2 w-full p-2 mt-2 outline-none rounded-md " placeholder="Karnatka"  />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="activeServices bg-white p-4 shadow-lg rounded-lg mt-5">
                  <div className="basicDataHead uppercase font-semibold mb-2">
                    <h3>Services</h3>
                  </div>
                  <hr />
                  <div className="active mt-5 mb-5 ">
                    <label>Active Services :</label>
                    <div className="activeServiceInner">
                      <input className=" border-2 w-full p-2 mt-2 h-12 outline-none rounded-md " type="text" />
                    </div>
                  </div>
                    <div className="saveDetails text-white mt-5">
                      <button className="saveDetailsBtn p-2 mt-2 rounded-md outline-none bg-green-500"> Save Details</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  );
};

export default CreateUser;
