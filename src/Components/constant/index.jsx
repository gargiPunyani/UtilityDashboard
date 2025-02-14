import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAnglesRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "react-router-dom";

export const sidebarItems= [{ 
    id: 1, 
    label: "Dashboard", 
    svg: <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill= " #0056DC "> <path d="M280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-160q17 0 28.5-11.5T320-600q0-17-11.5-28.5T280-640q-17 0-28.5 11.5T240-600q0 17 11.5 28.5T280-560Zm80 160h360v-80H360v80Zm0-160h360v-80H360v80Zm-40 440v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" /> </svg>,
    link: [
      { label: "Admin Dashboard", to: "/dashboard" },
      {label: "Retailer Dashboard", to:"/retailer-dashboard" }
    ]
  },
  { 
    id: 2, 
    label: "Members", 
    svg: <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill= " #0056DC " > <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
              </svg>,
    link: [
      { label: "FieldExecutive(FE) (1)", to: "/field-executive" },
      { label: "FRANCHISE(FSDS)", to: "/franchise" },
      { label: "SuperDistributor(SDS) (0) ", to: "/super-distributor" },
      { label: "Distributor(DS) (1)", to: "/distributor-ds" },
      { label: "RETAILER(RT) (2)", to: "/retailer" },
      { label: "Not Working Members (0) ", to: "/not-working" },
      { label: " Suspended User ", to: "/suspended-user" },
      { label: "Not Working User (0) ", to: "/not-working-user-list" },
      
    ]
  },
  { 
    id: 3, 
    label: "Report",
    svg:<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill= " #0056DC "> <path d="M320-480v-80h320v80H320Zm0-160v-80h320v80H320Zm-80 240h300q29 0 54 12.5t42 35.5l84 110v-558H240v400Zm0 240h442L573-303q-6-8-14.5-12.5T540-320H240v160Zm480 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80Zm-480-80v-640 640Zm0-160v-80 80Z" />
              </svg> , 
    icon:  faAnglesRight ,
    link: [
      { label: "Recharge", to: "/mobile-history" },
      { label: "Bill Payments", to: "/bill-payments" },
      { label: "Verify", to: "/verify" },
      { label: "BAnking", to: "/banking" },
      { label: "Aeps", to: "/aeps" },
      { label: "Payout", to: "/payout" },
      { label: "Pan card", to: "/pancard" },
      { label: "UPI", to: "/upi" },
      { label: "Wallet Transfer", to: "/wallet-transfer" },
      { label: "Investment", to: "/investment" },
      { label: "QR Collection", to: "/qr-collection" },
      { label: "Pending Transaction", to: "/pending-report" },
      { label: "Admin Profit Report", to: "/admin-report" },
      { label: "Refund Manager", to: "/refund-manager" },
      { label: "Api Summary", to: "/api-summary" },
      { label: "Ledger Report", to: "/ledger-report" },
      { label: " Payment Report", to: "/pending-report" },
    ]},{ 
      id: 4, 
      label: "Payment", 
      svg: <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill= " #0056DC "> <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
              </svg>,

      link: [
        { label: "Balance Transfer ", to: "/balance-transfer" },
        { label: " Balance Return ", to: "/balance-return" } ,   
        { label: "Balance Return Request ", to: "/balance-return-request" } ,  
        { label: "Payment Request Review ", to: "/payment-view" } ,   
        { label: "Purchase Balance ", to: "/purchase-bal" } ,   
        { label: "Commission Wallet Transfer ", to: "/commission-detail" } ,   

      ]
    },{ 
      id: 5, 
      label: "Dispute", 
      svg:  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill= " #0056DC "> <path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z" />
              </svg>,

      link: [
        { label: "Pending Dispute", to: "/pending-disputes" } ,
        { label: "Solved Dispute", to: "/solve-dispute" } 
      ]
    },
    { 
      id: 6, 
      label: " User Income", 
      svg: <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill= " #0056DC "> <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z" />
              </svg>,

      link: [
        { label: " Field Executive(FE) Income ", to: "/fe-income" } ,    
        { label: " FRANCHISE(FSDS) Income ", to: "/franchise-fsds" } ,    
        { label: " Super Distributor(SDS) Income ", to: "/super-admin" },     
        { label: " RETAILER(RT) Income ", to: "/retailer-income" } ,    
        { label: " Suspended User (SU) Income ", to: "/suspended-user-income" } ,
        { label: " Not Working Members Income ", to: "/not-working" } , 
      ]
    },
    
]
export const SidebarBalance = [{
    id: 1,
    type: "Normal Balance",
    amount: 20000.0,
  },{
    id: 2,
    type: "Commission Balance",
    amount: 0.0,
  },{
    id: 3,
    type: "Lien Balance",
    amount: 0.0,
  }];
