import React from "react";
import { retailerHomeCard } from "../../../constant";

const RetailerHomeCard = () => {
  return (
    <div className="cardOuterMost">
      <div className="cardsOuter">
        <div className="cardInner gap-6 mt-5 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
          {retailerHomeCard.map((item) => {
            return (
              <div
                className="cardDetails grid items-center border-2 rounded-md cursor-pointer hover:transition-transition-smooth hover:shadow-2xl gap-3 text-center py-9 px-3 hover:bg-indigo-50"
                key={item.id}
              >
                {item.href ? (
                  <a href={item.href}>
                    <div className="cardData grid gap-3 items-center">
                      <div className="cardDataIcon m-auto">{item.icon}</div>
                      <div className="cardDataLabel">
                        <p>{item.label}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    className="cardData grid gap-3 items-center"
                    key={item.id}
                  >
                    <div className="cardDataIcon m-auto">{item.icon}</div>
                    <div className="cardDataLabel">
                      <p>{item.label}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RetailerHomeCard;
