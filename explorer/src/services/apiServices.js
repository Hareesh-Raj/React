import axios from "axios";

const getCelsius = async(city) =>{
    let celsius = await axios.get
    (
      `http://api.weatherapi.com/v1/forecast.json?key=db224014a65b48d987f181930231404&q=${city}&days=1&aqi=no&alerts=yes`
    )
    return celsius.data.current.temp_c;
}
export {getCelsius};