export const BalanceCards = [{
    id: 1,
    heading: "Distributed Balance",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="30px" fill="#0056DC"> <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" /></svg>,
    details: "Normal Balance ",
    amount: "₹40,000",
  },{
    id: 2,
    heading: "Distributed Balance",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="30px" fill="#0056DC"> <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" /></svg>,
    details: "Commission Balance ",
    amount: "₹0",
  },{
    id: 3,
    heading: "Members",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="30px" fill="#0056DC"> <path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" /></svg>,
    details: "Total Members ",
    amount: "8",
  },{
    id: 4,
    heading: "Members",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="30px" fill="#0056DC"> <path d="M640-520v-80h240v80H640Zm-280 40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" /></svg>,
    details: "Suspended Members ",
    amount: "2",
  }];
export const SaleCard = [{
    id: 1,
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#fff"> <path d="M531-260h96v-3L462-438l1-3h10q54 0 89.5-33t43.5-77h40v-47h-41q-3-15-10.5-28.5T576-653h70v-47H314v57h156q26 0 42.5 13t22.5 32H314v47h222q-6 20-23 34.5T467-502H367v64l164 178ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>,
    head: "DMT1",
    Success: "₹ 0.00",
    Failure: "₹ 0.00",
    color: "blue",
  },{
    id: 2,
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#fff"> <path d="M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z" /></svg>,
    head: "QR Collection",
    Success: "₹ 0.00",
    Failure: "₹ 0.00",
    color: "orange",
  },{
    id: 3,
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#fff"> <path d="M480-40q-112 0-206-51T120-227v107H40v-240h240v80h-99q48 72 126.5 116T480-120q75 0 140.5-28.5t114-77q48.5-48.5 77-114T840-480h80q0 91-34.5 171T791-169q-60 60-140 94.5T480-40Zm-36-160v-52q-47-11-76.5-40.5T324-370l66-26q12 41 37.5 61.5T486-314q33 0 56.5-15.5T566-378q0-29-24.5-47T454-466q-59-21-86.5-50T340-592q0-41 28.5-74.5T446-710v-50h70v50q36 3 65.5 29t40.5 61l-64 26q-8-23-26-38.5T482-648q-35 0-53.5 15T410-592q0 26 23 41t83 35q72 26 96 61t24 77q0 29-10 51t-26.5 37.5Q583-274 561-264.5T514-250v50h-70ZM40-480q0-91 34.5-171T169-791q60-60 140-94.5T480-920q112 0 206 51t154 136v-107h80v240H680v-80h99q-48-72-126.5-116T480-840q-75 0-140.5 28.5t-114 77q-48.5 48.5-77 114T120-480H40Z" /></svg>,
    head: "DMT2",
    Success: "₹ 0.00",
    Failure: "₹ 0.00",
    color: "#26c6da",
  }];
export const superAdminDetails = [{
    id: 1,
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    detail: "info@mayape.in",
    href: "mailto:info@mayapay.in",
  },{
    id: 2,
    icon: <FontAwesomeIcon icon={faPhone} />,
    detail: "9315969524",
    href: "tel: +91 9315969524",
  },{
    id: 3,
    icon: <FontAwesomeIcon icon={faClock} />,
    detail: "2024-12-20  14:10:09",
    href: null,
  }];
export const adminDetails = [{
    id: 1,
    name: "First Name",
    detail: "Super",
  },{
    id: 2,
    name: "Last Name",
    detail: "Admin",
  },{
    id: 3,
    name: "Email Address",
    detail: "info@mayape.in",
  },{
    id: 1,
    name: "Mobile Number",
    detail: "9315969524",
  }];
export const permanentAddress = [{
    id: 1,
    address: "Address",
    detail: "Office Address ",
  },{
    id: 2,
    address: "City",
    detail: "City",
  },{
    id: 3,
    address: "State",
    detail: "Karnatka",
  },{
    id: 4,
    address: "Pin Code",
    detail: "Pin Code",
  }];
export const changePass = [
  {
    id: "old_password",
    label: "Old Password:",
    detail: "old Password ",
  },{
    id: "password",
    label: "New Password:",
    detail: "New Password",
  },{
    id: "confrim_otp",
    label: "Enter Otp:",
    detail: "Enter Otp",
  },];
