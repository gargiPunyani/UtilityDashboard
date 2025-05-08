import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable'

const ContactEnquiry = () => {
    const columns=[{
        name: "Date",
       id:"date",
      },{
        name: "Name",
       id:"name",
      },{
        name: "Email",
       id:"email",
      },{
        name: "Mobile",
       id:"number",
      },{
        name: "Message",
       id:"message",
      },{
        name: "Action",
       id:"action",
      },]
      const data =[{}]
    
      const [records, setRecords]=useState( data)
      const handleChange= (e)=>{
        console.log(e.target.value)
        const newData= data.filter((row)=>{
            return row.number.includes(e.target.value) || row.date.includes(e.target.value) || row.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRecords(newData)
      }
  return (
    <div className='contactEnquiryOutMost'>
        <div className='contactEnquiryOuter'>
       
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Contact Enquiry
                </span>
              </button>
            </div>
            <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-xl">
                <div className="fieldList uppercase font-medium">
                  <h3>Contact Enquiry</h3>
                </div>
              <hr />
              <div className="AepsTableData" onChange={handleChange}>
                <ExecutiveTable columns={columns} data={records} />
              </div>
            </div>
          </div>
        </div>
)
}

export default ContactEnquiry