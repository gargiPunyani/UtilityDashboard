import React from "react";
import { retailerHomeCard } from "../../../constant";
import instance from "../../../../Services/InstanceAxios";

const RetailerHomeCard = () => {
  const getData = async (service_id) => {
    console.log(service_id, "serviceeeeeeeeeee");

    try {
      const response = await instance.post("recharge/provider-list", {
        service_id: service_id,
        api_token: localStorage.getItem("token"),
      });
      console.log(service_id);
      console.log(response, "Responsee");
      sessionStorage.setItem(
        `providers_${service_id}`,
        JSON.stringify(response.data.providers)
      );
    } catch (error) {
      console.log(error);
    }
  };

  // const handleCard = async (service_id) => {
  //   console.log(service_id,"eeeeeee")
  //   // const api_token = localStorage.getItem("token");
  //   await getData(  service_id );
  // };
  return (
    <div className="cardOuterMost">
      <div className="cardsOuter">
        <div className="cardInner gap-6 mt-5 grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center">
          {retailerHomeCard.map((item) => {
            return (
              <div
                className="cardDetails"
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  getData(item.service_id);
                  setTimeout(() => {
                    window.location.href = `${item.href}?service_id=${item.service_id}`;
                  }, 300);
                }}>
                {item.href ? (
                  <a href={item.href}>
                    <div className="cardData grid items-center border-2 rounded-md cursor-pointer hover:transition-transition-smooth hover:shadow-2xl gap-3 text-center py-9 px-3 hover:bg-indigo-50">
                      <div className="cardDataIcon m-auto">{item.icon}</div>
                      <div className="cardDataLabel">
                        <p>{item.label}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    className="cardData  grid items-center border-2 rounded-md cursor-pointer hover:transition-transition-smooth hover:shadow-2xl gap-3 text-center py-9 px-3 hover:bg-indigo-50"
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
