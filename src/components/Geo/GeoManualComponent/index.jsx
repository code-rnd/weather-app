import React, { useState } from "react";

import "./style.scss";

export default function GeoManualComponent(props) {
  const { getWeather } = props;
  const [isSearch, setIsSearch] = useState("");

  return (
    <div className="geoManual">
      <div
        className={"geoManual__button margin-bottom20px"}
        onClick={() => {
          getWeather(isSearch);
        }}
        disabled={!isSearch}
      >
        <i className="fas fa-wind"></i>
      </div>
      <input
        className={"margin-bottom20px"}
        type={"text"}
        placeholder={"название города..."}
        value={isSearch}
        onChange={e => {
          setIsSearch(e.currentTarget.value);
        }}
      />
    </div>
  );
}
