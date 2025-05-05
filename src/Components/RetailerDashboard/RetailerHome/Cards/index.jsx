import React from "react";
import { retailerHomeCard } from "../../../constant";
import instance from "../../../../Services/InstanceAxios";

const RetailerHomeCard = () => {
  const getData = async ({ service_id, category_id, type }) => {
    const api_token = localStorage.getItem("token");
    console.log(category_id);

    try {
      let response;

      if (type === "service") {
        response = await instance.post("recharge/provider-list", {
          service_id,
          api_token,
        });
        sessionStorage.setItem(
          `providers_${service_id}`,
          JSON.stringify(response.data.providers)
        );
      } else if (type === "category") {
        response = await instance.post("/bbps/biller-list", {
          category_id,
          api_token,
        });
        sessionStorage.setItem(
          `providers_${category_id}`,
          JSON.stringify(response.data)
        );
      }

      console.log("Response:", response);
    } catch (error) {
      console.error("API Error:", error);
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
        <div className="cardInner gap-6 mt-5 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 items-center">
          {retailerHomeCard.map((item) => {
            return (
              <div
                className="cardDetails"
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();

                  getData({
                    service_id: item.service_id,
                    category_id: item.category_id,
                    type: item.type,
                  });

                  const paramKey =
                    item.type === "service" ? "service_id" : "category_id";
                  const paramValue =
                    item.type === "service"
                      ? item.service_id
                      : item.category_id;

                  setTimeout(() => {
                    window.location.href = `${item.href}?${paramKey}=${paramValue}`;
                  }, 300);
                }}
              >
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
