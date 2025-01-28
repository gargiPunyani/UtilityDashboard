import React from 'react'
import logo from "../../../Components/Assests/webwiseLogo.png"
import { Link } from 'react-router-dom'

const OtpVerify = () => {
  return (
    <div className=' otpVerifyOutMost'>
        <div className='OtpVerifyOuter text-gray-800'>
            <div className='forgotPassInner md:mt-20 lg:mt-10  '>
                <div className='forgotPassDataReq pt-6 lg:pt-10 bg-white shadow-lg h-screen md:h-auto md:w-[50%] lg:w-[30%] m-auto '>                
                <div className='logo w-[220px] sm:w-[250px]  md:w-[300px] m-auto'>
                    <img src={logo} alt='webwise-logo'/>
                </div>
                <div className='forgotPassDetials p-10'>
                    <form>
                        <label htmlFor='mobileNumber' className='text'>
                            Enter OTP:
                        </label>
                        <div className='mobileNumberInput mt-2 w-full '>
                        <input type='tel' placeholder='Ex. 2341' minLength={4} maxLength={4} className='w-full bg-slate-100  border-2 border-gray-600 rounded-lg outline-none p-2'/>
                        </div>
                        <div className='forgotBtn mt-5'>
                            <button className='forgotButton rounded-md outline-none shadow-lg w-full bg-blue-500 p-2 text-white' type='submit'>Verify</button>
                        </div>
                    </form>
                <div className='signInOption underline mt-5 text-gray-400 hover:text-blue-400 text-center'>
                <Link to={"/"}>
                    <p>Back to Sign In</p>
                </Link>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default OtpVerify