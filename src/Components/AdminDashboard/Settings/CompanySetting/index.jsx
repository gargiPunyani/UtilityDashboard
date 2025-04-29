import React from 'react'
import { Link } from 'react-router-dom'
import CompanyStng from './companyStng'

const CompanySetting = () => {
  return (
    <div className='companySettingOuterMost '>
            <div className='companySettingOuter p-5'>
            <div className="dashboardBtn button mb-2">
                  <button className="dahsboardButton p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                    <span>
                      <Link to={"/dashboard"}> Dashboard </Link>
                      {">"} Company Setting
                    </span>
                  </button>
                </div>
                <CompanyStng/>
            </div>
            </div>
  )
}

export default CompanySetting