import React,{useState} from 'react'
import '../../Css/Courses.css'
import { FaChevronRight } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import img1 from '../../layouts/image/case4.webp'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
function CourseLeyouteTwo() {
    const [change,setChange]=useState(true)

    const onclickChange=()=>{
    setChange(false)
    }
    const onclickChange2=()=>{
      setChange(true)
      }
  return (
    <div className='courses'>  

  
   
<div className='courses_headr'> 
<span>Home</span><span><FaChevronRight/></span><span>Courses</span><span><FaChevronRight/></span><span>Career Coaching</span>

</div>
     <section className='pagination_section'>

      <h2 className='pagination_title'>Career Coaching</h2>
      <div className="carier-coaching">
        <div className="carier-coaching-filter">
          <h5>Categories</h5>

        </div>
        <div>
      <div className='filter'>
     
        <div className="filter-rihtg">
        Showing 1-6 of 12 results
        </div>
        <div className='filter_left'>
         
          <select>
            <option>Newly published</option>
            <option>Titel a-z</option>
            <option>Titel z-a</option>
            <option>Price high to low</option>
            <option>Price low to high</option>
            <option>Popular</option>
            <option>Avarage</option>
          </select>
        </div>
      </div>

      {
        change?
      <div className='courser_paginations'>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src={img1} alt='01' />
<div className='price'>Free</div>

          </div>
          <h6>Building a business on the Internet</h6>
          <div className='after_line'><span >4 lesson</span> <span>100 weeks</span></div>

        </div>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src="https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-02-600x450.jpg" alt='02' />
<div className='price'>$80.00</div>

          </div>
          <h6>Business Analytics Course Program(Data Scientist)</h6>
          <div className='after_line'><span >4 lesson</span> <span>100 weeks</span></div>

        </div>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-03-600x450.jpg' alt='03' />
<div className='price'>$30.00</div>

          </div>
          <h6>Mini MBA Course – Lean Business Administration</h6>
          <div className='after_line'><span >4 lesson</span> <span>100 weeks</span></div>

        </div>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-04-600x450.jpg' alt='04'  />
<div className='price'>$36.00</div>

          </div>
          <h6>Professional Course Of Sales Skills And Customer Care</h6>
          <div className='after_line'><span >4 lesson</span> <span>100 weeks</span></div>

        </div>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-05-600x450.jpg' alt='05'  />
<div className='price'>$55.00</div>

          </div>
          <h6>Method of online business from home with Authority Site</h6>
          <div className='after_line'><span >4 lesson</span> <span>100 weeks</span></div>

        </div>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-06-600x450.jpg' alt='06' />
<div className='price'>Free</div>

          </div>
          <h6>Building a business on the Internet</h6>
          <div className='after_line'><span >4 lesson</span> <span>100 weeks</span></div>

        </div>





      </div>:
      <div className='courser_paginations'>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-07-600x450.jpg' alt='07' />
<div className='price'>$60.00</div>

          </div>
          <h6>Effective online business method for products</h6>
          <div className='after_line'><span >4 lesson</span> <span>100 weeks</span></div>

        </div>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src="https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-08-600x450.jpg" alt='08' />
<div className='price'>Free</div>

          </div>
          <h6>Complete retail on Facebook, Zalo, Shopee to have thousands of orders</h6>
          <div className='after_line'><span >6 lesson</span> <span>10 weeks</span></div>

        </div>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-09-600x450.jpg' alt='09' />
<div className='price'>$69.00</div>

          </div>
          <h6>Make money from selling on Smartphone</h6>
          <div className='after_line'><span >5 lesson</span> <span>10 weeks</span></div>

        </div>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-10-600x450.jpg' alt='10'  />
<div className='price'>$75.00</div>

          </div>
          <h6>Complete set of Marketing, the art of selling online from basic to actual sales, billions of...</h6>
          <div className='after_line'><span >3 lesson</span> <span>10 weeks</span></div>

        </div>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-11-600x450.jpg' alt='11'  />
<div className='price'>$99.00</div>

          </div>
          <h6>Implement your own online business</h6>
          <div className='after_line'><span >4 lesson</span> <span>10 weeks</span></div>

        </div>
        <div className='courser_pagination'>
          <div className='pagination_img'>
<img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-12-600x450.jpg' alt='12' />
<div className='price'>$94.00</div>

          </div>
          <h6>Learn Amazon Dropshiping from idea to practice.</h6>
          <div className='after_line'><span >8 lesson</span> <span>10 weeks</span></div>

        </div>





      </div>
      }


      <div className="chance_page">
        {!change&&<div onClick={onclickChange2} className="White"><IoIosArrowBack/></div>}
        <div onClick={onclickChange2} className={change ? 'black' : 'White'}>1</div>
        <div onClick={onclickChange} className={change ? 'White' : 'black'}>2</div> 
        { change&&<div onClick={onclickChange} className="White"><IoIosArrowForward/></div>}  
         </div>
            
        </div>

            
</div>
     </section>


      
  </div>
  )
}

export default CourseLeyouteTwo