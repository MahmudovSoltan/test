import React, { useState } from 'react'
import '../../Css/Courses.css'
import { FaChevronRight } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector ,useDispatch } from "react-redux";
import { setIndex ,setindex2} from "../../Redux/Slice/Product";
function Courses() {

const disPatc = useDispatch()

  const { products ,index } = useSelector((state) => state.product);
 
  const newpagination = products.slice((index - 1) * 6, index * 6);

  return (
    <div className='courses'>  

  
   
<div className='courses_headr'> 
<span>Home</span><span><FaChevronRight/></span><span>Courses</span>

</div>
     <section className='pagination_section'>

      <h2 className='pagination_title'>Courses</h2>
      <div className='filter'>
        <button>Filter <span><IoFilterSharp/></span></button>
        <div className='filter_left'>
          <span className='filter_span'>Showing 1-6 of 12 results</span>
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

      <div className="courser_paginations">
        {newpagination.map((a, i) => {
          return (
           
            <div className="courser_pagination" key={i}>
              <div className="pagination_img">
                <img src={a.img} alt="02" />
                <div className="price">{a.price}</div>
              </div>
              <h6>{a.name}</h6>
              <div className="after_line">
                <span>{a.lessons} lessons</span> <span> {a.week} weeks</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" d-flex chance_page">
        <div
             onClick={() => {
               if (index > 1) {
              }
              disPatc(setindex2());
            }}
          className={`${index === 1 ? "ds-none" : "White"}`}
        >
     <IoIosArrowBack/>
        </div>
        <div
         onClick={() => {
          if (index > 1) {
            disPatc(setindex2()); 
          }
        }}

          className={`${index === 1 ? "black" : "White"}`}
        >
          1
        </div>
        <div
            onClick={() => {
              if (index < 2) {
                disPatc(setIndex()); // 
              }
            }}
          className={`${index === 2 ? "black" : "White"}`}
        >
          2
        </div>
        <div
         onClick={() => {
          if (index >= 1) {
            disPatc(setIndex()); // Redux'ta index azaltılıyor
          }
        }}
          className={`${index === 2 ? "ds-none" : "White"}`}
        >
          <IoIosArrowForward/>
        </div>
      </div>



     </section>


      
  </div>
  )
}

export default Courses