import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footerOuter text-xs sm:text-sm mt-8'>
        <div className='footerInner'>
            <div className='footer text-center'>
                <p>&copy; Designed and developed by <Link to={"https://webwisestudio.in/"} className='text-blue-500'> Webwise Studio Pvt. Ltd. </Link> 2024 </p>
            </div>
        </div>    
    </div>
  )
}

export default Footer