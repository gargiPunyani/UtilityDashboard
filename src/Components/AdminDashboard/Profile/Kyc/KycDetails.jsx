import React from 'react'

const KycDetails = () => {
  return (
    <div className='kycOuterMost'>
        <div className='kycOuter text-xs sm:text-sm p-4'>
            <div className='kycHeading font-semibold uppercase mb-4'>
                <h4> Kyc Details </h4> 
            </div>
            <hr/>
            <div className='kycRequirements sm:flex items-center gap-6 justify-between mt-5 text-gray-600'>
                <div className='profilePhoto mb-2'>
                    <p>Profile Photo</p>
                    <div className='photoStatus text-red-600 text-xs'>
                       <p> Pending</p>
                    </div>
                </div>
                <div className='pdf border-2 mb-2 p-3 rounded-lg cursor-pointer'>
                    <input type='file'/>
                </div>
                <div className='uploadBtn w-28 sm:w-auto cursor-pointer p-3 text-white bg-red-600 rounded-md'>
                   <button> Upload File </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default KycDetails