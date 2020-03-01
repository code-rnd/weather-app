import React from "react";

export default function ButtonComponent(props) {
  const { isSelected } = props;
  const { dataId, title } = props;
  const { onClick, routeClick } = props;

  const handleClick = () => {
    routeClick(dataId);
    onClick(dataId);
  };

  return (
    <div
      className={`button ${isSelected === dataId ? "active" : ""}`}
      data-id={dataId}
      onClick={() => {
        handleClick();
      }}
      disabled={isSelected === dataId}
    >
      {title}
    </div>
  );
}
