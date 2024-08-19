import React, { useState } from 'react'
import '../../Css/Courses.css'
import '../../Css/Home2.css'
import { FaChevronRight } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom';

function Procets() {
  const [sliderState1, setSliderState1] = useState([true, false, false, false, false,false,false]);

  const setSliderOnclick1 = (sliderIndex1) => {
    const newSliderState1 = sliderState1.map((_, idx) => idx === sliderIndex1);
    setSliderState1(newSliderState1);
  };
  return (

    <div >
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='courses_headr'> 
<span>Home</span><span><FaChevronRight/></span><span>Procets</span>

</div>
   <div className="projects">
<h2 className="projects_h">Projects</h2>   
    </div>  
    <div className="what-we-do-sections ul">
      <ul className = "container">
        <li> <Link to="/project"  className={`what-we-do-setionc-link ${sliderState1[0] ? "red" : " "}`} onClick={() => setSliderOnclick1(0)}> All</Link></li>
        <li> <Link to="humanresourse"  className={`what-we-do-setionc-link ${sliderState1[1] ? "red" : " "}`} onClick={() => setSliderOnclick1(1)}> Human Resources</Link></li>
        <li> <Link to="solicitory"  className={`what-we-do-setionc-link ${sliderState1[2] ? "red" : " "}`} onClick={() => setSliderOnclick1(2)}> Solicitory</Link></li>
        <li> <Link to="strategy"  className={`what-we-do-setionc-link ${sliderState1[3] ? "red" : " "}`} onClick={() => setSliderOnclick1(3)}> Strategy</Link></li>
        <li> <Link to="marketingplan"  className={`what-we-do-setionc-link ${sliderState1[4] ? "red" : " "}`} onClick={() => setSliderOnclick1(4)}>Marketing Plan</Link></li>
        <li> <Link to="financial"  className={`what-we-do-setionc-link ${sliderState1[5] ? "red" : " "}`} onClick={() => setSliderOnclick1(5)}>Financial</Link></li>
        <li> <Link to="businessplan"  className={`what-we-do-setionc-link ${sliderState1[6] ? "red" : " "}`} onClick={() => setSliderOnclick1(6)}>Business Plan</Link></li>
      </ul>
      <Outlet />
    </div>
     </div>
  )
}

export default Procets