import React from "react";
import { IGeoAutoProps } from "../../../types/interfaces/components/GeoAuto";

import "./style.scss";

const GeoAutoComponent: React.FC<IGeoAutoProps> = props => {
  const { getGeo } = props;
  const { isToggleLoading } = props;

  return (
    <div className="geoAuto">
      <div
        className={`geoAuto__button ${isToggleLoading && "disabled"}`}
        onClick={() => {
          getGeo();
        }}
      >
        <i className="fas fa-street-view"></i>
      </div>
    </div>
  );
};

export default GeoAutoComponent;
