import React from 'react'
import '../../Css/Courses.css'
import '../../Css/Home2.css'
import { FaChevronRight } from "react-icons/fa6";
import { Link, Outlet } from 'react-router-dom';
// import { IoFilterSharp } from "react-icons/io5";
// import img1 from '../../layouts/image/case4.webp'
function Procets() {
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
        <li> <Link to="/project" className='what-we-do-setionc-link red'> All</Link></li>
        <li> <Link to="humanresourse" className='what-we-do-setionc-link'> Human Resources</Link></li>
        <li> <Link to="solicitory" className='what-we-do-setionc-link'> Solicitory</Link></li>
        <li> <Link to="strategy" className='what-we-do-setionc-link'> Strategy</Link></li>
        <li> <Link to="marketingplan" className='what-we-do-setionc-link'>Marketing Plan</Link></li>
        <li> <Link to="financial" className='what-we-do-setionc-link'>Financial</Link></li>
        <li> <Link to="businessplan" className='what-we-do-setionc-link'>Business Plan</Link></li>
      </ul>
      <Outlet />
    </div>
     </div>
  )
}

export default Procets