export const profileData = [{
    id: "profile",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"> <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>,
    data: "My Profile",
    href: "/profile",
  },{
    id: "activity",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"> <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" /></svg>,
    data: "Activity Logs",
    // href:"/"
  },{
    id: "reset",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"> <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480h80q0 66 25 124.5t68.5 102q43.5 43.5 102 69T480-159q134 0 227-93t93-227q0-134-93-227t-227-93q-89 0-161.5 43.5T204-640h116v80H80v-240h80v80q55-73 138-116.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-80-240q-17 0-28.5-11.5T360-360v-120q0-17 11.5-28.5T400-520v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40q17 0 28.5 11.5T600-480v120q0 17-11.5 28.5T560-320H400Zm40-200h80v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40Z" /></svg>,
    data: "Reset Password",
    href: "/reset",
  },{
    id: "reset_mpi",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480h80q0 66 25 124.5t68.5 102q43.5 43.5 102 69T480-159q134 0 227-93t93-227q0-134-93-227t-227-93q-89 0-161.5 43.5T204-640h116v80H80v-240h80v80q55-73 138-116.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-80-240q-17 0-28.5-11.5T360-360v-120q0-17 11.5-28.5T400-520v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40q17 0 28.5 11.5T600-480v120q0 17-11.5 28.5T560-320H400Zm40-200h80v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40Z"/></svg>,
    data: "Reset MPIN",
    href: "/reset-mpin",
  },{
    id: "logout",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"> <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>,
    data: "Log out",
    href: "/" ,
  }];
export const mailSettings = [{
    id: 1,
    label: "Transport",
    input: "mail",
  },{
    id: 2,
    label: "Host",
    input: "abc@gmail.com",
  },{
    id: 3,
    label: "Port",
    input: "580",
  },{
    id: 4,
    label: "Encryption",
    input: "tls",
  },{
    id: 5,
    label: "Mail Username ",
    input: "Mail Username ",
  },{
    id: 6,
    label: "Mail Password",
    input: "Password",
  },{
    id: 7,
    label: "Mail From",
    input: "noreply@domaim,com",
  }];
export const companySetting = [{
    id: "a",
    label: "Company Name",
    value: "Maya Pe",
  },{
    id: "b",
    label: "Company Email",
    value: "info@maya.in",
  },{
    id: "c",
    label: "Company Website",
    value: "utility.mayape.in",
  },{
    id: "d",
    label: "Support Number",
    value: "9315969524",
  },{
    id: "e",
    label: "Whatsapp Number",
    value: "9315969524",
  },{
    id: "f",
    label: "News",
    value: "Maya Pe",
  },{
    id: "g",
    label: "Sms Sender",
    value: "MAYAPE",
  }];
export const companyAddress = [{
    id: 1,
    label: "Company Address",
    data: "Company Address",
  },{
    id: 2,
    label: "Company Address2",
    data: "Company Address2",
  },{
    id: 3,
    label: "Facebook Link",
    data: "Facebook Link",
  },{
    id: 4,
    label: "Instagram Link",
    data: "Instagram Link",
  },{
    id: 5,
    label: "Twitter Link",
    data: "Twitter Link",
  },{
    id: 6,
    label: "Youtube Link",
    data: "Youtube Link",
  }];
