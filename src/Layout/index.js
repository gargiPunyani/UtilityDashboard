
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../SharedComponent/SideNavbar";
import MainNav from "../SharedComponent/MainNavbar";

const Layout = () => {
  // Centralized state for open popup
  const [openPopup, setOpenPopup] = useState(null);

  // Function to toggle popups
  const handleTogglePopup = (id) => {
    console.log(id,"helloid")
    setOpenPopup((prev) => (prev === id ? null : id));
  };
  const popupData = {
    1: "This is content for popup 1",
    2: "This is content for popup 2",
  };

  console.log("Current openPopup State:", openPopup);
  console.log("Popup Data:", popupData[openPopup]);

  return (
    <div className="layoutOuterMost">
      <div className="layoutOut">
        <div className="layoutInner w-full flex">
          {/* Sidebar */}
          <div className="layoutSide bg-white">
            <SideNavbar openPopup={openPopup} handleTogglePopup={handleTogglePopup} />
          </div>

          {/* Main Content */}
          <div className="layoutMain w-full">
            {/* Navbar */}
            <MainNav openPopup={openPopup} handleTogglePopup={handleTogglePopup} />

            {/* Content */}
            <main className="flex-1 p-2 bg-gray-100">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;


// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import SideNavbar from "../SharedComponent/SideNavbar";
// import MainNav from "../SharedComponent/MainNavbar";

// const Layout = () => {
//   const [openPopup,setOpenPopup] = useState(null)

//   const handleTogglePopup=(id)=>{
//     setOpenPopup((prev) => (prev === id ? null : id));
//   }
//   return (
//     <div className="layoutOuterMost">
//       <div className="layoutOut">
//         <div className="layoutInner w-full flex">
//           <div className="layoutSide bg-white">
//             {/* Sidebar */}
//             <SideNavbar openPopup={openPopup} handleTogglePopup= {handleTogglePopup}/>
//             </div> 
//             {/* Main Content */}
//             <div className="layoutMain w-full ">
//               {/* Navbar */}
//               <MainNav openPopup={openPopup} handleTogglePopup= {handleTogglePopup} />

//               {/* Content */}
//               <main className="flex-1 p-2 bg-gray-100">
//                 <Outlet />
//                 {/* This renders the child components based on the route */}
//               </main>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;
