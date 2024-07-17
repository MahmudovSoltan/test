import React, { useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Fade ,Slide,Reveal} from "react-awesome-reveal";
import '../../Css/Contact.css'
import { SlPhone } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
function Contact() {

  
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [number,setNumber]=useState("")
const [text,setText]=useState("")
const [error,setError]=useState("")


const [nameError,setNameError]=useState(false)
const [emailError,setEmailError]=useState(false)
const [numberError,setNumberError]=useState(false)
const [textError,setTextError]=useState(false)






const handleSubmit = (e) => {
  if (name.trim() === "" || !email.includes("@gmail.com") || number.trim() === "" || text.trim() === "") {
    setError("One or more fields have an error. Please check and try again.");
  } else {
    setError("Thank you for your message. It has been sent.");
    setName('')
    setEmail("")
    setNumber("")
    setText('')
  }
  setNameError(false);
  setEmailError(false);
  setNumberError(false);
  setTextError(false);

  if (name == "") {
    setNameError(true);
  }
  if (!email.includes("@gmail.com")) {
    setEmailError(true);
  }
  if (number == "") {
    setNumberError(true);
  }
  if (text == "") {
    setTextError(true);
  }
  e.preventDefault();
};

  return (
    <div className="Contact">
       <br/>
      <br/>
      <br/>
      <br/>
      <div className="contast_header" >
      <span>Home</span><span><FaChevronRight/></span><span>Contact</span>
      </div>

      <h2 className="contact_title">Contact</h2>

      <div className="contact_contacts">
<div className="contact_contact">
<div className="contact_icon">
  <SlPhone/>
</div>
<div className="contact_adress">
  <h6>Call For Help:</h6>
  <span>(614) 444-2253</span>
</div>
</div>
<div className="contact_contact">
<div className="contact_icon">
  <MdOutlineEmail/>
</div>
<div className="contact_adress">
  <h6>Mail Us For Information:</h6>
  <span>info@company.com</span>
</div>
</div>
<div className="contact_contact">
<div className="contact_icon">
  <LuMapPin/>
</div>
<div className="contact_adress">
  <h6>Our Head Office Address:</h6>
  <span>Hatteras Lane, Hollywood, FL 33019, USA</span>
</div>
</div>

      </div>
<div className='contact_form'>
<Fade direction="left" triggerOnce="true" duration={2000}>
  <div className="contact_img">
<img src="https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/03/service-detail-01.jpg"/>
  </div>
  </Fade>


  <Fade direction="right" triggerOnce="true" duration={2000}>
  <div className='contact_form_validation'>
    <p>We’re glad to discuss your organisation’s situation. So please contact us via the details below, or enter your request.</p>
    <div style={{width:'100vw', height: '100vh', display:'flex'}}>
            <form class="formContainer">
                <div class="formElement">
                    <input
                     className={nameError?"formElement_input2":'formElement_input'} 
                     type="text" 
                     id="from_name"
                      name="from_name"
                       placeholder="Name*" 
                     value={name} onChange={e=>setName(e.target.value)}/>
                    <input 
                     className={emailError?"formElement_input2":'formElement_input'} 
                    type="email"
                     id="from_email"
                     name="from_email"
                      placeholder="Email*"
                    value={email} onChange={e=>setEmail(e.target.value)} />
                </div>

                <div class="formElement2">
                <input 
                className={numberError?"formElement2_input2":'formElement2_input'} 
                 type="email"
                  id="from_email"
                   name="from_email"
                    placeholder="Phone*" 
                value={number} onChange={e=>setNumber(e.target.value)} />
                 
                </div>
                <div class="formElement2">
                    <textarea className={textError?"formElement2_textarea2":'formElement2_textarea'} name="message" rows="8" cols="30" placeholder=" Writing your message*" 
                    value={text} onChange={e=>setText(e.target.value)} />
                </div>
                <button type='submit' className={error?"btn_color":'formButton'} onClick={handleSubmit}>Send <span><FaArrowRightLong/></span></button>
                {error && <p className='red'>{error}</p>}
            </form>
        </div>


  </div>
  </Fade>



</div>
<br/>
      <br/>
      <br/>
      <br/>
      <br/>
     
<iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d19888.240055419392!2d-0.1441801!3d51.4576055!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4876057c704a4439%3A0xa6bfa0dde4d8f0a9!2z0KPQuNC90LTQvNC40LsgQ2xhcGhhbSBDb21tb24gU291dGggU2lkZSBMb25kb24gU1c0IDlERSDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!3m2!1d51.4576055!2d-0.1441801!5e0!3m2!1sen!2saz!4v1718762577985!5m2!1sen!2saz" width="600" height="450"style={{ border: "0",width:"100%"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


      </div>
  )
}

export default Contact