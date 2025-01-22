import React from 'react'
import SideNavbar from '../../../../SharedComponent/SideNavbar'
import MainNav from '../../../../SharedComponent/MainNavbar'
import { Link } from 'react-router-dom'

const NewPackage = () => {
    const handleSubmit=()=>{

    }
  return (
    <div className='newPackageOuterMost'>
        <div className='newPackageOuter'>
        
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Package Setting
                </span>
              </button>
            </div>
            <div className='newPackageInner bg-white p-5 m-5 rounded-lg shadow-xl'>
            <div className="fieldList uppercase font-medium mb-3">
                <h3>New Package </h3>
              </div>
              <hr/>

                <form className='packageForm grid grid-cols-2 mt-5 gap-10'>
                    <div className='newpackageForm'>
                        <label htmlFor='packageName'>Package Name:</label>
                        <div className='packageData'>
                        <input type='text' className='packageInput mt-2 w-full border-2 outline-none rounded-lg p-2 '  placeholder='Package Name' />
                        </div>
                    </div>
                    <div className='newpackageForm'>
                        <label htmlFor='Commision'>Commission:</label>
                        <div className='packageData'>
                        <input type='text' className='packageInput mt-2 w-full border-2 outline-none rounded-lg p-2 ' placeholder='Commission' />
                    </div>
                    </div>
                    <div className='addPackageBtn '>
                    <button className='addPackageBtn bg-green-600 text-white px-3 py-2 rounded-lg w-auto' onClick={handleSubmit} >Add Package</button>
                    </div>
                </form>
            </div>
            </div>
    </div>
  )
}

export default NewPackage