export const activeServices = [{
    id: 9,
    name: "Mobile",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M400-160h160v-40H400v40ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm0-80h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" /></svg>,
  },{
    id: 10,
    name: "DTH",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M480-480Zm320 320H600q0-20-1.5-40t-4.5-40h206v-480H160v46q-20-3-40-4.5T80-680v-40q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160Zm-720 0v-120q50 0 85 35t35 85H80Zm200 0q0-83-58.5-141.5T80-360v-80q117 0 198.5 81.5T360-160h-80Zm160 0q0-75-28.5-140.5t-77-114q-48.5-48.5-114-77T80-520v-80q91 0 171 34.5T391-471q60 60 94.5 140T520-160h-80Z" /></svg>,
  },{
    id: 11,
    name: "Mobile Postpaid",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" /></svg>,
  },{
    id: 12,
    name: "Landline",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm400 160 80-80-60-80h-66q-6-18-10-38.5t-4-41.5q0-21 4-40.5t10-39.5h66l60-80-80-80q-54 42-87 106.5T640-480q0 69 33 133.5T760-240Zm-578 40h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z" /></svg>,
  },{
    id: 13,
    name: "Electricity",
    icon:<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"><path d="M460-200h40v-74l140-140v-186H320v186l140 140v74Zm-80 80v-120L240-380v-220q0-33 23.5-56.5T320-680h40l-40 40v-200h80v160h160v-160h80v200l-40-40h40q33 0 56.5 23.5T720-600v220L580-240v120H380Zm100-280Z"/></svg>
    // icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z" /></svg>,
  },{
    id: 14,
    name: "Water",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M279-80q-31 0-53.5-20.5T200-151l-80-729h720l-80 729q-3 30-25.5 50.5T681-80H279Zm-43-480 44 400h400l44-400H236Zm-10-80h508l16-160H210l16 160Zm254 360q-14 0-24-10t-10-24q0-15 8.5-34.5T480-393q17 25 25.5 44.5T514-314q0 14-10 24t-24 10Zm0 80q48 0 81-33t33-81q0-41-26.5-89T480-520q-61 69-87.5 117T366-314q0 48 33 81t81 33Zm-244 40h488-488Z" /></svg>,
  },{
    id: 15,
    name: "Gas",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M320-80q-66 0-113-47t-47-113v-400q0-66 47-113t113-47h40v-80h80v80h80v-80h80v80h40q66 0 113 47t47 113v400q0 66-47 113T640-80H320Zm0-80h320q33 0 56.5-23.5T720-240v-400q0-33-23.5-56.5T640-720H320q-33 0-56.5 23.5T240-640v400q0 33 23.5 56.5T320-160Zm0-400h320v-80H320v80Zm160 320q42 0 71-28.5t29-69.5q0-33-19-56.5T480-490q-63 72-81.5 96T380-338q0 41 29 69.5t71 28.5ZM240-720v560-560Z" /></svg>,
  },{
    id: 16,
    name: "Fast Tag",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M260-320q25 0 42.5-17.5T320-380q0-25-17.5-42.5T260-440q-25 0-42.5 17.5T200-380q0 25 17.5 42.5T260-320Zm360 0q20 0 36-12t21-31q-20-4-38-13.5T606-401l-25-25q-10 8-15.5 20t-5.5 26q0 25 17.5 42.5T620-320Zm-460 40v-200 200Zm40 80v40q0 17-11.5 28.5T160-120h-40q-17 0-28.5-11.5T80-160v-320l84-240q6-18 21.5-29t34.5-11h140v55q0 6 .5 12.5T362-680H234l-42 120h255l80 80H160v200h560v-81q22-2 42.5-11t37.5-25v237q0 17-11.5 28.5T760-120h-40q-17 0-28.5-11.5T680-160v-40H200Zm400-520q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Zm62 262L458-662q-8-8-13-19.5t-5-23.5v-155q0-25 17.5-42.5T500-920h155q12 0 23.5 5t19.5 13l204 204q17 17 17 42.5T902-613L747-458q-17 17-42.5 17T662-458Zm43-70 127-127-185-185H520v127l185 185Zm-29-156Z" /></svg>,
  },{
    id: 17,
    name: "Loan Repayment",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Z" /></svg>,
  },{
    id: 18,
    name: "Broadband",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M440-80v-331q-18-11-29-28.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 23-11 41t-29 28v331h-80ZM204-190q-57-55-90.5-129.5T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 86-33.5 161T756-190l-56-56q46-44 73-104.5T800-480q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 69 27 129t74 104l-57 57Zm113-113q-35-33-56-78.5T240-480q0-100 70-170t170-70q100 0 170 70t70 170q0 53-21 99t-56 78l-57-57q25-23 39.5-54t14.5-66q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 36 14.5 66.5T374-360l-57 57Z" /></svg>,
  },{
    id: 19,
    name: "LPG Gas",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M320-80q-66 0-113-47t-47-113v-400q0-66 47-113t113-47h40v-80h80v80h80v-80h80v80h40q66 0 113 47t47 113v400q0 66-47 113T640-80H320Zm0-80h320q33 0 56.5-23.5T720-240v-400q0-33-23.5-56.5T640-720H320q-33 0-56.5 23.5T240-640v400q0 33 23.5 56.5T320-160Zm0-400h320v-80H320v80Zm160 320q42 0 71-28.5t29-69.5q0-33-19-56.5T480-490q-63 72-81.5 96T380-338q0 41 29 69.5t71 28.5ZM240-720v560-560Z" /></svg>,
  },{
    id: 20,
    name: "Insurance",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M420-340h120v-100h100v-120H540v-100H420v100H320v120h100v100Zm60 260q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" /></svg>,
  },{
    id: 21,
    name: "Cable TV",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M320-120v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" /></svg>,
  },{
    id: 22,
    name: "Subscription",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z" /></svg>,
  },{
    id: 23,
    name: "Housing Society",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>,
  },{
    id: 24,
    name: "Verify",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" /></svg>,
  },{
    id: 25,
    name: "DMT1",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M531-260h96v-3L462-438l1-3h10q54 0 89.5-33t43.5-77h40v-47h-41q-3-15-10.5-28.5T576-653h70v-47H314v57h156q26 0 42.5 13t22.5 32H314v47h222q-6 20-23 34.5T467-502H367v64l164 178ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>,
  },{
    id: 26,
    name: "Move to Wallet",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z" /></svg>,
  },{
    id: 27,
    name: "Aeps",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640H240v640Zm80-80h320v-80H320v80Zm160-160q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-120q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm0-40Z" /></svg>,
  },{
    id: 28,
    name: "Move to Bank",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm179-80h442L480-830 259-720ZM80-120v-80h482q2 21 5 40.5t9 39.5H80Zm600-310v-130h80v90l-80 40ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-29-120 139-138-42-42-97 95-39-39-42 43 81 81ZM259-720h442-442Z" /></svg>,
  },{
    id: 29,
    name: "Pan card",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640H240v640Zm80-80h320v-80H320v80Zm160-160q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-120q-17 0-28.5-11.5T440-560q0-17 11.5-28.5T480-600q17 0 28.5 11.5T520-560q0 17-11.5 28.5T480-520Zm0-40Z" /></svg>,
  },{
    id: 30,
    name: "Upi Transfer",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M440-360h60v-80h100q17 0 28.5-11.5T640-480v-80q0-17-11.5-28.5T600-600H440v240Zm240 0h60v-240h-60v240ZM500-500v-40h80v40h-80ZM240-360h120q17 0 28.5-11.5T400-400v-200h-60v180h-80v-180h-60v200q0 17 11.5 28.5T240-360Zm-80 200q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" /></svg>,
  },{
    id: 31,
    name: "Commission Wallet Transfer",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z" /></svg>,
  },{
    id: 32,
    name: "My Pocket Wallet",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z" /></svg>
    ),
  },{
    id: 33,
    name: "Wallet Transfer ",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z" /></svg>,
  },{
    id: 34,
    name: "QR Collection",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z" /></svg>,
  },{
    id: 35,
    name: "DMT2",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M531-260h96v-3L462-438l1-3h10q54 0 89.5-33t43.5-77h40v-47h-41q-3-15-10.5-28.5T576-653h70v-47H314v57h156q26 0 42.5 13t22.5 32H314v47h222q-6 20-23 34.5T467-502H367v64l164 178ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>,
  },{
    id: 36,
    name: "DMT3",
    icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"> <path d="M531-260h96v-3L462-438l1-3h10q54 0 89.5-33t43.5-77h40v-47h-41q-3-15-10.5-28.5T576-653h70v-47H314v57h156q26 0 42.5 13t22.5 32H314v47h222q-6 20-23 34.5T467-502H367v64l164 178ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>,
  },{
    id: 37,
    name: "CC Bill Payment",
    icon:<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0056DC"><path d="M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z"/></svg>,
  }];

