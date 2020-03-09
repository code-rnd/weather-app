import React from "react";
import { ILoadingProps } from "../../../types/interfaces/components/utils/Loading";

import "./style.scss";
import { TitlesLoading } from "../../../types/constants";

const LoadingComponent: React.FC<ILoadingProps> = () => {
  return (
    <div className="loading">
      <div className="spinner">
        <div className={`rectangle-big rectangle`}>
          <div className={`rectangle-toggle rectangle`}>
            {TitlesLoading.load}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
