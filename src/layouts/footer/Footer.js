import React from 'react'
import "../../Css/Footer.css"
import logo from '../../layouts/image/logo.svg'
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
function Footer() {
  return (
    <div >
      <footer>

        <div className='footer_sections'>
<div className='footer_section'>
  <div className='footer_logo'>
    <img src = {logo}/><div>Consulting</div>
  </div>
  <div className='footer_texts'>
    <div className='footer_adres'>Address: Hatteras Lane, Hollywood, FL 33019, USA</div>
    <div>Phone: (987) 654 3210</div>
    <div>Email: info@company.com</div>
    <div className='footer_icons'>
      <div><CiFacebook/></div>
      <div><IoLogoInstagram/></div>
      <div><FaXTwitter/></div>
      <div><BsLinkedin/></div>

    </div>

  </div>
</div>
<div className='footer_section margin-left'>
  <div className='footer_logo'>
  Userful Link
  </div>
  <div className='footer_texts'>
    <div >About Us</div>
    <div>Contact</div>
    <div>News</div>
    <div>Shop</div>

  </div>
</div>
<div className='footer_section'>
  <div className='footer_logo '>
  Services
  </div>
  <div className='footer_texts'>
    <div >Our Services</div>
    <div>Service Detail</div>
    <div>Events</div>
    <div>Our Team
    </div>

  </div>
</div>
<div className='footer_section'>
  <div className='footer_logo'>
  Subscribe Newsletter
  </div>
  <div className='footer_texts'>
    <div className='footer_adres'>Subscribe to our newsletter for discounts, specials, and <br/>more! We value your privacy.</div>

<div className='email'>
<form className='form' action="/action_page.php">
  <input className='input' placeholder=" Your Email" type="email" id="emails" name="emails" multiple />
 <button className="button" type="submit"><PiPaperPlaneTiltLight/></button>
</form>

</div>
  </div>
</div>

        </div>
        <div className='footer_buttom'>@ 2024 Copyright WP Theme by ThimPress.  Power by WordPress</div>
      </footer>
    </div>
  )
}

export default Footer
