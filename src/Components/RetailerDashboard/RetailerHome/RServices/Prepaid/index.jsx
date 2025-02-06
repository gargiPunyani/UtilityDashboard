import React from 'react'
import { Link } from 'react-router-dom'

const Prepaid = () => {
  return (
    <div className='prepaidOuterMost'>
      <div className="dashboardBtn button mt-3 px-5">
            <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
              <span>
                <Link to={"/retailer-dashboard"}> Dashboard </Link>
                {">"} Mobile Prepaid
              </span>
            </button>
          </div>
      <div className='prepaidOuter grid grid-cols-2 p-5'>
        <div className='prepaidInner bg-no-repeat h-[63vh] w-full m-auto opacity-80
        bg-[url(https://res.cloudinary.com/dixfg1bvv/image/upload/v1738758486/hand-with-mobile-phone-and-sim-card-operator-selection_uoikzm.jpg)] '>
        </div>
        <div className='prepaidForm bg-white w-auto p-4 uppercase'>
          <form>
            <div className='formHead uppercase font-semibold mb-3'>
              Mobile Prepaid
            </div>
            <hr/>

          <div className='prepaidFormData my-5 '>
            <label htmlFor='provider' className='font-medium'>
              Provider: 
            </label>
            <select  className='prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none' >
              <option>Airtel</option>
              <option>JIO</option>
              <option>Bsnl</option>
              <option>idea</option>
              <option>Mtnl </option>
              <option>Mtnl Delhi</option>
              <option>Mtnl Mumbai</option>
              <option>Vodafone</option>
            </select>
          </div>
          <div className='prepaidFormData my-5 '>
            <label htmlFor='number' className='font-medium'>
              Mobile Number: 
            </label>
            <div className='prepaidFormDataInput'>
              <input className='prepaidFormInput w-full uppercase mt-2 text-gray-600 border-2 rounded-md p-2 outline-none'
              placeholder='MOBILE NUMBER'/>
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
      </div>
    </div>
  )
}

export default Prepaid