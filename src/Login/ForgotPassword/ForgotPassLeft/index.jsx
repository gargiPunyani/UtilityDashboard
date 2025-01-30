import React from 'react'
import forgotpass from "../../../Assests/Twofactorauthentication.svg"

const ForgotPassLeft = () => {
  return (
    <div className='passLeftOuterMost w-[100%]'>
    <div className='passLeftOuter'>
    <div className='passLeftInner items-center lg:ml-[10%] m-auto lg:h-screen w-[100%] bg-white'>
       <div className='beforeAfter hidden lg:block lg:absolute 
        lg:before: content-[url("https://res.cloudinary.com/dixfg1bvv/image/upload/v1735800875/Ellipses4_ryanez.svg")] lg:before:top-0 lg:after:content-[url("https://res.cloudinary.com/dixfg1bvv/image/upload/v1735800875/Ellipses3_llysdl.svg")] after:top-0 after:left-[80%] '></div>
        <img className='forgotpassImage h-[50vh] sm:h-[75vh] lg:h-[90vh] m-auto relative' src={forgotpass} alt='passwordSvg'/>
        {/* <div className='beforeAfter absolute
        after:content-[url("https://res.cloudinary.com/dixfg1bvv/image/upload/v1735800875/Ellipses3_llysdl.svg")] after:top-0 after:right-0 '></div> */}

    </div>

    </div>
    </div>
  )
}

export default ForgotPassLeft