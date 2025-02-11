import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../Components/SharedComponent/SideNavbar";
import MainNav from "../Components/SharedComponent/MainNavbar";

const Layout = () => {
  const [openPopup, setOpenPopup] = useState(null);
  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);;
  
  const handleTogglePopup = (id) => {
    setOpenPopup((prev) => (prev === id ? null : id));
  };

  const handleClickOutside = (e) => {
    if (
      (navbarRef.current && navbarRef.current.contains(e.target)) ||
      (sidebarRef.current && sidebarRef.current.contains(e.target))
    ) {
      return; 
    }
    setOpenPopup(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="layoutOuterMost">
      <div className="layoutOut">
        <div className="layoutInner w-full flex">
          <div className="layoutSide bg-white" ref={sidebarRef}>
            <SideNavbar
              openPopup={openPopup}
              handleTogglePopup={handleTogglePopup}
            />
          </div>

          <div className="layoutMain w-full" >
          <div ref={navbarRef}>
              <MainNav openPopup={openPopup} handleTogglePopup={handleTogglePopup} />
            </div>

            {/* content or child components */}
            <main className="flex-1 p-2 bg-gray-100">
              <Outlet />
            </main>
            {/* <div className="footerSection bg-white bottom-0 w-full absolute left-[50%] translate-x-[-50%]  p-3">
              <Footer/>
            </div> */}
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
