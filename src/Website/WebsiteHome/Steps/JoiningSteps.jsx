import React from "react";
import { joinSteps } from "../../../Components/constant/Steps";

const JoiningSteps = () => {
  return (
    <div className="stepsOuter px-5 py-10 bg-white">
      <div className="stepsInner text-center">
        <div className="stepsHead font-bold text-4xl ">
          <h2>Let the journey Begin</h2>
        </div>
        <div className="flex gap-10 justify-center my-10">
          {joinSteps.map((item) => {
            return (
              <div>
                <div
                  className="m-auto w-40 rounded-full border-8 p-5"
                  style={{ borderColor: item.color }}
                >
                  <img
                    className="rounded-full"
                    src={item.image}
                    alt="stepsImage"
                  />
                </div>

                <div className="relative border-2 border-t-0 overflow-hidden">
                  <div className="absolute top-[-65%] left-0 w-full h-full rounded-b-full bg-white border-b-2 "></div>
                  <div className="relative ">
                    <div className="my-5 text-center font-semibold text-lg p-5">
                      <p>{item.data}</p>
                    </div>
                    <div
                      className="p-2 text-white rounded-tl-2xl"
                      style={{ background: item.color }}
                    >
                      {item.Step}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JoiningSteps;
