import style from "../assets/css/style.module.css";
import Button from "./button.components";
function Card(props)
{
  
    return (
        <>
        <div className={style.article} key={props.index}>
          <div>
              <img
                className={style.image}
                src={require(`../assets/images/${props.value["city"].toLowerCase()}.png`)}
                alt={props.value["city"]+'Reference'}
              />
              <p className={style.subtitle}>{props.value["place"]}</p>
              <h3 className={style.place}>{props.value["city"]}</h3>
              <p className={style.content}>{props.value["shortDescription"]}</p>
              </div>
              <Button value="READ MORE" path={`/details/${props.value["city"].toLowerCase()}`}/>
            </div>
        </>
    )
}
export default Card;