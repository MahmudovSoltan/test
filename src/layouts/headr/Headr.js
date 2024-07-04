import React, { useEffect, useState } from 'react'
import '../../Css/Headr.css'
import Logo from '../image/logo.svg'
import { Link, Outlet } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { BsDiamond } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

function Headr() {
const [show,setShow]=useState(false)
useEffect(()=>{

window.addEventListener("scroll",()=>{
window.scrollY>1?setShow(true):setShow(false)

})

},[])
    return (

                                      
        <div className='headr'>
            <nav className={`navbar ${show?"navbar_shodov" : ""}`}>                                                            

                <div className='navbar_logo'>
                    <img src={Logo} />
                </div>


                <div className='navbar_right'>
                    <div>
                <ul className='navbar_links'>
          <li className='navbar_li'>
            <Link className='navbar_link_red' to="/">Home</Link>
          </li>
          <li className='navbar_li '>
            <Link className='navbar_link' to="/courses">Courses <FaAngleDown/></Link>

            <ul className='navbar_ul'>
                
                <li className='navbar_ul_li navbar_Link_li'>
                    <Link to="CourseLeyouteOne" className='navbar_ul_link '> Courses Leyout 1</Link>
                </li>
                <li className='navbar_ul_li navbar_Link_li'>
                    <Link to="CourseLeyouteTwo" className='navbar_ul_link'> Courses Leyout 2</Link>
                </li>
            </ul>
            <Outlet/>
          </li>
          <li className='navbar_li'>
            <Link className='navbar_link' to="/project">Projects<FaAngleDown/>
            </Link>
            <ul className='navbar_ul'>
                <li className='navbar_ul_li navbar_Link_li'>
                    <Link to="projectdetail" className='navbar_ul_link'>Procet Detail</Link>
                </li>
            </ul>
          </li>
          <li className='navbar_li'>
            <Link className='navbar_link' to="/ourservices">Our Services<FaAngleDown/>
            </Link>
            <ul className='navbar_ul'>
                <li className='navbar_ul_li navbar_Link_li'>
                    <Link className='navbar_ul_link'>Start Ups</Link>
                </li>
                <li className='navbar_ul_li navbar_Link_li'>
                    <Link className='navbar_ul_link'>Organisational</Link>
                </li>
                <li className='navbar_ul_li navbar_Link_li'>
                    <Link className='navbar_ul_link'>Stragety Consaltncy</Link>
                </li>
            </ul>
          </li>
          <li className='navbar_li'>
            <Link className='navbar_link'>Pages<FaAngleDown/>
            </Link>
            <ul className='navbar_ul'>
                <li className='navbar_ul_li navbar_Link_li'>
                    <Link to="aboutUs" className='navbar_ul_link '>About Us</Link>
                </li>
                <li  className='navbar_ul_li display_flex navbar_Link_li'>
                    <div>
                    <Link className='navbar_ul_link'>Blog</Link>
                    </div>
                    <div> <FaChevronRight/></div>
               <ul className='navbar_blog navbar_Link_li2'>
                <li className=''>
                    <Link className='navbar_blog_Link '>Blog Sidebar Right</Link>
                </li>
               </ul>
                   
                </li>
                <li className='navbar_ul_li navbar_Link_li'>
                    <Link className='navbar_ul_link'>Events</Link>
                </li>
                <li className='navbar_ul_li  display_flex navbar_ul_li '>
                    <div className=''><Link className='navbar_ul_link'>Shop</Link></div>
                    <div> <FaChevronRight/></div>
            <ul className='navbar_Link_ul'>
                <li className='navbar_Link_li' >
                    <Link className='navbar_li_Link'>Product Catagories</Link>
                </li>
                <li className='navbar_Link_li'>
                    <Link className='navbar_li_Link' >Product Tags</Link>
                </li>
                <li className='navbar_Link_li'>
                    <Link className='navbar_li_Link'>Product Details</Link>
                </li>
                <li className='navbar_Link_li'>
                    <Link className='navbar_li_Link'>Cart</Link>
                </li>
                
            </ul>
                </li>
                <li className='navbar_ul_li  navbar_Link_li'>
                    <Link className='navbar_ul_link'>Our Team</Link>
                </li>
            </ul>
          </li>
          <li className='navbar_li'>
            <Link className='navbar_link' to="/contact">Contact</Link>
          </li>

        </ul>
        <Outlet/>

                    </div>

                    <div className='navbar_search' >
                        <span className='navbar_icon'><IoSearch/></span>
                             
                             {/* <div className='navbar_search_bottom'>
                                <input className='searchInput' name='text' placeholder='search'/>
                                <span><IoSearch/></span>
                             </div> */}
                    </div>
                    <div >
                        <button className='navbar_button'>Get In Touch <span className='iconRight'> < FaArrowRightLong/></span> </button>
                    </div>

<div className='menu_icon'><MdOutlineMenu/></div>

                </div>
        




            </nav>


        </div>
        
    )
}

export default Headr