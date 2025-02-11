import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReqForm = () => {
    const navigate = useNavigate()
    const handleClose=()=>{
        navigate("/retailer-dashboard")
    }
  return (
    <div className='reqFormOuterMost'>
        <div className="reqFormOut">
            <div className="reqFormInner">
                <form className='reqForm grid grid-cols-3 gap-5'>
                    <div className="reqFormHead">
                        <label htmlFor='reqFormLabel'>
                            <span>Bank Name </span>
                            <span className='text-red-600'>*</span>
                        </label>
                        <select className='reqFormInput text-gray-700 w-full outline-none border-2 p-2 my-2 rounded-md'>
                            <option disabled selected>Select Bank</option>
                            <option>SBI Bank</option>
                            <option>Axis Bank</option>
                            <option>Kotak Bank</option>
                        </select>
                    </div>
                    <div className="reqFormHead">
                        <label htmlFor='reqFormLabel'>
                            <span>Payment Method </span>
                            <span className='text-red-600'>*</span>
                        </label>
                        <select className='reqFormInput text-gray-700 w-full outline-none border-2 p-2 my-2 rounded-md'>
                            <option disabled selected>Select Payment</option>
                            <option>Cash</option>
                            <option>RTGS/ NEFT</option>
                            <option>UPI/ Barcode</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="reqFormHead">
                        <label htmlFor='reqFormLabel'>
                            <span>Payment Date </span>
                            <span className='text-red-600'>*</span>
                        </label>
                       <input type='date' className='reqFormInput text-gray-700 w-full outline-none border-2 p-2 my-2 rounded-md' placeholder='' />
                    </div>
                    <div className="reqFormHead">
                        <label htmlFor='reqFormLabel'>
                            <span>Amount </span>
                            <span className='text-red-600'>*</span>
                        </label>
                       <input type='number' className='reqFormInput text-gray-700 w-full outline-none border-2 p-2 my-2 rounded-md' placeholder='Amount' />
                    </div>
                    <div className="reqFormHead">
                        <label htmlFor='reqFormLabel'>
                            <span>Bank Ref Nnumber </span>
                            <span className='text-red-600'>*</span>
                        </label>
                       <input type='text' className='reqFormInput text-gray-700 w-full outline-none border-2 p-2 my-2 rounded-md' placeholder='Bank Ref Nnumber' />
                    </div>
                    <div className="reqFormHead">
                        <label htmlFor='reqFormLabel'>
                            <span>Slip Upload </span>
                            <span className='text-red-600'>*</span>
                        </label>
                       <input type='file' className='reqFormInput text-gray-700 w-full outline-none border-2 p-2 my-2 rounded-md' />
                    </div>                 
                </form>
                <div className='saveAndClose flex gap-5 my-5'>
                    <div className='save'>
                    <button className="serachBtn bg-blue-600 rounded-md text-white px-5 py-2">
                Save Now
              </button>
                    </div>
                    <div className='close'>
                    <button onClick={handleClose} className="serachBtn bg-gray-500 rounded-md text-white px-5 py-2">
                Close
              </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReqForm