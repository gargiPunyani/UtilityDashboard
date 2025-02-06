import React from 'react'
import { Link } from 'react-router-dom'
import ProviderForm from '../ProviderForm'

const Water = () => {
  return (
    <div className="waterOuterMost">
    <div className="waterOut">
      <div className="dashboardBtn button mt-3 px-5">
        <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
          <span>
            <Link to={"/retailer-dashboard"}> Dashboard </Link>
            {">"} Water
          </span>
        </button>
      </div>
      <div className="waterInner flex gap-5 p-3">
        <div className="waterImage bg-white h-[60vh] w-[60%] p-5 ">
          <img
            className="waterImage h-[100%] m-auto"
            src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1738839564/utility-bills-smartphone-app-economy-260nw-2415705909_j7qr7l.jpg"
            alt="waterImage"
          />
        </div>
        <ProviderForm
          heading={"Water"}
          label1={"Provider :"}
          option1={"Uttarakhand Jal Sansthanid"}
          option2={"Delhi Development Aunthority (DDA)"}
          option3={"Haryana Urban Development Authority"}
          option4={"Pune Municipal Corporation - Water"}
          label2={"Amount :"}
          data={"Amount in ₹"}
        />
      </div>
    </div>
  </div>
  )
}

export default Water