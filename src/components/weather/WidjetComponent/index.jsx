import React, { useState } from "react";
import LoadingComponent from "../../utils/LoadingComponent";

import "./style.scss";

export default function WidjetComponent(props) {
  const { getGeo, getWeather } = props;
  const { city, temperature } = props;
  const { isToggleLoading } = props;

  const [isToggleForm, setIsToggleForm] = useState(true);

  const [isSearch, setIsSearch] = useState("");

  const getSearchForm = () => {
    return (
      <div className={"searchForm"}>
        <input
          type={"text"}
          placeholder={"название города..."}
          value={isSearch}
          onChange={e => {
            setIsSearch(e.currentTarget.value);
          }}
        />
        <input
          type={"button"}
          value={"узнать погоду"}
          onClick={() => getWeather(isSearch)}
          disabled={!isSearch}
        />
      </div>
    );
  };

  const getGeoForm = () => {
    return (
      <div className="widjetBtn">
        <input
          type={"button"}
          value={"определить меня и узнать погоду"}
          onClick={() => {
            getGeo();
          }}
          disabled={isToggleLoading}
        />
      </div>
    );
  };

  const getDisplayForm = () => {
    const errorMessaage = "геомаяк не активирован";

    return (
      <div className="informMenu">
        <div className="informMenu-city">
          город: {city ? city : errorMessaage}
        </div>
        <div className="informMenu-temperature">
          температура: {temperature ? temperature : errorMessaage}
        </div>
      </div>
    );
  };

  return (
    <div className="widjet">
      <div className="toggleBtn">
        <input
          type={"button"}
          value={
            isToggleForm ? "указать город" : "определить город автоматически"
          }
          onClick={() => setIsToggleForm(!isToggleForm)}
        />
      </div>
      {isToggleLoading ? <LoadingComponent /> : getDisplayForm()}
      <div className={"coordinateBlock"}>
        {isToggleForm ? getGeoForm() : getSearchForm()}
      </div>
    </div>
  );
}
