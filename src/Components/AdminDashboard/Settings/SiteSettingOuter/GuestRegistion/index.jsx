import React from 'react'

const GuestRegistraion = () => {
  return (
    <div>
        <div className="siteSettingOuter text-sm p-5 rounded-2xl mt-7 bg-white shadow-lg">
        <div className="siteSettingInner">
          <div className="siteSetting uppercase font-semibold">
            <h3>Guest Registraion Settings</h3>
          </div>
          <hr/>
          <div className='registrationDetails mt-7 '>
            <form className='registrationForm grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='guestDetails text-gray-600'>
                    <label className='text-black'>Registraion Status</label>
                    <div className='guestOptions mt-2'>
                        <select className='outline-none border-2 rounded-lg w-full p-2 '>
                            <option>Enable</option>
                            <option>Disable</option>
                        </select>
                    </div>
                </div>
                <div className='guestDetails text-gray-600'>
                    <label className='text-black'>Default Scheme</label>
                    <div className='guestOptions mt-2'>
                        <select className='outline-none border-2 rounded-lg w-full p-2 '>
                        <option selected hidden>Select Scheme</option>
                            <option>Franchise1(FSDS) Package </option>
                            <option>Franchise2(FSDS) Package </option>
                            <option>Super Distributor(SDS) Package</option>
                            <option>Retailer</option>
                            <option>Chagan's</option>
                        </select>
                    </div>
                </div>
                <div className='guestDetails text-gray-600'>
                    <label className='text-black'>Default Member Type</label>
                    <div className='guestOptions mt-2'>
                        <select className='outline-none border-2 rounded-lg w-full p-2 '>
                            <option>Enable</option>
                            <option>Disable</option>
                        </select>
                    </div>
                </div>
                <div className='guestDetails text-gray-600'>
                    <label className='text-black'>Default Parents</label>
                    <div className='guestOptions mt-2'>
                        <select className='outline-none border-2 rounded-lg w-full p-2 '>
                            <option>Super Admin</option>
                            <option>Retailer</option>
                        </select>
                    </div>
                </div>
                <div className='guestDetails text-gray-600'>
                    <label className='text-black'>Default State</label>
                    <div className='guestOptions mt-2'>
                        <select className='outline-none border-2 rounded-lg w-full p-2 '>
                            <option>Enable</option>
                            <option>Disable</option>
                        </select>
                    </div>
                </div>
                <div className='guestDetails text-gray-600'>
                    <label className='text-black'>Default City</label>
                    <div className='guestOptions mt-2'>
                        <select className='outline-none border-2 rounded-lg w-full p-2 '>
                            <option selected hidden>Unknown</option>
                            <option>Enable</option>
                            <option>Disable</option>
                        </select>
                    </div>
                </div>
                
            </form>
          </div>
          </div>
          </div>
    </div>
  )
}

export default GuestRegistraion