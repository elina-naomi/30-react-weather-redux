import Weather from "../components/Weather";
import {connect} from "react-redux";

function mapStateToProps(state){
    return {
        message: state.message,
        weatherInfo: state.weatherInfo
    }
}

export default connect(mapStateToProps)(Weather);