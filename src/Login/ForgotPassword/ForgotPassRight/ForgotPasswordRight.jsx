import React from 'react'
import logo from "../../../Assests/webwiseLogo.png"
import { Link, useNavigate } from 'react-router-dom'

const ForgotPasswordRight= () => {
    const navigate = useNavigate()
    
    const handleOtp=()=>{
      navigate("/verify-otp")
    }
  return (
    <div className='forgotPassOuterMost'>
        <div className='forgotPassOuter text-gray-800'>
            <div className='forgotPassInner md:h-screen m-auto md:bg-white lg:mr-[20%]'>
                <div className='forgotPassDataReq lg:pt-10 bg-white'>                
                <div className='logo w-[220px] sm:w-[250px] md:pt-[20%] md:w-[300px] m-auto'>
                    <img src={logo} alt='webwise-logo'/>
                </div>
                <div className='forgotPassDetials py-2 px-10 md:p-10'>
                    <form>
                        <label htmlFor='mobileNumber' className='text'>
                            Mobile Number:
                        </label>
                        <div className='mobileNumberInput mt-2 w-full '>
                        <input type='tel' required placeholder='Mobile Number' minLength={10} maxLength={10} className='w-full bg-slate-100  border-2 border-gray-600 rounded-lg outline-none p-2'/>
                        </div>
                        <div className='forgotBtn mt-5'>
                            <button className='forgotButton rounded-md outline-none shadow-lg w-full bg-blue-500 p-2 text-white' type='submit' onClick={handleOtp}>Reset Password</button>
                        </div>
                    </form>
                <div className='signInOption underline mt-5 text-gray-400 hover:text-blue-400 text-center'>
                <Link to={"/login"}>
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

export default ForgotPasswordRight