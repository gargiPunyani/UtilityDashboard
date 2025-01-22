import React from "react";
import { superAdminDetails } from "../../../constant";

const SuperAdmin = () => {
  return (
    <div className="superAdminOuterMost">
      <div className="superAdminOuter">
        <div className="superAdminInner text-xs sm:text-sm items-center m-auto sm:flex p-2 ">
            <div className="adminSectionTop w-[42%] sm:w-[40%] m-auto text-center  ">
          <div className="adminAvatar m-auto sm:w-[35%]">
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1735284149/businessman-character-avatar-isolated_24877-60111-removebg-preview_epql6n.png"
              alt="superAdminAvatar"
            />
          </div>
          <div className="font-semibold mt-4">
            <p>SUPER ADMIN</p>
          </div>
          <div className="adminMemberType text-gray-600">
            <p>CBS</p>
            </div>
          <div className="company text-gray-600">
           <p> Company Name: Maya Pe </p>
           </div>
           </div>
          <div className="inputAdmins text-gray-600 sm:w-[60%] mt-4">
            {superAdminDetails.map((item) => {
              return (
                <div
                  className="superAdminOuter cursor-pointer hover:bg-blue-200 border-2 rounded-md mb-2 gap-3 p-2"
                  key={item.id}
                >
                  {item.href ? (
                    <a href={item.href}>
                      <div className="superAdminDetails flex gap-3 p-2">
                        <div className="icons">{item.icon}</div>
                        <div className="details">{item.detail}</div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="superAdminDetails flex gap-3 p-2"
                      key={item.id}
                    >
                      <div className="icons">{item.icon}</div>
                      <div className="details">{item.detail}</div>
                    </div>
                  )}
                </div>
              );})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
