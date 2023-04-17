import DetailsBanner from "../components/detailsBanner.components";
import style from "../assets/css/details.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/placeCard.components";
function Details() {
  let description = [];
  let relatedPlaces = [];
  const [places, setPlaces] = useState([]);
  const [placeData, setPlaceData] = useState({});
  const [relatedPlacesList, setRelatedPlacesList] = useState([]);
  const { city } = useParams();
  const [celcius, setCelcius] = useState(0);
  useEffect(() => {
    axios
      .get("https://nijin-server.vercel.app/api/explorer")
      .then((response) => setPlaces(response.data));

    axios
      .get(`https://nijin-server.vercel.app/api/explorer/places/${city}`)
      .then((response) => setPlaceData(response.data));

    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=db224014a65b48d987f181930231404&q=${city}&days=1&aqi=no&alerts=yes`
      )
      .then((response) => {
        setCelcius(response.data.current.temp_c);
      });
    axios
      .get(
        `https://nijin-server.vercel.app/api/explorer/places/related/${city}`
      )
      .then((response) => setRelatedPlacesList(response.data));
  }, [city]);
  places.forEach((place) => {
    if (relatedPlacesList.includes(place.city)) {
      relatedPlaces.push(place);
    }
  });
  description = placeData.fullDescription;
  if (description) {
    description = description
      .split("\\n")
      .map((element, index) => <p key={index}>{element}</p>);
  }
  return (
    <>
      {Object.entries(placeData).length > 0 && (
        <DetailsBanner place={placeData} celcius={celcius} />
      )}
      <div className={style.place_container}>
        <p className={style.fullDescription}>{description}</p>
        <span className={style.bigger}>Similar Destinations</span>
        <p className={style.big}>Because you liked {placeData["city"]}</p>
        <div className={style.places_content}>
          {relatedPlaces.map((place, index) => {
            return <Card value={place} index={index} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Details;
