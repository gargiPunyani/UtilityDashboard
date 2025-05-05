import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProviderForm from '../ProviderForm';

const Landline = () => {
  const [providers, setProviders] = useState([]);
    
      useEffect(() => {
        // Get the service_id from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const service_id = urlParams.get("service_id");
    
        // Retrieve data from sessionStorage using the service_id
        const storedData = sessionStorage.getItem(`providers_${service_id}`);
    
        if (storedData) {
          setProviders(JSON.parse(storedData));
        } else {
          console.error("No data found for this service ID");
        }
      }, []);
  return ( 
    <div className="landlineOuterMost">
    <div className="landlineOut">
      <div className="dashboardBtn button mt-3 px-5 text-sm ">
        <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
          <span>
            <Link to={"/retailer-dashboard"}> Dashboard </Link>
            {">"} Landline
          </span>
        </button>
      </div>
      <div className="landlineInner grid h-auto lg:flex gap-5 p-3">
        
        <ProviderForm
          heading={"Landline"}
          label1={"Provider :"}
          providers={providers}
          label2={"Landline Number with STD code :"}
          data={"Ex: 01262123456"}
        />
        <div className="landlineImage order-2 bg-white lg:w-[60%] p-5 ">
          <img
            className="landlineImage h-[100%] m-auto"
            src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1738824373/images_fdt4sv.png"
            alt="landlineImage"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Landline