export const fieldExeTable = [{
    id: "a",
    head: "userID",
    data: "",
  },{
    id: "b",
    head: "Joinind Date",
    data: "2024-02-09 12:08:40",
  },{
    id: "c",
    head: "Name",
    data: "Vinod",
  },{
    id: "d",
    head: "Mobile",
    data: "9876543210",
  },{
    id: "e",
    head: "Member Type",
    data: "FieldExecutive",
  },{
    id: "f",
    head: "Normal Balance",
    data: "10.00",
  },{
    id: "g",
    head: "Parent",
    data: "",
  },{
    id: "h",
    head: "Package",
    data: "",
  },{
    id: "i",
    head: "Status",
    data: "",
  },{
    id: "j",
    head: "User Activity",
    data: "",
  }];
export const basicDetails = [{
    name: "First Name :",
    value: "First Name",
  },{
    name: "Last Name :",
    value: "Last Name",
  },{
    name: "Email Address :",
    value: "Email Address",
  },{
    name: "Mobile Number :",
    value: "Mobile Number",
  }];
export const basicDetails2 = [{
    name: "Shop Name :",
    value: "Shop Name",
  },{
    name: "Office Address :",
    value: "Office Address",
  },{
    name: "Lock Amount :",
    value: "Lock Amount",
  },{
    name: "Pan Number :",
    value: "Pan Number",
  },{
    name: "GST Number :",
    value: "GST Number",
  }];

export const newAccountDetail = [{
    id: 1,
    label: "Bank Name",
    value: "Bank Name",
  },{
    id: 2,
    label: "Account Number",
    value: "Account Number",
  },{
    id: 3,
    label: "Account Holder Name",
    value: "Account Holder Name",
  },{
    id: 4,
    label: "IFSC Code",
    value: "IFSC",
  },{
    id: 5,
    label: "Branch",
    value: "Branch",
  }];

