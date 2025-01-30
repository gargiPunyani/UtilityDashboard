import React from 'react'
import loginImage from "../../Assests/login-illustrator.svg"

const LoginRight = () => {
  return (
    <div className='loginRightOuterMost w-full'>
        <div className='loginRightOuter'>
            <div className='loginImage md:mt-20 lg:h-[500px] lg:w-[500px] m-auto md:flex items-center '>
                <img src={loginImage} alt='loginImage'/>
            <div className='loginRightInner lg:before:content-[url("https://res.cloudinary.com/dixfg1bvv/image/upload/v1735794934/Vector2_ghfskq.svg")] lg:before:absolute lg:before:top-[13px] lg:before:left-[13%]
            lg:after:content-[url("https://res.cloudinary.com/dixfg1bvv/image/upload/v1735794933/Vector1_q8pcrx.svg")] lg:after:absolute lg:after:bottom-0 lg:after:w-[20%] lg:after:right-0'>
                </div> 
            </div>
        </div>

    </div>
  )
}

export default LoginRight