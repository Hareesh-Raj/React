import banner from "../assets/images/banner.webp";
import style from "../assets/css/style.module.css";
import Dropdown from "./dropdown.components";
import Button from "./button.components";
import { useState } from "react";

function Banner(){
    const [exploreCity,setExploreCity] = useState("");
    return(
        <>
        <div className={style.explore_wrapper}>
        <div className={style.explore_form}>
        <h2>WELCOME TO EXPLORER</h2>
        <h1>Your Adventure Travel Expert in the <span className={style.bolder}>SOUTH</span></h1>
        <Dropdown change={(e)=>setExploreCity(e.target.value)}/>
        <Button value="EXPLORE" path={`/details/${exploreCity}`}/>
        </div>
        <div className={style.explore_banner}>
            <img src={banner} alt="Explorer Banner"></img>
        </div>
        </div>
        </>
    )
}
export default Banner;