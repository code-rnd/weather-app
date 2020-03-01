import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

import "./style.scss";

export default function AnimateMenuComponent(props) {
  const { routeClick } = props;

  const [isSelected, setIsSelected] = useState(0);

  return (
    <div className={"animateMenu"}>
      <ButtonComponent
        isSelected={isSelected}
        dataId={0}
        title={<i className="fas fa-map-marked-alt"></i>}
        onClick={setIsSelected}
        routeClick={routeClick}
        key={0}
      />
      <ButtonComponent
        isSelected={isSelected}
        dataId={1}
        title={<i className="fas fa-pencil-alt"></i>}
        onClick={setIsSelected}
        routeClick={routeClick}
        key={1}
      />
    </div>
  );
}
