import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable'

const CompanyStaff = () => {
     const columns=[{
        name: "ID",
        id:"id",
      },{
        name: "Joining Date",
        id:"date",
      },{
        name: "Name",
        id:"name",
      },{
        name: "Mobile Number",
        id:"number",
      },{
        name: "Member Type",
        id:"member",
      },{
        name: "Normal Balance",
        id:"normalBal",
      },{
        name: "Status",
        id:"status",
      }]
      const data =[{
        id:"1",
        date:"10-09-24",
        name:"Binod",
        number:"887900876",
        member:"FieldExecutive(FE)",
        normalBal:"1000.00",
        status:"Enable"
      },{
        id:"2",
        date:"03-12-24",
        name:"Binod",
        number:"998560012",
        member:"Retailer(RT)",
        normalBal:"1000.00",
        status:"Disable"
      }]
    
      const [records, setRecords]=useState(data)
      const handleChange= (e)=>{
        console.log(e.target.value)
        const newRecord= data.filter((row)=>{
            return row.name.toLowerCase().includes(e.target.value.toLowerCase()) || row.number.includes(e.target.value)
        })
        setRecords(newRecord)
      }
  return (
    <div className='companyStaffOutMost'>
        <div className='companyStaffOut'>
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Company Staff Permission
                </span>
              </button>
            </div>
          <div className="aeps m-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3> Company Staff Permission</h3>
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

export default CompanyStaff