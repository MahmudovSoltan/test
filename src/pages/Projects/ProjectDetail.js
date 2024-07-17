import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import '../../Css/Projectdetail.css'
import case1 from '../../layouts/image/case1.webp'
import case3 from '../../layouts/image/case4.webp'
import logo from '../../layouts/image/Citibank_logo.webp'
import case4 from '../../layouts/image/case-bigszie-02-600x439.webp'
import { FaArrowRightLong } from "react-icons/fa6";
function ProjectDetail() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div className='courses_headr'>
        <span>Home</span><span><FaChevronRight /></span><span>Courses</span><span><FaChevronRight /></span><span>Career Coaching</span>

      </div>
      <div className="detail-project-section">
        <div>


          <div className="procect-detail">
            <img src="https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2016/03/case-bigszie-05-scaled.jpg" />
              <h2>
              Soft Skills
              </h2>
              <p className="procect-detail-text">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate.
              </p>
              <p className="procect-detail-text">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate.
              </p>
              <h3>
              Project Challenging Story
              </h3>
              <p className="procect-detail-text">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate.
              </p>
              <h3>
              Solutions
              </h3>
              <p className="procect-detail-text">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate.
              </p>
              <h3>
              Result
              </h3>
              <p className="procect-detail-text">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate.
              </p>
          </div>
          <div className="project-info">
            <div className="project-info-top">
              <h4>
                Project Information
              </h4>
            </div>
            <div className="project-info-items">

           
            <div className="project-info-item">
              <h6>
                Clients
              </h6>
              <p>
                Michael
              </p>
              </div>
              <div className="project-info-item">
              <h6>
                Category
              </h6>
              <p>
                Human , Resources , Solicitory
              </p>

              </div>
         <div className="project-info-item border_none">
              <h6>
              Complete Date
              </h6>
              <p>
              March 1, 2016
              </p>

         </div>
         </div>

          </div>
        </div>

      </div>

        <div className='what_we_do_images'>

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
    
    </div>
    </div>
  )
}

export default ProjectDetail