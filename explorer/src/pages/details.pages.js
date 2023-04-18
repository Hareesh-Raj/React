import places from "../assets/data/places.json";
import DetailsBanner from "../components/detailsBanner.components";
import style from "../assets/css/details.module.css";
import { useEffect, useState } from "react";
import {  useParams } from 'react-router-dom';
import { getCelsius } from "../services/apiServices";
import Card from "../components/placeCard.components";
function Details() {
  let description = [];
  let placeData = [];
  const city = useParams().city;
  const [celcius, setCelcius] = useState(0);
  useEffect(() => {
    const fetchTemperature = async () => {
      setCelcius(await getCelsius(city));
    };
    fetchTemperature();
  }, [city]);
  places.forEach((place) => {
    if (place.city.toLowerCase() === city) {
      placeData.push(place);
    }
  });
  let relatedPlacesList = [];

  places.forEach((place) => {
    if (placeData[0]["relatedPlaces"].includes(place.city)) {
      relatedPlacesList.push(place);
    }
  });
  description = placeData[0]["fullDescription"]
    .split("\\n")
    .map((element, index) => <p key={index}>{element}</p>);
  return (
    <>
      <DetailsBanner place={placeData[0]} celcius={celcius} />
      <div className={style.place_container}>
        <p className={style.fullDescription}>{description}</p>
        <span className={style.bigger}>Similar Destinations</span>
        <p className={style.big}>Because you liked {placeData[0]["city"]}</p>
        <div className={style.places_content}>
          {relatedPlacesList.map((place, index) => {
            return <Card value={place} index={index} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Details;
