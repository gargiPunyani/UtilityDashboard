import React, { useState } from 'react'
import SideNavbar from '../../SharedComponent/SideNavbar'
import MainNav from '../../SharedComponent/MainNavbar'
import { Link, useNavigate } from 'react-router-dom'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable'
import { date, number } from 'yup'

const AgentOnboarding = () => {
    const columns=[{
        name: "ID",
        id:"id",
      },{
        name: "Date",
        id:"date",
      },{
        name: "User Name",
        id:"uName",
      },{
        name: "First Name",
        id:"fName",
      },{
        name: "Last Name",
        id:"lName",
      },{
        name: "Mobile",
        id:"mobile",
      },{
        name: "Email",
        id:"email",
      },{
        name: "Aadhar Number",
        id:"aadhar",
      },{
        name: "Pan Number",
        id:"pan",
      },  {
        name: "ShopName",
        id:"shop",
      },{
        name: "Pin Code",
        id:"pinCode",
      },  {
        name: "Address",
        id:"address",
      },{
        name: "Account Number",
        id:"accountNo",
      },{
        name: "IFSC Code",
        id:"ifsc",
      },{
        name: "State",
        id:"state",
      },{
        name: "District",
        id:"district",
      },{
        name: "City",
        id:"city",
      },{
        name: "Status",
        id:"status",
      } ,{
        name: "Action",
        id:"action",
      },]
      const rows =[{
        id:1,
        date:"01-01-24",
        uName:"test",
        fName:"tester",
        lName:"Name",
        mobile:"987654456",
        email:"ttest@gmail.com",
        aadhar:"11207665900988",
        pan:"UPB009D",
        shop:"Delhi",
        pinCode:"110005",
        address:"New Delhi",
        accountNo:"665533009876",
        ifsc:"sbib008",
        state:"Delhi",
        district:"Delhi",
        city:"Delhi",
        status:"Enabled",
        action:""
      },{
        id:2,
        date:"10-05-24",
        uName:"abcd",
        fName:"anuj",
        lName:"tyagi",
        mobile:"987654456",
        email:"ttest@gmail.com",
        aadhar:"220055008765",
        pan:"UPB009D",
        shop:"Delhi",
        pinCode:"110005",
        address:"New Delhi",
        accountNo:"665533009876",
        ifsc:"sbib008",
        state:"Delhi",
        district:"Delhi",
        city:"Delhi",
        status:"Enabled",
        action:""
      }]
      const navigate= useNavigate()
    
      const [records, setRecords]=useState(rows)
      const handleChange= (e)=>{
        console.log(e.target.value)
        const newData= rows.filter((row)=>{
            return( 
              row.fName.toLowerCase().includes(e.target.value.toLowerCase()) || row.lName.toLowerCase().includes(e.target.value.toLowerCase()) || 
              row.uName.toLowerCase().includes(e.target.value.toLowerCase()) || row.pinCode.includes(e.target.value) ||
              row.aadhar.includes(e.target.value) || row.pan.toLowerCase().includes(e.target.value.toLowerCase()) ||
              row.mobile.includes(e.target.value) || row.accountNo.includes(e.target.value) || row.date.includes(e.target.value)
         ) })
         setRecords(newData)
      }
      const handleNewBank=()=>{
        navigate("/new-bank-account")
      }
  return (
    <div className="agentOnboardingOutMost">
        <div className='agentOnboardOut'>
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Agent Onboarding List
                </span>
              </button>
            </div>
            <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-xl">
            <div className="aeps text-xs xs:flex items-center justify-between gap-5 sm:text-sm md:text-md p-3 ">
                <div className="fieldList uppercase font-medium">
                  <h3>Agent Onboarding List</h3>
                </div>
                <div className='addNewBank mt-2 xs:mt-0 '>
                  <button className='addNewBankBtn rounded-lg bg-green-500 outline-none cursor-pointer text-white p-2' onClick={handleNewBank} >Add New </button>
                </div>
                </div>
              <hr />
              <div className="AepsTableData" onChange={handleChange}>
                <ExecutiveTable columns={columns} rows={records} />
              </div>
            </div>
          </div>
        </div>

  )
}

export default AgentOnboarding