export const retailerHomeCard= [{
  service_id: 1,
  id:"a",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="m734-366-58-58q12-11 18.5-25.5T701-480q0-16-6.5-30.5T676-536l58-58q23 23 35 52.5t12 61.5q0 32-12 61.5T734-366Zm98 98-56-56q31-31 48-71t17-85q0-45-17-85t-48-71l56-56q43 42 66 97t23 115q0 60-23 115t-66 97ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v480h400v-40h80v160q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/></svg>,
  href:"/retailer-mobile-prepaid",
  label:"Mobile Prepaid"
}, {
  service_id: 2 ,
  id:"b",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M734-306.67H579.67q-5.67-17.66-11.84-35.5-6.16-17.83-12.5-31.16h112v-213.34h-287q-29-21-61.41-37.6-32.42-16.61-67.25-29.06H734v346.66ZM480-480ZM80.67-160v-109.33q44.44 0 75.55 31.89 31.11 31.88 31.11 77.44H80.67Zm200 0q0-84.11-58.17-143.39-58.17-59.28-141.83-59.28v-66.66q111.43 0 189.04 78.83 77.62 78.83 77.62 190.5h-66.66Zm160 0q0-75-28.17-141.17-28.17-66.16-77-115.33t-114.33-77.67q-65.5-28.5-140.5-28.5v-66.66q88.33 0 166 33.83 77.66 33.83 135.66 92.17 58 58.33 91.5 136.66 33.5 78.34 33.5 166.67h-66.66ZM814-160H600.67q0-16.67-1.17-33.33-1.17-16.67-3.5-33.34h218v-506.66H147.33V-678q-16.66-2.33-33.33-3.5-16.67-1.17-33.33-1.17v-50.66q0-27.5 19.58-47.09Q119.83-800 147.33-800H814q27.5 0 47.08 19.58 19.59 19.59 19.59 47.09v506.66q0 27.5-19.59 47.09Q841.5-160 814-160Z"/></svg>,
  href:"/retailer-dth-recharge",
  label:"DTH Recharge"
}, {
  service_id: 4,
  id:"c",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h400q33 0 56.5 23.5T720-840v160h-80v-40H240v480h400v-40h80v160q0 33-23.5 56.5T640-40H240Zm0-120v40h400v-40H240Zm358-160L428-490l56-56 114 114 226-226 56 56-282 282ZM240-800h400v-40H240v40Zm0 0v-40 40Zm0 640v40-40Z"/></svg>,
  href:"/retailer-mobile-postpaid",
  label:"Mobile Postpaid"
}, {
  service_id: 6 ,
  id:"d",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M680-200h80v-560h-80v560ZM280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0 120q17 0 28.5-11.5T320-320q0-17-11.5-28.5T280-360q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm-40-240h320v-160H240v160Zm160 120q17 0 28.5-11.5T440-440q0-17-11.5-28.5T400-480q-17 0-28.5 11.5T360-440q0 17 11.5 28.5T400-400Zm0 120q17 0 28.5-11.5T440-320q0-17-11.5-28.5T400-360q-17 0-28.5 11.5T360-320q0 17 11.5 28.5T400-280Zm120-120q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480q-17 0-28.5 11.5T480-440q0 17 11.5 28.5T520-400Zm0 120q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360q-17 0-28.5 11.5T480-320q0 17 11.5 28.5T520-280Zm80 40v-480H200v480h400Zm80 120q-23 0-40.5-11T611-160H200q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h411q11-18 28.5-29t40.5-11h80q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120h-80ZM200-240v-480 480Z"/></svg>,
  href:"/retailer-landline",
  label:"Landline"
}, {
  service_id: 5,
  id:"e",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M126.67-80v-66.67h306.66V-80H126.67ZM680-126.67q-30.33 0-51.83-21.5T606.67-200H473.33q-14.33 0-23.83-10.67-9.5-10.66-9.5-25.66-2-94 58-161.17 60-67.17 148.67-79.17v-396.66h66.66v396.66q89.67 12 149.17 79.17Q922-330.33 920-236.33q0 15-9.5 25.66Q901-200 886.67-200H753.33q0 30.33-21.33 51.83t-52 21.5ZM246.67-200v-320H71.33q-16.66 0-26.66-13.17-10-13.16-5.67-28.83l79-293.33q3.33-11 11.83-17.84 8.5-6.83 20.5-6.83h260q12 0 20.5 6.83 8.5 6.84 11.84 17.84l79 293.33q4.33 15.67-5.67 28.83Q506-520 489.33-520h-176v320h-66.66Zm260.66-66.67h346q-10.66-64-59.66-105.33T680-413.33q-64.33 0-113 41.33t-59.67 105.33Zm-392.66-320h330.66l-59.66-226.66H176l-61.33 226.66ZM280-700Zm400.67 360Z"/></svg>,
  href:"/retailer-electricity",
  label:"Electricity"
}, {
  service_id: 6,
  id:"f",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="m263.33-206.67 297.34 85.34L805.33-198q-1.66-16.33-15.16-27.5-13.5-11.17-31.5-11.17H552q-19.67 0-35.33-2.33-15.67-2.33-31.34-7.67l-95-29.66 20-66.67L500-312.67q13 4.34 28.33 6.67 15.34 2.33 37.67 2.67h37.33q0-17.67-11.5-31.34-11.5-13.66-27.83-20l-223.33-84h-77.34v232ZM40-80v-425.33h300q5.67 0 11.67 1.16 6 1.17 11.33 3.17l223.67 83.67q36.33 13.33 60.83 44 24.5 30.66 24.5 70h86.67q50.66 0 86 35.66Q880-232 880-180v30.67L564.67-52l-301.34-85.33V-80H40Zm66.67-66.67H196v-292h-89.33v292Zm486.66-332L526.67-504v-24q-.67-52-37.5-88.67-36.84-36.66-89.17-36.66-41.67 0-74.17 24.5t-45.16 63.5h-70Q223-623 265.5-663.67q42.5-40.66 101.17-53.66v-96h-60V-880H520q30 0 57.67 9 27.66 9 51.33 26l-48.33 48.33q-14-8-29.17-12.33-15.17-4.33-31.5-4.33h-86.67v96q69 14 114.5 67.16 45.5 53.17 45.5 123.5v48ZM400-549.33ZM765.33-576q-31 0-52.83-21.83-21.83-21.84-21.83-52.84 0-35.66 21.66-69.66 21.67-34 53-79.67 31.34 45.67 53 79.67 21.67 34 21.67 69.66 0 31-21.83 52.84Q796.33-576 765.33-576Z"/></svg>,
  href:"/retailer-water",
  label:"Water"
}, {
  service_id: 7,
  id:"g",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M773.33-376.67V-678L566.67-822.67 360-678v106h-66.67v-139.33l273.34-195.34L840-711.33v334.66h-66.67Zm-206.66-446Zm20 189.34h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM263.33-206.67l297.34 85.34L805.33-198q-1.66-16.33-15.16-27.5-13.5-11.17-31.5-11.17H552q-19.67 0-35.33-2.33-15.67-2.33-31.34-7.67l-95-29.66 20-66.67L500-312.67q13 4.34 28.33 6.67 15.34 2.33 37.67 2.67h37.33q0-17.67-11.5-31.34-11.5-13.66-27.83-20l-223.33-84h-77.34v232ZM40-80v-425.33h300q5.89 0 11.78 1.16Q357.67-503 363-501l223.67 83.67q36.33 13.33 60.83 44 24.5 30.66 24.5 70h86.67q50.55 0 85.94 35.66Q880-232 880-180v30.67L564.67-52l-301.34-85.33V-80H40Zm66.67-66.67H196v-292h-89.33v292Z"/></svg>,
  href:"/retailer-loan-repay",
  label:"Loan Repayment"
},{
  service_id: 8,
  id:"h",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M450-358h53.33v-86h100q21 0 33.84-13.42Q650-470.83 650-490.67v-64.66q0-19.84-12.83-33.25Q624.33-602 603.33-602H450v244Zm240 0h53.33v-244H690v244ZM503.33-497.33v-51.34h93.34v51.34h-93.34ZM256.67-358h106.66q19.84 0 33.25-13.42Q410-384.83 410-404.67V-602h-53.33v190.67h-93.34V-602H210v197.33q0 19.84 13.42 33.25Q236.83-358 256.67-358Zm-110 198q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67Zm0-66.67h666.66v-506.66H146.67v506.66Zm0 0v-506.66 506.66Z"/></svg>,
  href:"/retailer-upi-transfer",
  label:"UPI Transfer"
}, {
  service_id: 9,
  id:"i",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M186.67-222v35.33-586.66V-222Zm0 102q-27.5 0-47.09-19.58Q120-159.17 120-186.67v-586.66q0-27.5 19.58-47.09Q159.17-840 186.67-840h586.66q27.5 0 47.09 19.58Q840-800.83 840-773.33v122.66h-66.67v-122.66H186.67v586.66h586.66v-122H840v122q0 27.5-19.58 47.09Q800.83-120 773.33-120H186.67ZM532-288.67q-31.35 0-53.67-22.13Q456-332.93 456-364v-231.33q0-31.08 22.33-53.21 22.32-22.13 53.67-22.13h273.33q31.35 0 53.68 22.13 22.32 22.13 22.32 53.21V-364q0 31.07-22.32 53.2-22.33 22.13-53.68 22.13H532Zm282.67-66.66V-604h-292v248.67h292Zm-166.51-62q26.17 0 44.34-18.48 18.17-18.47 18.17-44.86 0-25.83-18.5-43.91-18.5-18.09-44.17-18.09t-44.17 18.09q-18.5 18.08-18.5 43.91 0 26.39 18.33 44.86 18.32 18.48 44.5 18.48Z"/></svg>,
  href:"/retailer-dashboard",
  label:"Wallet Transfer"
}, {
  service_id: 11,
  id:"j",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M80-698v-182h182v66.67H146.67V-698H80Zm0 618v-182h66.67v115.33H262V-80H80Zm618 0v-66.67h115.33V-262H880v182H698Zm115.33-618v-115.33H698V-880h182v182h-66.67Zm-108 444h62v62h-62v-62Zm0-124h62v62h-62v-62Zm-62 62h62v62h-62v-62Zm-62 62h62v62h-62v-62Zm-62-62h62v62h-62v-62Zm124-124h62v62h-62v-62Zm-62 62h62v62h-62v-62Zm-62-62h62v62h-62v-62Zm248-328v248h-248v-248h248ZM440-440v248H192v-248h248Zm0-328v248H192v-248h248Zm-53.33 522.67v-141.34H245.33v141.34h141.34Zm0-328v-141.34H245.33v141.34h141.34Zm327.33 0v-141.34H572.67v141.34H714Z"/></svg>,
  href:"/retailer-dashboard",
  label:"Add Money"
}, {
  service_id: 13,
  id:"k",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M531-260h88.67v-3L456-438l1-3h6.67q53.33 0 90.83-31t45.5-79h39.33v-47H599q-3-15-10.17-28.83Q581.67-640.67 572-653h67.33v-47H320.67v50.33h140q31.33 0 49.83 14.34Q529-621 535.67-598h-215v47H536q-5.33 24-24.67 39.83-19.33 15.84-53.66 15.84H367V-438l164 178ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z"/></svg>,
  href:"/retailer-payout",
  label:"Payout"
}, {
  service_id: 12,
  id:"l",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M684-325.33 637.33-372l75.34-75.33H480V-514h232.67l-75.34-75.33L684-636l155.33 155.33L684-325.33ZM266.67-40q-27.5 0-47.09-19.58Q200-79.17 200-106.67v-746.66q0-27.5 19.58-47.09Q239.17-920 266.67-920h426.66q27.5 0 47.09 19.58Q760-880.83 760-853.33v150.66h-66.67v-50.66H266.67v546.66h426.66v-50.66H760v150.66q0 27.5-19.58 47.09Q720.83-40 693.33-40H266.67Zm0-100v33.33h426.66V-140H266.67Zm0-680h426.66v-33.33H266.67V-820Zm0 0v-33.33V-820Zm0 680v33.33V-140Z"/></svg>,
  href:"/retailer-dmt",
  label:"DMT 2"
}, {
  service_id: 20,
  id:"m",
  icon:<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0056DC"><path d="M146.67-640h666.66v-93.33H146.67V-640ZM80-733.33q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33V-494H146.67v267.33h210V-160h-210q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66ZM598-80 428-250l47.33-47.33 122.67 122 235.33-235.34L880-362 598-80ZM146.67-733.33v506.66V-392v124.33-465.66Z"/></svg>,
  href:"/retailer-cc-bill",
  label:"CC Bill Payment"
},]
export const dmtForm= [{
  label1:"First Name: ",
  label2:"Last Name: ",
  pincode:"Pin Code: ",
  address: "Address:",
  state:"State:",
}]
export const ccBillForm =[{
  id:"cardNumber",
  label:" Credit Card Number",
  data:"Enter Credit Card Number"
},{
  id:"cardHolder",
  label:"Card Holder Name",
  data:"Enter Card Holder Name"
},{
  id:"amount",
  label:"Amount",
  data:"Enter Amount"
},{
  id:"payeeName",
  label:"Payee Name",
  data:"Enter Payee Name"
},{
  id:"payeeMobile",
  label:"Payee Mobile",
  data:"Enter Payee Mobile"
},{
  id:"remark",
  label:"Remarks",
  data:"Enter Remarks"
}]
export const changeMpin=[{
  id:"new_mpin",
  label:"New MPIN",
  data:"Enter New MPIN"
},{
  id:"otp",
  label:"OTP",
  data:"Enter OTP"
}] 