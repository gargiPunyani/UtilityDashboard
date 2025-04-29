import React from 'react'
import { Link } from 'react-router-dom'
import ProviderForm from '../ProviderForm'

const Electricity = () => {
  return (
    <div className="electricityOuterMost">
    <div className="electricityOut">
      <div className="dashboardBtn button mt-3 px-5">
        <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
          <span>
            <Link to={"/retailer-dashboard"}> Dashboard </Link>
            {">"} Electricity
          </span>
        </button>
      </div>
      <div className="electricityInner flex gap-5 p-3">
        <div className="electricityImage bg-white h-[60vh] w-[60%] ">
          <img
            className="electricityImage h-[100%] m-auto"
            src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1738840804/pay-electricity-bill-online-mobile-app-phone-save-money-reduce-consumption_1135642-197_wxd5cd.jpg"
            alt="electricityImage"
          />
        </div>
        <ProviderForm
          heading={"Electricity"}
          label1={"Provider :"}
          option1={"TSECL Tripura"}
          option2={"WESCO Odisha"}
          option3={"TATA Power Mumbai"}
          option4={"Electricity Department Chandigarh"}
          label2={"Consumer Number :"}
          data={"Consumer Number"}
        />
      </div>
    </div>
  </div>
  )
}

export default Electricity