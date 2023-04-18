import data from "../assets/data/places.json";
import style from "../assets/css/style.module.css";
import Card from "./placeCard.components";
function Destinations()
{
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