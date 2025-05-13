import React from 'react'
import ForgotPassLeft from './ForgotPassLeft/ForgotPassLeft'
import ForgotPasswordRight from './ForgotPassRight/ForgotPasswordRight'

const ForgotPass = () => {
  return (
    <div className='forgotPassOuterMost'>
        <div className='forgotPassOuter '>
            <div className='forgotpass grid grid-cols-1 items-center md:flex lg:shadow-2xl p-2 justify-between w-full '>
                <div className='passLeft md:w-[50%] lg:w-[65%]'>
                <ForgotPassLeft/>
                </div>
                <div className='passRight md:w-[50%] lg:w-[35%] '>
                <ForgotPasswordRight/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ForgotPass