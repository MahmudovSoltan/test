import React from 'react'
import '../../Css/Home.css'
import case1 from '../../layouts/image/case1.webp'
import case2 from '../../layouts/image/case2.webp'
import case3 from '../../layouts/image/case4.webp'
import logo from '../../layouts/image/Citibank_logo.webp'
import { FaArrowRightLong } from "react-icons/fa6";
function Humanresours() {
  return (
    <div >
      <div className='what_we_do_images'>
    <div className='wgat_we_do_image'>
<img src={case2}/>

<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
    <div className='wgat_we_do_image'>
<img src={case1}/>
<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
    <div className='wgat_we_do_image'>
<img src={case3}/>
<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
    
    </div>
    
    </div>
  )
}

export default Humanresours