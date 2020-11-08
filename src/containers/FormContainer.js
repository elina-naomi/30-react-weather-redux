import Form from "../components/Form";
import {connect} from "react-redux";
import {getWeatherInfoAction} from "../actions/weatherActions";

function mapDispatchToProps(dispatch) {

    return {
        getWeather: city => dispatch(getWeatherInfoAction(city)),
    }
}

export default connect(null,mapDispatchToProps)(Form);