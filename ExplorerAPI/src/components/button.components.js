import { useNavigate } from 'react-router-dom';
import style from "../assets/css/style.module.css";
function Button(props){
    const navigate = useNavigate();
    return(
        <>
        <button className={style.explore_btn} onClick={()=>navigate(props.path)}>
            {props.value}
        </button>
        </>
    )
}
export default Button;