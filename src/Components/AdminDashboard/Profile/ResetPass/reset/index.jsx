import React from 'react'
import { changePass } from '../../../../constant'

const Reset = () => {
  return (
    <div className='passwordOuterMost '>
        <div className='passwordOuter'>
            <div className='passwordInner'>
            <div className='presentAddressInfo text-black uppercase font-semibold mb-5'>
          <h3>Change Password</h3>
        </div>
        <hr/>
        <div className='changePass '>
          <form >
          {changePass.map((item)=>{
            return(
              <div className='changePassForm w-full mt-3 sm:flex gap-3 sm:text-justify items-center' key={item.id}>
          <label htmlFor='passwordchange' className='passwordchange sm:w-1/2 p-3'>
            {item.label}
          </label>
          <input type='password' className='passwordInput p-2 border-2 mt-2 rounded-md w-full outline-none ' placeholder={item.detail}/>
          </div>
        )})}
        <div className='changePassButton mt-5'>
        <button className='changePassBtn p-2 bg-red-500 text-white rounded-lg'>Change Password </button>
        </div>
        </form>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Reset