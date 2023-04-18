import PropTypes from "prop-types";
import { useEffect } from "react";
import { getCities } from "../services/apiServices";
import { useState } from "react";

function Dropdown(props) {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getCities();
      if (places.join("") !== data.join("")) setPlaces(data);
    };
    fetchData();
  }, [places]);

  let output = [];

  output = places.map((data, index) => {
    return (
      <option value={data} key={index}>
        {data}
      </option>
    );
  });

  return (
    <select onChange={props.change} id={props.k}>
      <option defaultValue={"choose"} hidden id={props.k}>
        Choose
      </option>
      {output}
    </select>
  );
}
Dropdown.propTypes = {
  change: PropTypes.func,
};
export default Dropdown;
