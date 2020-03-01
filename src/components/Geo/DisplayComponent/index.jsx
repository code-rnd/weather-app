import React from "react";

import "./style.scss";

export default function DisplayComponent(props) {
  const { city, temperature } = props;

  const errorMessaage = "...";

  return (
    <div className={"display"}>
      <div className="informMenu">
        <div className="informMenu-city">{city ? city : errorMessaage}</div>
        <div className="informMenu-temperature">
          {temperature !== null ? `${temperature}°` : errorMessaage}
        </div>
      </div>
    </div>
  );
}
