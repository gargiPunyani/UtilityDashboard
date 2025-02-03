import React, { useState } from 'react'
import { changePass } from '../../../../constant'
import axios from 'axios'

const Reset = () => {
  const [passData, setPassData] = useState({
      confrim_otp:"",
      password:"",
      old_password: "",
      api_token: localStorage.getItem("token")
    })

  const handleChange = (e) => {
    setPassData({ ...passData, [e.target.id]: e.target.value });
  };
  const resetPass= async(item, api_token, password,order_id, confrim_otp, old_password)=>{
    try {
      const response= await axios.post(`https://soft.delhitech.in/api/app/password-reset-confirm `,{
        api_token : passData.api_token,
        confrim_otp: passData.confrim_otp ,
        password:passData.password ,
        old_password: passData.old_password,
        order_id : sessionStorage.getItem("order_id")
      })
      if(response.data.status === "success"){
      alert(response.data.message)
      }
      else alert(response.data.message)
      // console.log(response.data)
    } catch (error) {
      return error
    }}
    
    const handleOtp=async()=>{
      const api_token= localStorage.getItem("token")
      await resetApi (api_token)
    }

    const api_token = localStorage.getItem("token")
    const old_password= localStorage.getItem("password")
    const order_id= sessionStorage.getItem("order_id")

  const handleSubmit=async(e, password, confrim_otp)=>{
      e.preventDefault()
      // console.log(passData)
      await resetPass(api_token, confrim_otp, old_password, password, order_id)}

      const resetApi = async(api_token)=>{
        try {
          const response= await axios.post(`https://soft.delhitech.in/api/app/password-reset-otp `,{
            api_token: localStorage.getItem("token"),
          })
          // console.log("reset:", response.data )
          sessionStorage.setItem("order_id",  response.data.order_id )
          console.log( response.data.order_id)
          // console.log(api_token, "token" )
        } catch (error) {
          // console.log(error)
          return(error)
        }
      }
     
  return (
    <div className='passwordOuterMost '>
        <div className='passwordOuter'>
            <div className='passwordInner'>
            <div className='presentAddressInfo text-black uppercase font-semibold mb-5'>
          <h3>Change Password</h3>
        </div>
        <hr/>
        <div className='changePass '>
          <form  onSubmit={handleSubmit}>
          {changePass.map((item)=>{
            return(
              <div className='changePassForm w-full mt-3 sm:flex gap-3 sm:text-justify items-center' key={item.id} >
          <label htmlFor='passwordchange' className='passwordchange sm:w-1/2 sm:p-3'>
            {item.label}
          </label>
          <input type='text' value={passData[item.id] || ""} onChange={handleChange} id={item.id} className='passwordInput p-2 border-2 mt-2 rounded-md w-full outline-none ' placeholder={item.detail}/>
          </div>
        )})}
        <div className='resetButtons xs:flex gap-5'>       
        <div className='changePassButton mt-5'onClick={handleOtp}>
        <button className='changePassBtn p-2 bg-green-500 text-white rounded-lg'>Send Otp</button>
        </div>
        <div className='changePassButton mt-5'>
        <button type='submit' className='changePassBtn p-2 bg-red-500 text-white rounded-lg'>Change Password </button>
        </div>
        </div>
 
        </form>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Reset