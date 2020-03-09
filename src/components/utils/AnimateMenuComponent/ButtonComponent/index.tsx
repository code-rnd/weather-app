import React from "react";
import { IButtonProps } from "../../../../types/interfaces/components/utils/AnimateMenu/Button";

const ButtonComponent: React.FC<IButtonProps> = props => {
  const { isSelected } = props;
  const { dataId, title } = props;
  const { onClick, routeClick } = props;

  const handleClick = () => {
    routeClick(dataId);
    onClick(dataId);
  };

  return (
    <div
      className={`button ${isSelected === dataId ? "active disabled" : ""}`}
      data-id={dataId}
      onClick={() => {
        handleClick();
      }}
    >
      {title}
    </div>
  );
};

export default ButtonComponent;
