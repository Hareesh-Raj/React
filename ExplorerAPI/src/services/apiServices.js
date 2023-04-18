import axios from "axios";
const getData = async ()=> {
   let fullData = await axios.get("https://nijin-server.vercel.app/api/explorer");
    return fullData.data;
}
const getPlaceData = async(city)=>{
    let placeData = await axios.get(`https://nijin-server.vercel.app/api/explorer/places/${city}`);
    return placeData.data;
}
const getCelsius = async(city) =>{
    let celsius = await axios.get
    (
      `http://api.weatherapi.com/v1/forecast.json?key=db224014a65b48d987f181930231404&q=${city}&days=1&aqi=no&alerts=yes`
    )
    return celsius.data.current.temp_c;
}
const getRelatedPlaces = async(city,places)=>{
    let relatedPlaces = []
    let relatedPlacesList = await axios.get
    (
      `https://nijin-server.vercel.app/api/explorer/places/related/${city}`
    )
    places.forEach((place) => {
        if (relatedPlacesList.data.includes(place.city)) {
          relatedPlaces.push(place);
        }
      });
    return relatedPlaces;
}
export {getData,getPlaceData,getCelsius,getRelatedPlaces};