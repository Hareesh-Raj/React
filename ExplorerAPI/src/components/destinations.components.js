import { useEffect,useState } from "react";
import style from "../assets/css/style.module.css";
import Card from "./placeCard.components";
import axios from "axios";
function Destinations()
{
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get(`https://nijin-server.vercel.app/api/explorer`)
    .then((response) => setData(response.data))
  },[]);
    return(
        <>
        <div className={style.places_heading}>
            <span className={style.increase_size}>Destinations</span>
            <p className={style.increase_size_subtitle}>
                Just for you. Because you and your bike are special to us!
            </p>
        </div>
        <div className={style.places_content}>
         {data.map((value, index) => {
          return (
            <>
              <Card value={value} index={index}/>
            </>
          );
        })}
        </div>
        </>
    )
}
export default Destinations;