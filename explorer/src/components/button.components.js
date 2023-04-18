import { useNavigate } from 'react-router-dom';
import style from "../assets/css/style.module.css";
import PropTypes from 'prop-types';
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
Button.propTypes = {
    value:PropTypes.string,
    path:PropTypes.string
}
export default Button;