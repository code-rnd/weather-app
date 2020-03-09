import React, { useState } from "react";

import GeoAutoComponent from "../Geo/GeoAutoComponent";
import GeoManualComponent from "../Geo/GeoManualComponent";

import DisplayComponent from "../Geo/DisplayComponent";
import LoadingComponent from "../utils/LoadingComponent";
import AnimateMenuComponent from "../utils/AnimateMenuComponent";

import { IWidjetProps } from "../../types/interfaces/components/Widjet";

import "./style.scss";

const WidjetComponent: React.FC<IWidjetProps> = props => {
  const { getGeo, getWeather } = props;
  const { temperature, city } = props;

  const { isToggleLoading } = props;
  const [isRouteToogle, setIsRouteToggle] = useState<number>(0);

  return (
    <div className="widjet">
      <DisplayComponent temperature={temperature} city={city} />
      {isRouteToogle ? (
        <GeoManualComponent getWeather={getWeather} />
      ) : (
        <GeoAutoComponent getGeo={getGeo} />
      )}
      <AnimateMenuComponent routeClick={setIsRouteToggle} />

      {isToggleLoading && <LoadingComponent />}
    </div>
  );
};

export default WidjetComponent;
