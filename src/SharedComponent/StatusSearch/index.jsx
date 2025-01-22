import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StatusSearch = ({handleSearch}) => {
  return (
    <div className="statusSearchOutMost">
      <div className="statusSearchOut">
        <div
          className="dateInner sm:text-sm grid sm:grid-cols-2 items-center text-xs" >
            <div className="dateTo ">
              <span>Status* : </span>
              <input
                type="text" className="dateToInput cursor-pointer w-[50%]  ml-4 border-2 p-2 rounded-md" placeholder="Pending"/>
            </div>
          
            <div className="searchBtn text-md m-2 text-white ">
              <button className="searchButton bg-blue-600 py-2 px-6 text-xs lg:text-sm rounded-md" onClick= {handleSearch}>
                <FontAwesomeIcon icon={faSearch} /> Search
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StatusSearch;
