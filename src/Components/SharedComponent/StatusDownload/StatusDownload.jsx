import React, { useState } from "react";
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatusDownload = ({ handleDownload, onDateChange }) => {
  const [dates, setDates] = useState({
    fromdate:"01-01-2024",
    todate: new Date().toISOString().split("T")[0],
  });

  const handleSearch = (event) => {
    const { name, value } = event.target;
    const updatedDateRange = { ...dates, [name]: value }; // Update the correct state
    setDates(updatedDateRange);
    onDateChange(updatedDateRange); // Send updated range to parent component
  };
  return (
    <div className="statusOuterMost bg-white p-4 rounded-md">
      <div className="statusOuter">
        <div className="statusInner">
          <div className="dateInner sm:text-sm lg:flex gap-8 items-center text-xs">
            <div className="date md:flex gap-8 w-full lg:w-[65%] mb-3">
              <div className="dateFrom w-full">
                <span>From</span>
                <span className="text-red-600">*</span> <span>:</span>
                <input
                  type="date"
                  name="fromdate"
                  value={dates.fromdate}
                  className="dateFromInput outline-none cursor-pointer w-full mt-1 border-2 p-2 rounded-md"
                  onChange={handleSearch}
                />
              </div>
              <div className="dateTo mt-2 md:m-0 w-full">
                <span>To</span>
                <span className="text-red-600">*</span> <span>:</span>
                <input
                  type="date"
                  name="todate"
                  value={dates.todate}
                  className="dateToInput outline-none cursor-pointer w-full mt-1 border-2 p-2 rounded-md"
                  onChange={handleSearch}
                />
              </div>
              <div className="dateTo mt-2 md:m-0 w-full">
                <span>Status Type</span>
                <span className="text-red-600">*</span> <span>:</span>
                <input
                  type="text"
                  className="dateToInput outline-none cursor-pointer w-full mt-1 border-2 p-2 rounded-md"
                  placeholder="Status Type"
                />
              </div>
            </div>
            <div className="searchAndDownload justify-center sm:justify-end xs:flex gap-2 w-full lg:w-[30%]">
              <div className="searchBtn text-md m-2 text-white ">
                <button className="searchButton  w-full bg-blue-600 py-2 px-6 text-xs lg:text-sm rounded-md">
                  <FontAwesomeIcon icon={faSearch} /> Search
                </button>
              </div>
              <div className="searchBtn text-md m-2 text-white ">
                <button
                  className="searchButton  w-full bg-green-600 py-2 px-6 text-xs lg:text-sm rounded-md"
                  onClick={handleDownload}
                >
                  <FontAwesomeIcon icon={faDownload} /> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusDownload;
