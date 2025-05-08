import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExecutiveTable from '../../AdminDashboard/Members/FieldExecutive/FieldExecutiveTable'

const SolvedDisputes = () => {
  const columns = [{
    name: "Ticket No.",
    id: "ticketNo",
  },{
    name: "TXN Date",
    id: "tax",
  },{
    name: "User",
    id: "user",
  },{
    name: "Dispute Date",
    id: "date",
  },{
    name: "Provider",
    id: "provider",
  },{
    name: "Number",
    id: "number",
  },{
    name: "Amount",
    id: "amount",
  },{
    name: "Reason",
    id: "reason",
  },{
    name: "Status",
    id: "status",
  },{
    name: "Recharge ",
    id: "recharge",
  },{
    name: "Action",
    id: "action",
  }];
const rows = [{
    ticketNo: "001",
    tax: "5%", 
    user:"abc",
    provider:"xyz",
    date:"20-12-24",
    number:"98856447",
    amount:20000,
    reason:"",
    status:"Enabled",
    recharge:"22",
    action:<div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
  },
  {
    ticketNo: "002",
    tax: "5%", 
    user:"cde",
    provider:"xyz",
    date:"20-12-24",
    number:"98856447",
    amount:20000,
    reason:"",
    status:"Enabled",
    recharge:"22",
    action:<div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
  },{
    ticketNo: "003",
    tax: "5%", 
    user:"efg",
    provider:"xyz",
    date:"20-12-24",
    number:"98856447",
    amount:20000,
    reason:"",
    status:"Enabled",
    recharge:"22",
    action:<div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
  },{
    ticketNo: "004",
    tax: "5%", 
    user:"ghi",
    provider:"xyz",
    date:"20-12-24",
    number:"98856447",
    amount:20000,
    reason:"",
    status:"Enabled",
    recharge:"22",
    action:<div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
  },{
    ticketNo: "005",
    tax: "5%", 
    user:"ijk",
    provider:"xyz",
    date:"20-12-24",
    number:"98856447",
    amount:20000,
    reason:"",
    status:"Enabled",
    recharge:"22",
    action:<div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5985E1" >
            <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
          </svg>
          <span style={{ marginLeft: "8px", fontSize: "14px", color: "#00000" }}>
            Edit
          </span>
        </div>
  }];
  const [records, setRecords]=useState(rows)
  const handleChange = (e) => {
    console.log(e.target.value);
    const data= rows.filter((row)=>{
      return( 
        row.ticketNo.includes(e.target.value) || 
        row.number.includes(e.target.value)||
        row.provider.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.user.toLowerCase().includes(e.target.value.toLowerCase())
      )
    })
    setRecords(data)
  };
  return (
    <div className='solvedDisputesOutMost'>
      <div className='solvedDisputesOuter'>
            <div className="dashboardBtn button mb-2 p-3">
              <button className="dahsboardButton  p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                <span>
                  <Link to={"/dashboard"}> Dashboard </Link>
                  {">"} Solve Dispute
                </span>
              </button>
            </div>
          <div className="aeps m-5 rounded-lg text-xs sm:text-sm md:text-md bg-white shadow-lg p-3 ">
                <div className="fieldList uppercase font-medium mb-5">
                  <h3>Solve Dispute</h3>
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

export default SolvedDisputes