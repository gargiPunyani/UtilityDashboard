import React from 'react';
import { Link } from 'react-router-dom';
import SuperAdmin from '../SuperAdmin/SuperAdmin';
import Mpin from './MPin/Mpin';

const ResetMpin = () => {
  return (
    <div className="w-full">
          <div className="resetOuterMost text-xs sm:text-sm p-5">
            <div className="resetOuter">
              <div className="dashboardBtn button mb-2">
                <button className="dahsboardButton p-1 items-center text-xs font-semibold decoration-none cursor-pointer ">
                  <span>
                    <Link to={"/retailer-dashboard"}> Dashboard </Link>
                    {">"} Reset MPIN
                  </span>
                </button>
              </div>
              <div className="resetInner">
                <div className="resetPassword lg:grid lg:grid-cols-2 justify-between gap-6">
                  <div className="superAdim bg-white rounded-md shadow-lg p-3">
                    <SuperAdmin />
                  </div>
                  <div className="resetPasswordDetails bg-white rounded-md shadow-lg mt-3 lg:mt-0 p-5">
                    <Mpin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};


export default ResetMpin