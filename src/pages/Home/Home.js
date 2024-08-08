import React, { useState, useEffect, useRef } from 'react';
import '../../Css/Home.css'
import '../../Css/Home2.css'
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowRightLong } from "react-icons/fa6";
import aboutImage from '../../layouts/image/about-box.webp';
import { Link, Outlet } from 'react-router-dom';
import { IoCheckmark } from "react-icons/io5";
import { Fade} from "react-awesome-reveal";
import Slider from "react-slick";
import courseThump from '../../layouts/image/course-thumb-04.webp';
import courseThump2 from '../../layouts/image/course-thumb-03.webp'
import courseThump3 from '../../layouts/image/course-thumb-06.webp'
import courseThump4 from '../../layouts/image/course-thumb-08.webp'
import courseThump5 from '../../layouts/image/course-thumb-11.webp'
import team1 from '../../layouts/image/team-01.webp'
import team2 from '../../layouts/image/team-02.jpg'
import team3 from '../../layouts/image/team-03.webp'
import blog1 from '../../layouts/image/blog-01-820x430.webp'
import blog2 from '../../layouts/image/blog-02-820x430.webp'
import blog3 from '../../layouts/image/blog-03-820x430.webp'
import partner1 from '../../layouts/image/icon-box-04.webp'
import partner2 from '../../layouts/image/icon-box-03.webp'
import partner3 from '../../layouts/image/icon-box-02.webp'
import partner4 from '../../layouts/image/icon-box-01.webp'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BiRightArrow } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

