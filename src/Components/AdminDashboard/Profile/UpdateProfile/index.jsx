import React from 'react'
import { adminDetails, permanentAddress } from '../../../constant'

const UpdateForm = () => {
  return (
    <div className='updateFormOuter'>
      <div className='updateFormInner text-xs sm:tex-sm text-gray-600'>
          <div className='personalInfoOuter' >
        <div className='personalInfo text-black uppercase font-semibold mb-5'>
          <h3>Personal Information</h3>
        </div>
        <hr/>
        <div className='memberTypeInfo p-3'>
         <form className='personalInfoForm  sm:flex items-center w-full gap-10 sm:text-justify'>
          <label htmlFor='memberType' className='memberType w-[15%] '>Member Tye:</label>
          <select className='memberTypeSelect w-full bg-gray-100 text-slate-600 text-sm outline-none border-none sm:ml-6 mt-4 mb-4 p-2 rounded-md' name='member ' >
            <option>CBS</option>
          </select>
          </form>
          </div>            
      </div>
      <div className='adminPersonalInformation'>
      <div className='personalInfo text-black uppercase font-semibold mb-5'>
          <h3>Personal Details</h3>
        </div>
        <hr/>
        <div className='memberTypeInfo p-3'>
            {adminDetails.map((item)=>{
              return(
              <div className='personalDetailsForm' key={item.id}>
         <form className=' personalInfoForm sm:flex items-center w-full gap-10 sm:text-justify '>
          <label htmlFor='adminDetails' className='formLabel w-[15%]'>
              {item.name}:
          </label>
          <input readOnly className='adminDataInput bg-gray-100 text-slate-600 cursor-pointer sm:ml-6 mt-4 mb-4 p-2 outline-none border-none rounded-md text-sm w-full' type='text' value={item.detail}/>
        </form>       
        </div>     
              )})}      
        </div>
      </div>
      <div className='permanentAddress'>
      <div className='permanentAddInfo text-black uppercase font-semibold mb-5'>
          <h3>Personal Information</h3>
        </div>
        <hr/>
        <div className='addressInfo p-3'>
            {permanentAddress.map((item)=>{
              return(
              <div className='personalDetailsForm' key={item.id}>
         <form className=' permanentAddInfoForm sm:flex items-center w-full gap-10 sm:text-justify '>
          <label htmlFor='permanentAddInfo' className='formLabel w-[15%]'>
              {item.address}:
          </label>
          <input readOnly className='adminDataInput bg-gray-100 text-slate-600 cursor-pointer sm:ml-6 mt-4 mb-4 p-2 outline-none border-none rounded-md text-sm w-full' type='text' value={item.detail}/>
        </form>       
        </div>     
              )})}      
        </div>
      </div>
      <div className='presentAddress'>
        <div className='presentAddressInfo text-black uppercase font-semibold mb-5'>
          <h3>Present Address</h3>
        </div>
        <hr/>
        <form className=' presentAddressInfoForm sm:flex items-center w-full gap-10 sm:text-justify '>
          <label htmlFor='shop' className='formLabel w-[15%]'>
              Shop Name:
          </label>
          <input readOnly className='adminDataInput sm:ml-6 mt-4 mb-4 p-2 outline-none border-2 rounded-md w-full' placeholder='Speedify Payment' type='text' />
        </form>     
        <form className='presentAddressInfoForm sm:flex items-center w-full gap-10 sm:text-justify '>
          <label htmlFor='shop' className='formLabel w-[15%]'>
            Office Address:    
          </label>
          <input readOnly className='adminDataInput sm:ml-6 mt-4 mb-4 p-2 outline-none border-2 rounded-md w-full' placeholder='Delhi' type='text' />
        </form>   
        </div>
        <hr/>
        <div className='updateProfile mt-5'>
          <button className='updateProfileBtn bg-red-600 p-2 rounded-lg text-white outline-none border-none'> Update Profile </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateForm