import React from "react";

import "./style.scss";

export default function LoadingComponent(props) {
  return (
    <div className="loading">
      <div className="spinner">
        <div className={`rectangle-big rectangle`}>
          <div className={`rectangle-toggle rectangle`}></div>
        </div>
      </div>
    </div>
  );
}
