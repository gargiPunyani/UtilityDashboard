import React from 'react'
import { Link } from 'react-router-dom'

const Payout = () => {
  return (
    <div className='payouterMost'>
        <div className="payOuter">
        <div className="dashboardBtn button mt-3 px-5">
            <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
              <span>
                <Link to={"/retailer-dashboard"}> Dashboard </Link>
                {">"} Payout
              </span>
            </button>
          </div>
          <div className="payInner">
          <div className="upiTransfer bg-white w-[100%] h-[60vh] shadow-lg rounded-md p-4">
            <div className="providerFormHead uppercase mb-3 font-medium">
              <h3>Payout</h3>
            </div>
            <hr />
            <div className='payInner'>
                <label htmlFor='mobile'>Mobile :</label>
                <input className='payoutInput border-2 outline-none p-2 mt-2 rounded-md text-gray-600' type= "number" placeholder='Mobile Number' max={10} min={10}/>
                <button  className='serachBtn bg-blue-600 text-white px-5 py-3'>Search</button>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Payout