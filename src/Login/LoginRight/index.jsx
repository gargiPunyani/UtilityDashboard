import React from 'react'
import loginImage from "../../Assests/login-illustrator.svg"

const LoginRight = () => {
  return (
    <div className='loginRightOuterMost w-full'>
        <div className='loginRightOuter'>
            <div className='loginImage md:mt-20 lg:h-[500px] lg:w-[500px] m-auto md:flex items-center '>
                <img src={loginImage} alt='loginImage'/>
            <div className='loginRightInner lg:before:content-[url("Assests/Vector2.svg")] lg:before:absolute lg:before:top-[13px] lg:before:left-[13%]
            lg:after:content-[url("Assests/Vector1.svg")] lg:after:absolute lg:after:bottom-0 lg:after:w-[20%] lg:after:right-0'>
                </div> 
            </div>
        </div>

    </div>
  )
}

export default LoginRight