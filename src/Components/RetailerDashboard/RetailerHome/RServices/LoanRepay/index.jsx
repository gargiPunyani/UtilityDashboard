import React from 'react'
import { Link } from 'react-router-dom'
import ProviderForm from '../ProviderForm'

const LoanRepayment = () => {
  return (
    <div className="loanOuterMost">
    <div className="loanOut">
      <div className="dashboardBtn button mt-3 px-5">
        <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
          <span>
            <Link to={"/retailer-dashboard"}> Dashboard </Link>
            {">"} Loan Repayment
          </span>
        </button>
      </div>
      <div className="loanInner flex gap-5 p-3">
        
        <ProviderForm
          heading={"Loan Repayment"}
          label1={"Provider :"}
          option1={"Capri Global Housing Finance"}
          option2={"Cars24 Financial Services Private Limited"}
          option3={"Arohan Financial Services Ltd"}
          option4={"Axis Finance Limited"}
          label2={"Loan ID :"}
          data={"Loan ID"}
        />
        <div className="loanImage bg-white h-[60vh] w-[60%] p-5 ">
          <img
            className="loanImage h-[100%] m-auto"
            src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1738824373/images_fdt4sv.png"
            alt="loanImage"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoanRepayment