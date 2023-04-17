function Dropdown(props){
    return(
        <select onChange={props.change}>
      <option value="choose" selected hidden>
        Choose
      </option>
      <option value="Pollachi">Pollachi</option>
      <option value="Thanjavur">Thanjavur</option>
      <option value="Chidambaram">Chidambaram</option>
      <option value="Masinagudi">Masinagudi</option>
      <option value="Kumbakonam">Kumbakonam</option>
      <option value="Tirunelveli">Tirunelveli</option>
    </select>
    )
}
export default Dropdown;