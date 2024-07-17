import React, {useState , useRef } from 'react'
import { FaChevronRight } from "react-icons/fa6";
import '../../Css/OuerServices.css'
import { Fade } from "react-awesome-reveal";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcBullish } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { GiNotebook } from "react-icons/gi";
import { CgTrending } from "react-icons/cg";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsRocket } from "react-icons/bs";
import { PiIntersectSquare } from "react-icons/pi";
import { TbSquares } from "react-icons/tb";
import { LuTriangleRight } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";
import { HiMinus } from "react-icons/hi2";

function OuerServices() {
  
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  
const openClick = () => {

if (open==true) {
  setOpen(false)
} else if(open==false) {
  setOpen(true)
  setOpen3(false)
}



};
const openClick2 = () => {
  if (open2==true) {
    setOpen2(false)
  } else if(open2==false) {
    setOpen2(true)
    setOpen4(false)
  }

};
const openClick3 = () => {
  if (open3==true) {
    setOpen3(false)
  } else if(open3==false) {
    setOpen3(true)
    setOpen(false)
  }
};
const openClick4 = () => {
  if (open4==true) {
    setOpen4(false)
  } else if(open4==false) {
    setOpen4(true)
    setOpen2(false)
  }

};




  return (
    <div>
<br/>
<br/>
<br/>
<br/>
      <div className='ouerServicess_headr'>
      <span>Home</span><span><FaChevronRight/></span><span>Our Services</span>
      </div>
      <h2>Our Services</h2>

      <div className="slide_side">

      <Fade direction="left" triggerOnce="true" duration={2500} >
        <div className="slideside_left" >
<img src="	https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/03/service-1.jpg" alt="left_img"/>
        </div></Fade>
        <Fade direction="right" triggerOnce="true" duration={2500}  >
        <div className="slideside_right">
          <div className="rihgt_title">
<span>OUR AWESOME PROVIDE</span>
<h3>Provide A Wide Range Of Business Services</h3>

          </div>
          <div className="right_paraqraf">
<p>
Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuadan bibendum arcu vitae elementum. Eget duis at tellus urna mentum aliqua.
</p>

<p>
Malesuada bibendum arcu vitae elementum. Semper eget duis at tellus at urna condimentum. Aliquam malesuadan bibendum arcu vitae elementum
</p>
          </div>
          <div className="right_buttom">
            <div className="right_buttom_img">
<img src="https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/03/service-01.png" alt="right_buttom_img"/>
<p>
More than 30,000 amazing feedbacks
</p>
            </div>
            <button className="btn">
            All Feedbacks<span><FaArrowRightLong/></span>
            </button>
          </div>

        </div>
        </Fade>
      </div>
      <div className="we_offer">

<div className="we_offer_head">
  <div>WHAT WE DO</div>
  <h3>Services We’re Offering</h3>
</div>
      <div className="offer_sections">
      <div className="offer_section">
<div className='offer_icon'><FcBullish/></div>
<div>
  <h6>Business Planning</h6>
  <p>Podcasting operational change management inside of workflows to establish a framework.</p>
</div>
      
      </div>
      <div className="offer_section">
<div className='offer_icon'><FaPeopleGroup/></div>
<div>
  <h6>Human Resources</h6>
  <p>Podcasting operational change management inside of workflows to establish a framework.</p>
</div>
      
      </div>
      <div className="offer_section">
<div className='offer_icon'><CgTrending/></div>
<div>
  <h6>Strategy</h6>
  <p>Podcasting operational change management inside of workflows to establish a framework.</p>
</div>
      
      </div>
      <div className="offer_section">
<div className='offer_icon'><BsRocket/></div>
<div>
  <h6>Start Ups</h6>
  <p>Podcasting operational change management inside of workflows to establish a framework.</p>
</div>
      
      </div>
      <div className="offer_section">
<div className='offer_icon'><FcBriefcase/></div>
<div>
  <h6>Organisations</h6>
  <p>Podcasting operational change management inside of workflows to establish a framework.</p>
</div>
      
      </div>
      <div className="offer_section">
<div className='offer_icon'><GiNotebook/></div>
<div>
  <h6>Financial Planning</h6>
  <p>Podcasting operational change management inside of workflows to establish a framework.</p>
</div>
      
      </div>
      </div>

      <div className="services_carousel">
        <div className="carousel_wrap">
        <div className='carousel_images2'>
          <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/03/service-02.jpg' alt='carousel1'/>
        </div>
        <div className='carousel_images2' >
          <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/05/img-tab-slide-2.jpg' alt='carousel1'/>
        </div>
        <div className='carousel_images2'>
          <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/05/img-tab-slide-3.jpg' alt='carousel1'/>
        </div>
        <div className='carousel_images2'>
          <img src='	https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/05/img-tab-slide-4.jpg' alt='carousel1'/>
        </div>
        <div className='carousel_images2'>
          <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/05/img-tab-slide-2.jpg' alt='carousel1'/>
        </div>

        </div>

     
        <div className='text_carousels'>
          <div className="carouel_titel">WORKING PROCESS</div>
          <h3>A Simple Yet Powerful And Efficient Process</h3>
<div className='text_images_items '>
<div    className='text_image_item '  >
  <div className='text_item_line '>
  </div>
  <div className='text_item_right'>
    <div className='text_number'>01</div>
    <div>
<div className="icon"><TbSquares/></div>
<div>Analysis & Research</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>

  </div>

</div>
<div className='text_image_item'  >
  <div className='text_item_line'  >
  </div>
  <div className='text_item_right' >
    <div className='text_number'>02</div>
    <div>
<div className="icon"><LuTriangleRight/></div>
<div>Project Execution</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>

  </div>

</div>
<div className='text_image_item'>
  <div className='text_item_line'  >
  </div>
  <div className='text_item_right'>
    <div className='text_number'>03</div>
    <div>
<div className="icon"><TbSquares/></div>
<div>Project Launch</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>

  </div>

</div>
<div className='text_image_item'>
  <div className='text_item_line' >
  </div>
  <div className='text_item_right'>
    <div className='text_number'>04</div>
    <div>
<div className="icon"><TbSquares/></div>
<div>Project Analysis</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>

  </div>

</div>
<div  className='text_image_item'>
  <div className='text_item_line'>
  </div>
  <div className='text_item_right'>
    <div className='text_number'>05</div>
    <div>
<div className="icon"><TbSquares/></div>
<div>Project Statistics </div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>

  </div>

</div>
<div className='text_image_item'>
  <div className='text_item_line' >
  </div>
  <div className='text_item_right'>
    <div className='text_number'>01</div>
    <div>
<div className="icon"><TbSquares/></div>
<div>Analysis & Research</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
    </div>

  </div>

</div>
</div>

        </div>
        

      </div>

<div className="we_offer_head">
  <div>QUESTIONS & ANSWERS</div>
  <h3>Frequently Asked Questions</h3>
</div>


<div className='questuin_items'>
<div className='question_items_one'>
  
<div className='question_item' onClick={openClick}>
  <div className='question_item_top'>
  <h5>1. Do You Have Examples Of Past Case Results?</h5>
  <div>{
  open?  <HiMinus/> :  <IoIosAdd/>
}</div>

  </div>
  <div className='quetion_line'>

</div>



{open &&(


<p>
  Lorem ipsum dolor sit amet consectetur. Netus cursus purus faucibus blandit project discussion elit faucibus potenti cum tempus non. Tortor id morbi velit mollis aliquet.
</p>


)}

</div>
<div className='question_item' onClick={openClick3}>
<div className='question_item_top'>
  <h5>3. Do You Have Examples Of Past Case Results?</h5>
  <div>{
  open3?  <HiMinus/> :  <IoIosAdd/>
}</div>

  </div>
  <div className='quetion_line'>

</div>
{open3 &&(


<p>
  Lorem ipsum dolor sit amet consectetur. Netus cursus purus faucibus blandit project discussion elit faucibus potenti cum tempus non. Tortor id morbi velit mollis aliquet.
</p>


)}
</div>
</div>
<div className='question_items_two'>
<div className='question_item' onClick={openClick2}>
  <div className='question_item_top'>
  <h5>2. Do You Have Examples Of Past Case Results?</h5>
  <div>{
  open2?  <HiMinus/> :  <IoIosAdd/>
}</div>

  </div>
<div className='quetion_line'>

</div>
{open2 &&(


<p>
  Lorem ipsum dolor sit amet consectetur. Netus cursus purus faucibus blandit project discussion elit faucibus potenti cum tempus non. Tortor id morbi velit mollis aliquet.
</p>


)}
</div>
<div className='question_item' onClick={openClick4}>
<div className='question_item_top'>
  <h5>4. Do You Have Examples Of Past Case Results?</h5>
  <div>{
  open4?  <HiMinus/> :  <IoIosAdd/>
}</div>

  </div>
  <div className='quetion_line'>

</div>
{open4 &&(


<p>
  Lorem ipsum dolor sit amet consectetur. Netus cursus purus faucibus blandit project discussion elit faucibus potenti cum tempus non. Tortor id morbi velit mollis aliquet.
</p>


)}
</div>
</div>

</div>




      </div>




     
    </div>
  )
}

export default OuerServices