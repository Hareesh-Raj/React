import { useState,useRef } from "react";
import Dropdown from "./dropdown.components";
function Footer() {
  const formRef = useRef(null);
  const [formData,setFormData] = useState(
    {
      name:'',
      hometown:'',
      destination:'',
      contactNumber:''
    }
  );
  const [canDisplay,setCanDisplay] = useState(false);
  function handleSubmit(e){
    e.preventDefault();
    if(formData["name"] && formData["hometown"] && formData["destination"] && formData["contactNumber"])
    {
      formRef.current.reset();
      startTimer(0.5);
    }
    else
    {
      console.log("empty");
    }
  }
  function startTimer(minutes) {
    // convert minutes to milliseconds
    var milliseconds = minutes * 60 * 1000;
    
    setCanDisplay(true);
    // start timer
    setTimeout(function() {
      // hide container
      setCanDisplay(false);
    }, milliseconds);
  }
  return (
    <>
      <div className="footer">
        <div>
          <div className="footer-header">
            <span className="form-title">Contact Us</span>
            <p className="form-subtitle">
              Our Sales Team will reach out to you ASAP!
            </p>
          </div>
            <form ref={formRef}>
          <div className="footer-form">
            <div className="input">
              <span>Name</span>
              <input type="text"  onChange={(e)=>setFormData({ ...formData, "name": e.target.value })}/>
            </div>
            <div className="input">
              <span>Your Home Town</span>
               <Dropdown change={(e)=>setFormData({ ...formData, "hometown": e.target.value })} k={2}/>
            </div>
            <div className="input">
              <span>Where would you like to go?</span>
              <Dropdown change={(e)=>setFormData({ ...formData, "destination": e.target.value })} k={3}/>
            </div>
            <div className="input">
              <span>Contact Number</span>
              <input type="number" className="input-box" onChange={(e)=>setFormData({ ...formData, "contactNumber": e.target.value })} />
            </div>
          </div>
          <div>
            <button className="submit-btn" onClick={handleSubmit}>SUBMIT INTEREST</button>
          </div>
          </form>
        </div>
          { canDisplay && (<div className="success-banner">
            <p>
            Thank you <strong>{formData.name}</strong> for expressing your interest
            in travelling with us.Our sales team will get back with the best
            packages from <strong>{formData.hometown}</strong> to{" "}
            <strong>{formData.destination}</strong>.
          </p>
          </div>)}
      </div>
         
    </>
  );
}
export default Footer;
