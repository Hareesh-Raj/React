import DetailsBanner from "../components/detailsBanner.components";
import style from "../assets/css/details.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/placeCard.components";
import { getData, getPlaceData, getCelsius, getRelatedPlaces } from "../services/apiServices";
function Details() {
  let description = [];
  const [places, setPlaces] = useState([]);
  const [placeData, setPlaceData] = useState({});
  const [relatedPlacesList, setRelatedPlacesList] = useState([]);
  const { city } = useParams();
  const [celcius, setCelcius] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      setPlaces(await getData());
    };
    const fetchPlaceData = async () => {
      setPlaceData(await getPlaceData(city));
    };
    const fetchTemperature = async () => {
      setCelcius(await getCelsius(city));
    };
    const fetchRelatedPlaces = async () => {
      setRelatedPlacesList(await getRelatedPlaces(city, places));
    };
    fetchData();
    fetchPlaceData();
    fetchTemperature();
    fetchRelatedPlaces();
  }, [city, places]);
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
          {relatedPlacesList.map((place, index) => {
            return <Card value={place} index={index} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Details;
