import React from "react";

import "./style.scss";

export default function GeoAutoComponent(props) {
  const { getGeo } = props;
  const { isToggleLoading } = props;

  return (
    <div className="geoAuto">
      <div
        className={"geoAuto__button"}
        onClick={() => {
          getGeo();
        }}
        disabled={isToggleLoading}
      >
        <i className="fas fa-street-view"></i>
      </div>
    </div>
  );
}
