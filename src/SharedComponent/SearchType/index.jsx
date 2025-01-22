import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchType = ({handleChange}) => {
  return (
    <div className="searchTypeOuterMost">
      <div className="searchTypeOuter">
        <div className="searchTypeInner md:flex gap-8 items-center text-xs">
          <div className="searchType md:flex gap-8 w-full md:w-[65%] mb-3" onChange={handleChange} >
            <div className="searchTypeFrom w-full">
              <p>Serach Type: *</p>
              <input type="text" className="searchTypeFromInput mt-2 cursor-pointer w-full border-2 p-2 rounded-md" placeholder="Seach by Number"/>
            </div>
            <div className="searchTypeTo mt-2 md:m-0 w-full">
              <p>Value: *</p>
              <input placeholder="Enter Value" type="text" className="searchTypeToInput mt-2 cursor-pointer w-full border-2 p-2 rounded-md"/>
            </div>
          </div>
          <div className="searchAndDownload xs:flex gap-2 w-full md:w-[30%]">
            <div className="searchBtn text-md m-2 text-white ">
              <button className="searchButton  w-full  bg-blue-600 py-2 px-6 text-xs lg:text-sm rounded-md">
                <FontAwesomeIcon icon={faSearch} /> Search </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchType; 