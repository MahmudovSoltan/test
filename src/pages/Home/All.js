import React, { useState} from 'react';
import '../../Css/Home.css'
import case1 from '../../layouts/image/case1.webp'
import case2 from '../../layouts/image/case2.webp'
import case3 from '../../layouts/image/case4.webp'
import case4 from '../../layouts/image/case-bigszie-02-600x439.webp'
import case5 from '../../layouts/image/case-bigszie-01-600x439.webp'
import case6 from '../../layouts/image/case-bigszie-06-600x439.webp'
import logo from '../../layouts/image/Citibank_logo.webp'
import sercule from '../../layouts/image/download.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";

function All() {
    const [load,setLoad]=useState(false)
    const [btn,setBtn]=useState(true)


      const  changeLoad=()=>{
        if (load==false && btn==true) {
          setLoad(true)
          setBtn(false)
        } 
      }
  return (
    <div>  <div className='what_we_do_images'>
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
    <div className='wgat_we_do_image'>
<img src={case4}/>
<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
    <div className='wgat_we_do_image'>
<img src={case5}/>
<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
    <div className='wgat_we_do_image'>
<img src={case6}/>


<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>

    </div>
    {
      load&&
    <div className='wgat_we_do_image'>
<img src={case2}/>

<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
    }
{
  load&&
    <div className='wgat_we_do_image'>
<img src={case1}/>
<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
}
    {
      load&&
    <div className='wgat_we_do_image'>
<img src={case4}/>
<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
    }
    {
      load &&
    <div className='wgat_we_do_image'>
<img src={case3}/>
<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
    }

    {
      load &&
    <div className='wgat_we_do_image'>
<img src={case6}/>
<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
    }

    {
      load &&
    <div className='wgat_we_do_image'>
<img src={case5}/>
<div className='abouv_content'>
  <img src={logo}/>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum..</p>
<button>Read More <FaArrowRightLong /> </button>
</div>
    </div>
    }
{

btn&&
<div className='button_load'>

    <button className="sercule" onClick={changeLoad}>Load More <span className="sercule"><img src = {sercule}/></span></button>

</div>
}



  </div></div>
  )
}

export default All