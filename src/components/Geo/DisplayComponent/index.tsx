import React from "react";
import { IDisplayProps } from "../../../types/interfaces/components/Display";

import "./style.scss";

const DisplayComponent: React.FC<IDisplayProps> = ({ city, temperature }) => {
  const errorMessaage: string = "...";

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
};

export default DisplayComponent;
