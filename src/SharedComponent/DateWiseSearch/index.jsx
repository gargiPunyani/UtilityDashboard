import { faDownload, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DateWiseSearch = ({handleChange}) => {
  return (
    <div className='dateOuetrMost'>
        <div className='dateOuter'>
            <div className='dateInner lg:flex gap-8 items-center text-xs'>
                <div className='date md:flex gap-8 w-full lg:w-[65%] mb-3' onChange={handleChange}>
               <div className='dateFrom w-full'>
                    <p>From: *</p>
                    <input type='date' className='dateFromInput mt-2 cursor-pointer w-full border-2 p-2 rounded-md' />
                </div>
                <div className='dateTo mt-2 md:m-0 w-full'>
                    <p>To: *</p>
                    <input type='date' className='dateToInput mt-2 cursor-pointer w-full border-2 p-2 rounded-md' />
                </div>
                </div>
                <div className='searchAndDownload xs:flex gap-2 w-full lg:w-[30%]' >                
                    <div className='searchBtn text-md m-2 text-white '>
                    <button className='searchButton  w-full  bg-blue-600 py-2 px-6 text-xs lg:text-sm rounded-md'><FontAwesomeIcon icon={faSearch}/> Search </button>
                </div>
                <div className='searchBtn text-md m-2 text-white '>
                    <button className='searchButton w-full bg-green-600 py-2 px-6 text-xs lg:text-sm rounded-md'><FontAwesomeIcon icon={faDownload}/> Download </button>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default DateWiseSearch