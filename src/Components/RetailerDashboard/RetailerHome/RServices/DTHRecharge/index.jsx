import React from 'react'
import { Link } from 'react-router-dom'

const DTHRecharge = () => {
  return (
    <div className='dthRechargeOuterMost'>
        <div className='dthRechargeOuter'>
            <div className='dthRechargeInner'>
            <div className="dashboardBtn button  mt-3 px-5">
            <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
              <span>
                <Link to={"/retailer-dashboard"}> Dashboard </Link>
                {">"} DTH Recharge
              </span>
            </button>
          </div>
          <div className='dthRecharge flex gap-5 p-4'>
          <div className='dthRechargeForm bg-white w-[45%] rounded-md shadow-lg p-4'>
          <form>
            <div className='formHead uppercase font-semibold mb-3'>
             DTH
            </div>
            <hr/>

          <div className='prepaidFormData my-5 '>
            <label htmlFor='provider' className='font-medium'>
              Provider: 
            </label>
            <select  className='prepaidFormInput w-full mt-2 text-gray-600 border-2 rounded-md p-2 outline-none' >
              <option>Airtel Digital TV</option>
              <option>Tata Sky</option>
              <option>Dish TV</option>
              <option>Sun Direct</option>
              <option>Videocon D2H </option>
             
            </select>
          </div>
          <div className='prepaidFormData my-5 '>
            <label htmlFor='number' className='font-medium'>
              DTH Number: 
            </label>
            <div className='prepaidFormDataInput'>
              <input className='prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none'
              placeholder='DTH NUMBER'/>
            </div>
          </div>
          <div className='prepaidFormData my-5 '>
            <label htmlFor='number' className='font-medium'>
              Amount: 
            </label>
            <div className='prepaidFormDataInput'>
              <input className='prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none'
              placeholder='Amount' type='number'/>
            </div>
          </div>
         
          <div className='payNow my-5'>
            <button type='submit' className='payNowBtn text-white bg-blue-600 py-2 px-5 rounded-lg '>Pay Now</button> 
          </div>
          </form>
          </div>
            <div className='dthRechargeBg h-auto bg-white rounded-md shadow-lg w-[70%]'>
                <div className='dthImage p-5 m-auto'>
            <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1738827616/dth-recharge_y0dxpm.png' alt='dthImage' className='m-auto' />
          </div>
          </div>
          </div>
            </div>
        </div>
    </div>
  )
}

export default DTHRecharge