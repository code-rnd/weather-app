import { connect } from "react-redux";
import WidjetComponent from "../../components/WidjetComponent";
import { getGeo } from "../../store/actions/geo/thunk";
import { getWeather } from "../../store/actions/weather/async";

import { IRootState } from "../../types/interfaces/rootState";

const mapStateToProps = (state: IRootState) => ({
  temperature: state.currentCity.data.weather && state.currentCity.data.weather,
  city: state.currentCity.data.name && state.currentCity.data.name,
  isToggleLoading: state.appConfig.isToggleLoading
});

const mapDispatchToProps = {
  getGeo,
  getWeather
};

export const WidjetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidjetComponent);
