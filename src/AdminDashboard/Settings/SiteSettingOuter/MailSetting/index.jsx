import React from 'react'
import { mailSettings } from '../../../../constant'

const MailSet = () => {
  return (
    <div className='mailSetOuterMost text-sm mt-7 bg-white p-5 rounded-2xl shadow-xl'>
        <div className='mailSetOuter'>
            <div className='mailsetInner'>
            <div className="siteSetting uppercase font-semibold">
            <h3>Mail Settings</h3>
          </div>
          <hr/>
          <div className='mailSetDetails'>
              <form className='mailSettingForm grid md:grid-cols-2 lg:grid-cols-3 mt-7 gap-4'>
            {mailSettings.map((item)=>{
                return(
                    <div className='mailSettingDetails ' key={item.id}>
                            <div className='maildtails text-gray-600'>
                                <label>{item.label}</label>
                                <div className='maildtails text-gray-600 mt-2'>
                                    <input className='maildtailsInput border-2 rounded-lg p-2 outline-none w-full' placeholder={item.input}/>
                                </div>
                            </div>
                    </div>
                )
            })}
            </form>
          </div>
            </div>
            <div className='gmailStng shadow-xl bg-white mt-5 '>
                <div className='gmailSetting bg-blue-600 text-white py-3 px-5 rounded-lg'>
                    <h3>Gmail Settings</h3>
                </div>
                <div className='gmail text-xs p-5 text-[0.45rem] sm:text-xs'>
                <p>Did you turn on the "Allow less secure apps" on? go to this link </p>
                <p className='text-blue-600 cursor-pointer'>https://myaccount.google.com/security?utm_source=chrome-settings</p>
                <p>Take a look at Sign-in & security -{'>'} Apps with account access menu. You must turn the option "Allow less secure apps" ON.</p>
                <div className='gmaildetails'>
                <p>If it still doesn't work try one of this:</p>
                <ul className='list-disc m-2 mx-5'>
                    <li>Go to <span className='text-blue-600 '> "https://accounts.google.com/DisplayUnlockCaptcha" </span>, and click continue and unlock your account for access through other media/sites</li>
                    <li>Use double quote in your Password: "your password" </li>
                </ul>
                </div>
                <p>And change your site setting mail password</p>
                <p>something gone wrong. We're working on it.</p>
                </div>
            </div>
            <div className='formSubmitbtn mt-5'>
                <button className='submitButton p-2 text-white rounded-lg bg-blue-600'>
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default MailSet