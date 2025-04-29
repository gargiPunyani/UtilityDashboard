import React from 'react'
import { Link } from 'react-router-dom'
import ProviderForm from '../ProviderForm'

const LoanRepayment = () => {
  return (
    <div className="loanOuterMost">
    <div className="loanOut">
      <div className="dashboardBtn button mt-3 px-5">
        <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
          <span>
            <Link to={"/retailer-dashboard"}> Dashboard </Link>
            {">"} Loan Repayment
          </span>
        </button>
      </div>
      <div className="loanInner grid lg:flex gap-5 p-3">
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
        <div className="loanImage order-2 sm:order-1 bg-white hidden sm:block h-[50vh]  lg:h-[62vh] lg:w-[60%] p-5 ">
          <img
            className="loanImage h-[100%] m-auto"
            src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1738908718/bank-credit-loan-payment_ksowip.jpg"
            alt="loanImage"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoanRepayment