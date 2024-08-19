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
import { IoMdClose } from "react-icons/io";

function Headr() {

    const [sliderState2, setSliderState2] = useState([true, false, false, false, false,false]);
    const setSliderOnclick2 = (sliderIndex2) => {
        const newSliderState2 = sliderState2.map((_, idx) => idx === sliderIndex2);
        setSliderState2(newSliderState2);
      };




const [show,setShow]=useState(false)
useEffect(()=>{

window.addEventListener("scroll",()=>{
window.scrollY>1?setShow(true):setShow(false)

})

},[])



const [sideBar,setSideBar] = useState(false)
const [menu,setMenu] = useState(false)
const [menu1,setMenu1] = useState(false)
const [menu2,setMenu2] = useState(false)
const [menu3,setMenu3] = useState(false)
const [menu4,setMenu4] = useState(false)
const [menu5,setMenu5] = useState(false)


function openSideBar() {
    if (sideBar == false) {
        setSideBar(true)
    } else {
        setSideBar(false)
        setMenu(false)
        setMenu1(false)
        setMenu2(false)
        setMenu3(false)
        setMenu4(false)
        setMenu5(false)
    }
    
}

function openMenu() {
    if (menu == false) {
        setMenu(true)
    } else {
        setMenu(false)
    }
    
}
function openMenu1() {
    if (menu1 == false) {
        setMenu1(true)
    } else {
        setMenu1(false)
    }
    
}
function openMenu2() {
    if (menu2 == false) {
        setMenu2(true)
    } else {
        setMenu2(false)
    }
    
}
function openMenu3() {
    if (menu3 == false) {
        setMenu3(true)
    } else {
        setMenu3(false)
    }
    
}
function openMenu4() {
    if (menu4 == false) {
        setMenu4(true)
    } else {
        setMenu4(false)
    }
    
}
function openMenu5() {
    if (menu5 == false) {
        setMenu5(true)
    } else {
        setMenu5(false)
    }
    
}


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
            <Link   className={`navbar_link ${sliderState2[0] ? "red" : " "}`} onClick={() => setSliderOnclick2(0)} to="/">Home</Link>
          </li>
          <li className='navbar_li '>
            <Link className={`navbar_link ${sliderState2[1] ? "red" : " "}`} onClick={() => setSliderOnclick2(1)} to="/courses">Courses <FaAngleDown/></Link>

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
            <Link className={`navbar_link ${sliderState2[2] ? "red" : " "}`} onClick={() => setSliderOnclick2(2)} to="/project">Projects<FaAngleDown/>
            </Link>
            <ul className='navbar_ul'>
                <li className='navbar_ul_li navbar_Link_li'>
                    <Link to="projectdetail" className='navbar_ul_link'>Procet Detail</Link>
                </li>
            </ul>
          </li>
          <li className='navbar_li'>
            <Link className={`navbar_link ${sliderState2[3] ? "red" : " "}`} onClick={() => setSliderOnclick2(3)} to="/ourservices">Our Services<FaAngleDown/>
            </Link>
            <ul className='navbar_ul'>
                <li className='navbar_ul_li navbar_Link_li'>
                    <Link  className='navbar_ul_link'>Start Ups</Link>
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
            <Link className={`navbar_link ${sliderState2[4] ? "red" : " "}`} >Pages<FaAngleDown/>
            </Link>
            <ul className='navbar_ul'>
                <li className='navbar_ul_li navbar_Link_li' onClick={() => setSliderOnclick2(4)}>
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
            <Link className={`navbar_link ${sliderState2[5] ? "red" : " "}`} onClick={() => setSliderOnclick2(5)} to="/contact">Contact</Link>
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

<div className='menu_icon' onClick={openSideBar} ><MdOutlineMenu/></div>

                </div>
        



{sideBar&&
<div className='position_absolute'>
    <div className="side-menu-close-icon" onClick={openSideBar}>
        <IoMdClose/>

    </div>
<ul className=''>
          <li className='side_navbar_li'>
            <Link className='side_navbar_link red' to="/">Home</Link>
          </li>
          <li className=' side_navbar_li'>
            <div className="display_flex">
            <Link className='side_navbar_link' to="/courses">Courses</Link>
            <div> <span onClick={openMenu}><FaAngleDown/></span></div>

            </div>

{
menu&&        <ul className=''>
                
                <li className=' '>
                    <Link to="CourseLeyouteOne" className='side_navbar_ul_li '> Courses Leyout 1</Link>
                </li>
                <li className=' '>
                    <Link to="CourseLeyouteTwo" className='side_navbar_ul_li'> Courses Leyout 2</Link>
                </li>
            </ul>}
            <Outlet/>
          </li>
          <li className='side_navbar_li'>
          <div className="display_flex">  <Link className='side_navbar_link' to="/project">Projects
            </Link>
            <div onClick={openMenu1}><FaAngleDown/></div></div>
{  menu1&&          <ul className=''>
                <li className=' '>
                    <Link to="projectdetail" className='side_navbar_ul_li'>Procet Detail</Link>
                </li>
            </ul>}
          </li>
          <li className='side_navbar_li'>
          <div className="display_flex">

            <Link className='side_navbar_link' to="/ourservices">Our Services
            </Link>
            <div><span onClick={openMenu2}><FaAngleDown/></span></div>
</div>
{   menu2 &&         <ul className=''>
                <li className=' '>
                    <Link className='side_navbar_ul_li'>Start Ups</Link>
                </li>
                <li className=' '>
                    <Link className='side_navbar_ul_li'>Organisational</Link>
                </li>
                <li className=' '>
                    <Link className='side_navbar_ul_li'>Stragety Consaltncy</Link>
                </li>
            </ul>}
          </li>
          <li className='side_navbar_li'>
          <div className="display_flex">
            <Link className='side_navbar_link'>Pages
            </Link>
            <div><span onClick={openMenu3}><FaAngleDown/></span></div>

</div>
{    menu3 &&        <ul className=''>
                <li className=' '>
                    <Link to="aboutUs" className='side_navbar_ul_li '>About Us</Link>
                </li>
                <li  className='  '>
                    <div>
                    <Link className='side_navbar_ul_li'>Blog <span onClick={openMenu4}><FaAngleDown/></span></Link>
                    </div>
{    menu4 &&           <ul className=' '>
                <li className='padding'>
                    <Link className=' side_navbar_ul_li '>Blog Sidebar Right</Link>
                </li>
               </ul>}
                
                </li>
                <li className=' '>
                    <Link className='side_navbar_ul_li'>Events</Link>
                </li>
                <li className=''>
                    <div className=''><Link className='side_navbar_ul_li'>Shop <span onClick={openMenu5}><FaAngleDown/></span></Link></div>
{    menu5 &&        <ul className='padding'>
                <li className='' >
                    <Link className='side_navbar_ul_li'>Product Catagories</Link>
                </li>
                <li className=''>
                    <Link className='side_navbar_ul_li' >Product Tags</Link>
                </li>
                <li className=''>
                    <Link className='side_navbar_ul_li'>Product Details</Link>
                </li>
                <li className=''>
                    <Link className='side_navbar_ul_li'>Cart</Link>
                </li>
                
            </ul>}
                </li>
                <li className='  '>
                    <Link className='side_navbar_ul_li'>Our Team</Link>
                </li>
            </ul>}
          </li>
          <li className='side_navbar_li'>
            <Link className='side_navbar_link' to="/contact">Contact</Link>
          </li>

        </ul>
        <Outlet/>
</div>}


            </nav>


        </div>
        
    )
}

export default Headr