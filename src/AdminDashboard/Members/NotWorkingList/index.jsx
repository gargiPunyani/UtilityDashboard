import React, { useState } from 'react'
import ExecutiveTable from '../FieldExecutive/FieldExecutiveTable'
import SideNavbar from '../../../SharedComponent/SideNavbar'
import MainNav from '../../../SharedComponent/MainNavbar'
import { Link } from 'react-router-dom'

const NotWorkingList = () => {
    const columns=[ {
        name: "User ID",
        id:"id",
      },{
        name: "Name",
        id:"name",
      },{
        name: "Mobile",
        id:"mobile",
      },{
          name: "Balance",
          id:"balance",
        }, {
          name: "Member Type",
          id:"mType",
        }, {
            name: "Last Transaction",
            id:"lastTrans",
          },]
    const rows=[{
        id:101,
        name:"Riya",
        mobile:"9874450012",
        balance:"220.00",
        mType:"SUPER DISTRIBUTOR (SDS)",
        lastTrans:"30-09-24 20:00:30"
    },{
        id:102,
        name:"Ramesh",
        mobile:"7556200136",
        balance:"20.00",
        mType:" DISTRIBUTOR (DS)",
        lastTrans:"Not Working"
    },{
        id:103,
        name:"Sudesh",
        mobile:"6692500124",
        balance:"10.00",
        mType:"RETAILER (RT)",
        lastTrans:"Not Working"
    },{
        id:104,
        name:"Priya",
        mobile:"9874450012",
        balance:"9900.00",
        mType:"SUSPENDED USER (SU)",
        lastTrans:"10-10-23 20:00:30"
    },]
    const [records, setRecords]= useState(rows)
    const handleChange=(e)=>{
        console.log(e.target.value)
        const newData= rows.filter((row)=>{
            return row.lastTrans.toLowerCase().includes(e.target.value.toLowerCase()) || row.name.toLowerCase().includes(e.target.value) || row.mobile.includes(e.target.value) 
            })
        setRecords(newData)
    }
    return (
    <div className='notWorkingListOuterMost'>
        <div className='notWorkingListOuter'>
       
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton relative p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Not Working User List
                </span>
              </button>
            </div>
            <div className="packageSettingInner m-5 rounded-lg text-xs sm:text-sm md:text-md p-3 bg-white shadow-lg">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Not Working User List </h3>
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

export default NotWorkingList