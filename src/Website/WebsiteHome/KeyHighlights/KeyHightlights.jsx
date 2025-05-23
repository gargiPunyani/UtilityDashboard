import React from "react";
import { Keyhightlights } from "../../../Components/constant/Keyhightlight";

const KeyHightlights = () => {
  return (
    <div className="keyHightlightsOuter bg-white px-5 py-10 ">
      <div>
        <div className="text-2xl xl:text-4xl text-center font-bold mb-5">
          <h2>Key Highlights...</h2>
        </div>
      <div className="hightlightInner grid xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-5 text-wrap">
        {Keyhightlights.map((item) => {
          return (
            <div className="highlightItems transition-transform duration-300 hover:scale-110" key={item.id}>
              <div className="hightlightsIcon">{item.icon}</div>
              <div className="hightText mt-2 ">
                <div className="text-center text-lg font-semibold ">
                <h3>{item.title}</h3>
                </div>
                <p>{item.data}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default KeyHightlights;
