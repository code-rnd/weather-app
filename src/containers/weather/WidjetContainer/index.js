import { connect } from "react-redux";
import WidjetComponent from "../../../components/weather/WidjetComponent";
import { getGeo } from "../../../store/actions/geo/thunk";
import { getWeather } from "../../../store/actions/weather/async";

const mapStateToProps = state => ({
  temperature: state.weather.data && state.weather.data.temperature,
  city: state.address.data && state.address.data.components.city,
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
