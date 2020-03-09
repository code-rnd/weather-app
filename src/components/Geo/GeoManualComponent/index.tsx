import React, { useState } from "react";
import { IGeoManualProps } from "../../../types/interfaces/components/GeoManual";

import "./style.scss";

const GeoManualComponent: React.FC<IGeoManualProps> = ({ getWeather }) => {
  const [isSearch, setIsSearch] = useState<string>("");

  const handlerClick = () => {
    getWeather(isSearch);
  };

  const handlerOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isSearch) {
      handlerClick();
    }
  };

  return (
    <div className="geoManual">
      <div
        className={`geoManual__button margin-bottom20px ${!isSearch &&
          "disabled"}`}
        onClick={() => {
          handlerClick();
        }}
      >
        <i className="fas fa-wind"></i>
      </div>
      <input
        className={"margin-bottom20px"}
        type={"text"}
        placeholder={"название города..."}
        value={isSearch}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setIsSearch(e.currentTarget.value);
        }}
        onKeyPress={e => handlerOnKeyPress(e)}
      />
    </div>
  );
};

export default GeoManualComponent;
