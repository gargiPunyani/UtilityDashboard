import React from 'react'
import ProviderForm from '../ProviderForm'
import { Link } from 'react-router-dom'

const Landline = () => {
  return (
    <div className="landlineOuterMost">
    <div className="landlineOut">
      <div className="dashboardBtn button mt-3 px-5">
        <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
          <span>
            <Link to={"/retailer-dashboard"}> Dashboard </Link>
            {">"} Landline
          </span>
        </button>
      </div>
      <div className="landlineInner flex gap-5 p-3">
        
        <ProviderForm
          heading={"Landline"}
          label1={"Provider :"}
          option1={"Airtel Landline"}
          option2={"VI Landline"}
          option3={"TATA Landline"}
          option4={"BSNL Landline"}
          label2={"Landline Number with STD code :"}
          data={"Ex: 01262123456"}
        />
        <div className="landlineImage bg-white h-[60vh] w-[60%] p-5 ">
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