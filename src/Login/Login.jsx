import React from 'react'
import LoginLeft from './LoginLeft/LoginLeft'
import LoginRight from './LoginRight/LoginRight'

const Login = () => {
  return (
    <div className='login'>
        <div className='loginPage flex flex-col md:flex-row h-screen '>
            <div className='loginLeftSection order-2 md:order-1 p-3 md:w-[50%] lg:w-[35%]'>
            <LoginLeft/>
            </div>
            <div className='loginRightSection hidden sm:block sm:order-1 md:order-2 md:w-[50%] p-3 lg:w-[65%]'>
            <LoginRight/>
        </div>
        </div>
    </div>
  )
}

export default Login