function Home({setPlayState}) {
  
  const [index, setIndex] = useState(0);
  const [sliderState, setSliderState] = useState([true, false, false, false, false]);

  const setSliderOnclick = (sliderIndex) => {
    const newSliderState = sliderState.map((_, idx) => idx === sliderIndex);
    setSliderState(newSliderState);
  };



  useEffect(() => {
    const indicators = document.querySelectorAll('.custom-carousel-indicators li');
    indicators.forEach((indicator, idx) => {
      indicator.classList.toggle('active', idx === index);
    });
  }, [index]);



  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };



  

  
    
      const [number, setNumber] = useState(20);

      useEffect(() => {
        const interval = setInterval(() => {
          setNumber(prevNumber => { 
            if (prevNumber < 30) {
              return prevNumber + 1;
            } else {
              clearInterval(interval);
              return prevNumber;
            }
          });
        }, 290); 

        return () => clearInterval(interval);
      }, []);
   
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

      };
  return (
    <div className='home'>
      <br />
      <br />
      <br />

  
     

      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
        <Carousel.Item>
          <div className='carousel_image1 carousel_image'>
            <div className='home_info'>
              <h1 className='home_tite'> Begin Your Successful Business Today</h1>
              <p className='home_text'>Condimentum vitae sapien pellentesque habitant morbi tristique. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Sit amet consectetur adipiscing elit pellentesque habitant. </p>
              <button className='home_btn'>Get In Touch <span><FaArrowRightLong /></span></button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel_image2 carousel_image'>
            <div className='home_info'>
              <h1 className='home_tite'> Begin Your Successful Business Today</h1>
              <p className='home_text'>Condimentum vitae sapien pellentesque habitant morbi tristique. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Sit amet consectetur adipiscing elit pellentesque habitant. </p>
              <button className='home_btn'>Get In Touch <span><FaArrowRightLong /></span></button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel_image carousel_image3'>
            <div className='home_info'>
              <h1 className='home_tite'> Begin Your Successful Business Today</h1>
              <p className='home_text'>Condimentum vitae sapien pellentesque habitant morbi tristique. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Sit amet consectetur adipiscing elit pellentesque habitant. </p>
              <button className='home_btn'>Get In Touch <span><FaArrowRightLong /></span></button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='carousel_image carousel_image4'>
            <div className='home_info'>
              <h1 className='home_tite'> Begin Your Successful Business Today</h1>
              <p className='home_text'>Condimentum vitae sapien pellentesque habitant morbi tristique. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Sit amet consectetur adipiscing elit pellentesque habitant. </p>
              <button className='home_btn'>Get In Touch <span><FaArrowRightLong /></span></button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="custom-carousel-indicator-wrapper">
        <ul className="custom-carousel-indicators">
          <li className={index === 0 ? 'active' : ''} onClick={() => setIndex(0)}></li>
          <li className={index === 1 ? 'active' : ''} onClick={() => setIndex(1)}></li>
          <li className={index === 2 ? 'active' : ''} onClick={() => setIndex(2)}></li>
          <li className={index === 3 ? 'active' : ''} onClick={() => setIndex(3)}></li>
        </ul>
      </div>


      



      
      <section>
        <div className='home_aboutUs'>
        <Fade direction="left" triggerOnce="true"duration={2500} >
<div className='home_about_imag'>
            <img src={aboutImage} alt="About Us" />
          </div>
</Fade>
<br/>
<Fade direction="right" triggerOnce="true" duration={2500} >

          <div className='home_about_info'>
            <div className='about_info_top'>
              <span>About us</span>
              <h3>The Best Solution For Your Business</h3>
            </div>
            <div className='about_info_paraqraf'>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
              </p>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.</p>
            </div>
            <div className='about_info_bottom'>
              <div className='info_bottom_left'>
                <div>
                  <div className='info_bottom_left_number'>
                    <span>{number}</span>
                    <div>Years of Experience</div>
                  </div>
                </div>
                <div className='info_bottom_right'>
                  <div><span><IoCheckmark /></span> Affordable Support</div>
                  <div><span><IoCheckmark /></span> Emergency Solution Anytime</div>
                  <div><span><IoCheckmark /></span> Reliable & Experienced Team</div>
                </div>
              </div>
              <div>
                <button className='info_button'><Link className='Link'>Read More <span><FaArrowRightLong /></span></Link></button>
              </div>
            </div>
          </div>

</Fade>
        </div>
      </section>
      <section className='section_about'>
        <div className='about_help'>
          <p>WHERE CAN WE HELP YOU</p>
          <h3>Consultancy Industries</h3>
        </div>
      
        <div className='about_help_bottom'>
          {sliderState[0] && (
            <div className='help_image'>
                <Fade direction="left" triggerOnce="true" duration={2500} >
              <div>
                <img src={courseThump} alt="Course Thumbnail" />
              </div>
              <div className='help_bottom_left'>
                <p>Ultrices eros in cursus turpis massa tincidunt dui. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Faucibus scelerisque eleifend.</p>
                <button><Link className='Link'>View More <span><FaArrowRightLong /></span></Link></button>
              </div>
          
          </Fade>
            </div>
          )}
          {sliderState[1] && (
            <div className='help_image'>
                <Fade direction="left" triggerOnce="true" duration={2500} >
              <div>
                <img src={courseThump2} alt="Course Thumbnail" />
              </div>
              <div className='help_bottom_left'>
                <p>Ultrices eros in cursus turpis massa tincidunt dui. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Faucibus scelerisque eleifend.</p>
                <button><Link className='Link'>View More <span><FaArrowRightLong /></span></Link></button>
              </div>
          
          </Fade>
            </div>
          )}
          {sliderState[2] && (
            <div className='help_image'>
                <Fade direction="left" triggerOnce="true" duration={2500} >
              <div>
                <img src={courseThump3} alt="Course Thumbnail" />
              </div>
          
              <div className='help_bottom_left'>
                <p>Ultrices eros in cursus turpis massa tincidunt dui. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Faucibus scelerisque eleifend.</p>
                <button><Link className='Link'>View More <span><FaArrowRightLong /></span></Link></button>
              </div>
          </Fade>
            </div>
          )}
          {sliderState[3] && (
            <div className='help_image'>
                <Fade direction="left" triggerOnce="true" duration={2500} >
              <div>
                <img src={courseThump4} alt="Course Thumbnail" />
              </div>
              <div className='help_bottom_left'>
                <p>Ultrices eros in cursus turpis massa tincidunt dui. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Faucibus scelerisque eleifend.</p>
                <button><Link className='Link'>View More <span><FaArrowRightLong /></span></Link></button>
              </div>
          
          </Fade>
            </div>
          )}
          {sliderState[4] && (
            <div className='help_image'>
                <Fade direction="left" triggerOnce="true" duration={2500} >
              <div>
                <img src={courseThump5} alt="Course Thumbnail" />
              </div>
              <div className='help_bottom_left'>
                <p>Ultrices eros in cursus turpis massa tincidunt dui. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Faucibus scelerisque eleifend.</p>
                <button><Link className='Link'>View More <span><FaArrowRightLong /></span></Link></button>
              </div>
          
          </Fade>
            </div>
          )}
          <div className='help_bottom_right'>
            <div className='bottom_right'>
              <div onClick={() => setSliderOnclick(0)} className='bottom_items'>
                <div className='bottom_item_right'>
                  <div className={`bottom_item_left_one ${sliderState[0] ? "red" : " "}`}>Business Planning</div>
                  <div className={`bottom_item_left_two ${sliderState[0] ? "wihite" : " "}`}>Podcasting operational change management</div>
                </div>
                <div className={`bottom_item_left ${sliderState[0] ? "wihite" : " "}`}>01</div>
              </div>
              <div onClick={() => setSliderOnclick(1)} className='bottom_items'>
                <div className='bottom_item_right'>
                  <div className={`bottom_item_left_one ${sliderState[1] ? "red" : " "}`}>Human Resources</div>
                  <div className={`bottom_item_left_two ${sliderState[1] ? "wihite" : " "}`}>Podcasting operational change management</div>
                </div>
                <div className={`bottom_item_left ${sliderState[1] ? "wihite" : " "}`}>02</div>
              </div>
              <div onClick={() => setSliderOnclick(2)} className='bottom_items'>
                <div className='bottom_item_right'>
                  <div className={`bottom_item_left_one ${sliderState[2] ? "red" : " "}`}>Project Strategy</div>
                  <div className={`bottom_item_left_two ${sliderState[2] ? "wihite" : " "}`}>Podcasting operational change management</div>
                </div>
                <div className={`bottom_item_left ${sliderState[2] ? "wihite" : " "}`}>03</div>
              </div>
              <div onClick={() => setSliderOnclick(3)} className='bottom_items'>
                <div className='bottom_item_right'>
                  <div className={`bottom_item_left_one ${sliderState[3] ? "red" : " "}`}>Start Ups</div>
                  <div className={`bottom_item_left_two ${sliderState[3] ? "wihite" : " "}`}>Podcasting operational change management</div>
                </div>
                <div className={`bottom_item_left ${sliderState[3] ? "wihite" : " "}`}>04</div>
              </div>
              <div onClick={() => setSliderOnclick(4)} className='bottom_items bottom_border'>
                <div className='bottom_item_right'>
                  <div className={`bottom_item_left_one ${sliderState[4] ? "red" : " "}`}>Financial Planning</div>
                  <div className={`bottom_item_left_two ${sliderState[4] ? "wihite" : " "}`}>Podcasting operational change management</div>
                </div>
                <div className={`bottom_item_left ${sliderState[4] ? "wihite" : " "}`}>05</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
<div className='about_whatWeDo'>
  <div className='aboutWhatWeDo_headr'>
          <div className='what-we-do-titel'> SEE WHAT WE DO</div>
    <div className='what-we-do'>
       <h3>Consultancy Cases</h3>
    </div>
    <div className="what-we-do-sections ul">
      <ul>
        <li> <Link to="/" className='what-we-do-setionc-link red'> All</Link></li>
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




</div>


      </section>


      <section className='slider_images'>
      <div className='slider_images_titel'>
  <div>OUR EXPERTS</div>
  <h3>Meet Our Experts</h3>
</div>

      <Slider {...settings}>
      <div className='image_wrap' >
    <div className='slider_imag'>
    <img src={team2}/>
    <div>
<span><FaFacebookF/></span><span><FaYoutube/></span><span><FaXTwitter/></span><span><FaLinkedinIn/></span>
    </div>
    </div>
  
  <div className='slider_imag_text'><h3> Megan Daviss</h3>
  <p>Consultant</p>
  </div>

  </div>
  <div className='image_wrap' >
    <div className='slider_imag'>
    <img src={team3}/>
    <div>
<span><FaFacebookF/></span><span><FaYoutube/></span><span><FaXTwitter/></span><span><FaLinkedinIn/></span>
    </div>
    </div>
  
  <div className='slider_imag_text'><h3> Megan Daviss</h3>
  <p>Consultant</p>
  </div>

  </div>
  <div className='image_wrap' >
    <div className='slider_imag'>
    <img src={team1}/>
    <div>
<span><FaFacebookF/></span><span><FaYoutube/></span><span><FaXTwitter/></span><span><FaLinkedinIn/></span>
    </div>
    </div>
  
  <div className='slider_imag_text'><h3> Megan Daviss</h3>
  <p>Consultant</p>
  </div>

  </div>  
      </Slider>
      </section>
      <section className='videoplay_section'>

        <div className='autoplay_video'>
<h3>Who We Are</h3>
<p>We are the consulting firm known for asking tough questions, listening well, digging in and rolling up our sleeves. We are fact-driven and action-oriented. We move our clients forward, to where they need to be.</p>
<div className='video_animation' onClick={()=>setPlayState(true)}><  BiRightArrow/></div>

        </div>
      </section>

      <section className='client_section'>
      <div className='slider_images_titel'>
  <div>OUR TESTIMONIALS</div>
  <h3>What Our Client Say</h3>
</div>

<Carousel interval={null}>
      <Carousel.Item>
        <div className='client_info'>
          <p className='client_text'>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
          <div>
            <div className='client_image'>
              <img src={team3} alt="Client" />
            </div>
            <div className='client_name'>
              <p>Maxwell Adam</p>
              <h4>CEO-WA Solutions</h4>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='client_info'>
          <p className='client_text'>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
          <div>
            <div className='client_image'>
              <img src={team2} alt="Client" />
            </div>
            <div className='client_name'>
              <p>Jay Adams</p>
              <h4>Front-end Developer</h4>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='client_info'>
          <p className='client_text'>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
          <div>
            <div className='client_image'>
              <img src={team1} alt="Client" />
            </div>
            <div className='client_name'>
              <p>Jay Janson</p>
              <h4>Front-end Developer</h4>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
      </section>

      <section className='affordable_section'>
      <div className='slider_images_titel'>
  <div>OUR TESTIMONIALS</div>
  <h3>What Our Client Say</h3>
</div>
<div className='affordable_plans'>
  <div className='affordable_plan'>
    <h4>Basic Plan</h4>
    <div className='affordable-ammount'><span>$146</span> / Month</div>
    <hr/>
    <div className='affordable-check'> <span><IoCheckmark /></span> Affordable Support</div>
    <div className='affordable-check'> <span><IoCheckmark /></span>  Emerjency Solution Anytime</div>
    <div className='affordable-check'> <span><IoCheckmark /></span>  Reliable & Experienced Team</div>
    <div className='line-through'> <span><IoCloseOutline /></span>   Business Solution </div>
    <div className='line-through'> <span><IoCloseOutline /></span>  Market  Growth Solution </div>
    <div className='line-through'> <span><IoCloseOutline /></span>   24/7 Consultant Service</div>
    <div className='afford-button'>
      <button>Read More <span><FaArrowRightLong/></span></button>
    </div>


  </div>
  <div className='affordable_plan'>
    <h4>Standard Plan</h4>
    <div className='affordable-ammount'><span>$199</span> / Month</div>
    <hr/>
    <div className='affordable-check'> <span><IoCheckmark /></span> Affordable Support</div>
    <div className='affordable-check'> <span><IoCheckmark /></span>  Emerjency Solution Anytime</div>
    <div className='affordable-check'> <span><IoCheckmark /></span>  Reliable & Experienced Team</div>
    <div className='affordable-check'> <span><IoCheckmark /></span>   Business Solution </div>
    <div className='affordable-check'> <span><IoCheckmark /></span>  Market  Growth Solution </div>
    <div className='line-through'> <span><IoCloseOutline /></span>   24/7 Consultant Service</div>
    <div className='afford-button'>
      <button>Read More <span><FaArrowRightLong/></span></button>
    </div>


  </div>
  <div className='affordable_plan'>
    <h4>Premium Plan</h4>
    <div className='affordable-ammount'><span>$246 </span> / Month</div>
    <hr/>
    <div className='affordable-check'> <span><IoCheckmark /></span> Affordable Support</div>
    <div className='affordable-check'> <span><IoCheckmark /></span>  Emerjency Solution Anytime</div>
    <div className='affordable-check'> <span><IoCheckmark /></span>  Reliable & Experienced Team</div>
    <div className='affordable-check'> <span><IoCheckmark /></span>   Business Solution </div>
    <div className='affordable-check'> <span><IoCheckmark /></span>  Market  Growth Solution </div>
    <div className='affordable-check'> <span><IoCheckmark /></span>   24/7 Consultant Service</div>
    <div className='afford-button'>
      <button>Read More <span><FaArrowRightLong/></span></button>
    </div>


  </div>

</div>


      </section>
      <section className='blog_section'>
        <div className='blog_top'>
          <div className='blog_titel'>
            <div >BLOG</div>
            <h4>Our Latest Blog</h4>
          </div>
          <div className='blog_button'>
            <button>View All Blog <span><FaArrowRightLong/></span> </button>
          </div>

        </div>
        <div className='blog_items'>
          <div className='blog_item'>
            <img src= {blog3}/>
            <div><span>Blog</span>  April 22, 2024</div>
            <h6>Why Walmart is trouncing Amazon in the grocery wars</h6>
            <p>Have realistic expectations When <br/> amazon announced the $13.7bn acquisition of Whole</p>
          </div>
          <div className='blog_item'>
            <img src= {blog1}/>
            <div><span>Blog</span>  April 22, 2024</div>
            <h6>Banking startup started Elon Musk’s passion for the letter X</h6>
            <p>Elon Musk has been pushing the X brand since before the turn of the century,...</p>
          </div>
          <div className='blog_item'>
            <img src= {blog2}/>
            <div><span>Blog</span>  April 22, 2024</div>
            <h6>Expert advice: Should you spend 25% of your income on investing in stocks?</h6>
            <p>In an interview with ETMarkets, Bhave, who has over 25 years of experience across the...</p>
          </div>

        </div>

      </section>
      <section className='partners_section'>
        <div className='partners_top'>
          <div>OUR PARTNERS</div>
          <h4>We Work With The Best Partners</h4>

        </div>
        <div className='partners_imgs'>
          <div className='partners_imag'>
             <img src={partner1}/>
             <h6>Primo Software</h6>
             <div>Software Development Mani</div>
          </div>
          <div className='partners_imag'>
             <img src={partner2}/>
             <h6>Primo Software</h6>
             <div>Software Development Mani</div>
          </div>
          <div className='partners_imag'>
             <img src={partner3}/>
             <h6>Primo Software</h6>
             <div>Software Development Mani</div>
          </div>
          <div className='partners_imag'>
             <img src={partner4}/>
             <h6>Primo Software</h6>
             <div>Software Development Mani</div>
          </div>
         

        </div>
        <div className='hom_buttom'>
          <h2>Let’s Start Working Together Get In Touch With Us</h2>
          <button>Get In Touch <span><FaArrowRightLong/></span></button>

        </div>

      </section>
    </div>
  );
}

export default Home;
