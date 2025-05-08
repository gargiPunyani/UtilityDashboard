import React from "react";
import { BalanceCards, SaleCard } from "../../../constant";

const HomeCards = () => {
  return (
    <div className="dashboardOuter p-5">
      <div className="dashboardBtn button mb-2">
        <button className="dahsboardButton p-1 items-center text-xs font-semibold decoration-none cursor-pointer "> 
          <span>Dashboard {">"} Dashboard </span>
        </button>
      </div>

      <div className=" homeOuterMostCards md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-9 mb-10 ">
        {BalanceCards.map((item) => {
          return (
            <div className="homeOuterCards shadow-xl p-5 rounded-lg bg-white mb-5" key={item.id}>
              <div className="cardsHead text-sm xl:text-md font-semibold xl:font-semibold">
                <p>{item.heading}</p>
              </div>
              <div className="cardsIcon flex justify-between items-center gap-2 mt-4 mb-4">
                <div>{item.icon }</div>
                <div className="cardAmt font-semibold text-md xl:text-md">{item.amount}</div>
              </div>
              <div className="cardDetails text-sm xl:text-md">
                <p>{item.details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sales p-5 bg-white">
        <div className="saleHeading uppercase p-2 text-md font-semibold ">
          <h2 >
            Today's Sale
          </h2>
          </div>
       
        <div className="salesOuterMost md:grid lg:grid-cols-3 md:grid-cols-2  mb-10 gap-4">
          {SaleCard.map((item) => {
            return <div className="salesOuter p-1 gap-2 flex sm:gap-5 sm:p-5 mb-4 shadow-xl rounded-lg" key={item.id}>
                <div className="flex items-center p-1 sm:p-3 rounded-full" style={{background: item.color}}> 
                    {item.icon}
                </div>
                <div className="salesInner ml-2">
                    <div className="salesName text-md font-semibold">
                    <p>{item.head}</p>
                    </div>
                    <div className="success flex gap-2 text-sm justify-start">
                        <div className="successHead text-green-500">
                        <p >Success: </p>
                        </div>
                        <div className="successAmt">
                            <p>{item.Success}</p>
                            </div>
                    </div>
                    <div className="failure flex gap-5 text-sm justify-start">
                        <div className="failureHead text-red-500">
                        <p>Failure: </p>
                        </div>
                        <div className="failureAmt">
                            <p>{item.Failure }</p>
                            </div>
                    </div>
                </div>
            </div>;
          })}
        
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
