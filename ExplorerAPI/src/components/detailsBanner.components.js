import style from "../assets/css/details.module.css";
function DetailsBanner(props)
{
    return(
        <>
        <div>
        <div className={style.details_page_banner}>
            <div className={style.text_wrapper}>
            <h1>{props.place.city}</h1>
            <p>{props.place.place}</p>
            <h2>
                {props.celcius}
                <span className={style.thinner}>&deg;</span>C
            </h2>
            </div>
            <div className={style.image_wrapper}>
            <img src={require(`../assets/images/${props.place["city"].toLowerCase()}.png`)} alt={props.place.city} />
            </div>
        </div>
        </div>
        </>
    )
}
export default DetailsBanner;