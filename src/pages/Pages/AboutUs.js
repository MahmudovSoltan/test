import React,{useEffect,useState} from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import '../../Css/AboutUs.css'
import Carousel from 'react-bootstrap/Carousel';
import { Fade} from "react-awesome-reveal";
import Slider from "react-slick";
import { CountUp } from 'use-count-up'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import team1 from '../../layouts/image/team-01.webp'
import team2 from '../../layouts/image/team-02.jpg'
import team3 from '../../layouts/image/team-03.webp'
import { IoIosAdd } from "react-icons/io";
import { HiMinus } from "react-icons/hi2";
function AboutUs() {
    const [index, setIndex] = useState(0);
    const [sliderState, setSliderState] = useState([true, false, false, false, false,false,false]);
  
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
    
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const [text,setText]=useState(true)
      const [text1,setText1]=useState(false)
      const [text2,setText2]=useState(false)

    function changetext() {
 if (text==true) {
  setText(false)
 }else if(text==false){
  setText(true)
  setText1(false)
  setText2(false)
 }
    }
    function changetext1() {
      if (text1==true) {
       setText1(false)
      }else if(text1==false){
       setText1(true)
       setText(false)
       setText2(false)
      }
         }
         function changetext2() {
          if (text2==true) {
           setText2(false)
          }else if(text2==false){
           setText2(true)
           setText1(false)
           setText(false)
          }
             }
   

 
  return (
    <div>
        
        <br/>
      <br/>
      <br/>
      <br/>
      <div>
      <div className='ouerServicess_headr'>
      <span>Home</span><span><FaChevronRight/></span><span>Procets</span>
      </div>
      <h2>About Us</h2>
      </div>
      <div className='aboutUs-company'>

        <div className='aboutUs-mission'>
        <Fade direction="left" triggerOnce="true" duration={2500} >
            <div className='misson_img'>
                <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/03/about-us-02.jpg'/>
            </div></Fade>
            <Fade direction="right" triggerOnce="true" duration={2500} >
            <div className='mission_info'>
                <div className='mission_title'>OUR MISSION</div>
                <h6 className="mission-header">Company Overview</h6>
                <p className="mission-paraqraf">
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                </p>
                <p className="mission-paraqraf">
                Through gaining experience in various economic periods, our team are able to identify the best opportunities whether we are in good times or bad times. Good times provide growth in our portfolio and bad times, despite the potential negative effects, can provide opportunities.
                </p>
                <div className='mission-text'>
                We see ourselves as a forward looking group of passionate property professionals with the relevant experience to match.
                </div>

            </div></Fade>

        </div>

        <div className='aboutUs-mission'>
        <Fade direction="left" triggerOnce="true" duration={2500} >
        <div className='mission_info'>
                <div className='mission_title'>OUR VISION</div>
                <h6 className="mission-header">Our Vision Great Business</h6>
                <p className="mission-paraqraf">
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                </p>
                <p className="mission-paraqraf">
                Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities.
                </p>
 </div>
            
            </Fade>
            <Fade direction="right" triggerOnce="true" duration={2500} >
         
            
            <div className='misson_img'>
                <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/03/about-us-03.jpg'/>
            </div>
            </Fade>

        </div>
        <div>

    

        <Fade  direction="up" triggerOnce="true">
            <div className='mission-counts'>
                <div className="mission-count">
                    <div className="mission-number">
                    <CountUp isCounting start={0} end={30} duration={5.2} />
                
                    </div>
                    <p>
                    Year of experience
                    </p>

                </div>
                <div className="mission-count">
                    <div className="mission-number">
                    <CountUp isCounting start={0} end={96} duration={5.2} />
                    </div>
                    <p>
                    Year of experience
                    </p>

                </div>
                <div className="mission-count">
                    <div className="mission-number">
                    <CountUp isCounting start={-5} end={11} duration={5.2} />k
                    </div>
                    <p>
                    Year of experience
                    </p>

                </div>
                <div className="mission-count">
                    <div className="mission-number">
                    <CountUp isCounting start={0} end={30} duration={5.2} />k
                    </div>
                    <p>
                    Year of experience
                    </p>

                </div>


            </div>
        </Fade>

        </div>
      </div>
      <section className="mission-slider-section"> 

        <div className="mission-slider-title">
            <div className='mission_title'>
            OUR MEDIA
            </div>
            <h3 className="mission-header">
            Our Company On Media Show
            </h3>

        </div>
      <div className="slider-container">

      <Fade  direction="up" triggerOnce="true" duration={3500}>
      <Slider {...settings}>
        <div className='mission-slider'>
        <img className="mission-img" src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-09-820x430.jpg'/>
        <div className='slider-container-bottom'>
            <span className='span-line'>Blog</span><span className="span-date">Janury 20,2022</span>
        </div>
        <h6 className="slider-title">How to Prevent Your Emotional Insecurity</h6>
        <p className="span-date">It is a long established fact that a reader will be distracted by the readable...</p>
        </div>
        <div className='mission-slider'>
        <img className="mission-img" src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-08-820x430.jpg'/>
        <div className='slider-container-bottom'>
            <span className='span-line'>Blog</span><span className="span-date">Janury 20,2022</span>
        </div>
        <h6 className="slider-title">What the pro-business tax agenda is chasing in a changing Congress</h6>
        <p className="span-date">It is a long established fact that a reader will be distracted by the readable...</p>
        </div>
        <div className='mission-slider'>
        <img className="mission-img" src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-06-820x430.jpg'/>
        <div className='slider-container-bottom'>
            <span className='span-line'>Blog</span><span className="span-date">Janury 20,2022</span>
        </div>
        <h6 className="slider-title">Why Mark Zuckerberg is talking so much about Meta’s Whatsapp for business</h6>
        <p className="span-date">It is a long established fact that a reader will be distracted by the readable...</p>
        </div>
        <div className='mission-slider'>
        <img className="mission-img" src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-05-820x430.jpg'/>
        <div className='slider-container-bottom'>
            <span className='span-line'>Blog</span><span className="span-date">Janury 20,2022</span>
        </div>
        <h6 className="slider-title">Inflation? Recession? Starting Black Friday, Americans say they will be spending</h6>
        <p className="span-date">It is a long established fact that a reader will be distracted by the readable...</p>

        </div>
       
      
      </Slider>
      </Fade>
    </div>


    </section>
    <section className='timeline-section '>
      <div className="display-flex">

      {sliderState[0] && (
            <Fade direction="left" triggerOnce="true" duration={2500} > 
<div className="timline-left">
  <div className="mission_title">OUR HISTORY</div>
  <h2 className="timline-title">With Your Business More Than 30 Years</h2>
  <p className="timline-text">
  Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit. Interdum consectetur libero id faucibus nisl. Ornare quam viverra orci sagittis eu volutpat odio.
  </p>

</div></Fade> )}
      {sliderState[1] && ( 
         <Fade direction="left" triggerOnce="true" duration={2500} > 
<div className="timline-left">
  <div className="mission_title">OUR HISTORY</div>
  <h2 className="timline-title">With Your Business More Than 30 Years</h2>
  <p className="timline-text">
  Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit. Interdum consectetur libero id faucibus nisl. Ornare quam viverra orci sagittis eu volutpat odio.
  </p>

</div></Fade>)}
      {sliderState[2] && ( <Fade direction="left" triggerOnce="true" duration={2500} >  
<div className="timline-left">
  <div className="mission_title">OUR HISTORY</div>
  <h2 className="timline-title">With Your Business More Than 30 Years</h2>
  <p className="timline-text">
  Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit. Interdum consectetur libero id faucibus nisl. Ornare quam viverra orci sagittis eu volutpat odio.
  </p>

</div></Fade>)}
      {sliderState[3] && ( 
         <Fade direction="left" triggerOnce="true" duration={2500} > 
<div className="timline-left">
  <div className="mission_title">OUR HISTORY</div>
  <h2 className="timline-title">With Your Business More Than 30 Years</h2>
  <p className="timline-text">
  Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit. Interdum consectetur libero id faucibus nisl. Ornare quam viverra orci sagittis eu volutpat odio.
  </p>

</div></Fade>)}
      {sliderState[4] && ( 
        <Fade direction="left" triggerOnce="true" duration={2500} >  
<div className="timline-left">
  <div className="mission_title">OUR HISTORY</div>
  <h2 className="timline-title">With Your Business More Than 30 Years</h2>
  <p className="timline-text">
  Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit. Interdum consectetur libero id faucibus nisl. Ornare quam viverra orci sagittis eu volutpat odio.
  </p>

</div></Fade>)}
      {sliderState[5] && ( 
        <Fade direction="left" triggerOnce="true" duration={2500} >  
<div className="timline-left">
  <div className="mission_title">OUR HISTORY</div>
  <h2 className="timline-title">With Your Business More Than 30 Years</h2>
  <p className="timline-text">
  Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit. Interdum consectetur libero id faucibus nisl. Ornare quam viverra orci sagittis eu volutpat odio.
  </p>

</div></Fade>)}
      {sliderState[6] && ( 
        <Fade direction="left" triggerOnce="true" duration={2500} >  
<div className="timline-left">
  <div className="mission_title">OUR HISTORY</div>
  <h2 className="timline-title">With Your Business More Than 30 Years</h2>
  <p className="timline-text">
  Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Massa massa ultricies mi quis hendrerit. Interdum consectetur libero id faucibus nisl. Ornare quam viverra orci sagittis eu volutpat odio.
  </p>

</div></Fade>)}
      
        <div className='timline-right'>
  



          {sliderState[0] && (
            
                <Fade direction="right" triggerOnce="true" duration={2500} >
              <div className="timline-main-imag" >
              <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-06.jpg'/>
              </div>
          </Fade>
         
          )}
          {sliderState[1] && (
          <Fade direction="right" triggerOnce="true" duration={2500} >
          <div className="timline-main-imag" >
          <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-02.jpg'/>
          </div>
      </Fade>
          )}
          {sliderState[2] && (
             <Fade direction="right" triggerOnce="true" duration={2500} >
             <div className="timline-main-imag" >
             <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-05.jpg'/>
             </div>
         </Fade>
          )}
          {sliderState[3] && (
              <Fade direction="right" triggerOnce="true" duration={2500} >
              <div className="timline-main-imag" >
              <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-07.jpg'/>
              </div>
          </Fade>
          )}
          {sliderState[4] && (
              <Fade direction="right" triggerOnce="true" duration={2500} >
              <div className="timline-main-imag" >
              <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-09.jpg'/>
              </div>
          </Fade>
          )}
          {sliderState[5] && (
              <Fade direction="right" triggerOnce="true" duration={2500} >
              <div className="timline-main-imag" >
              <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-04.jpg'/>
              </div>
          </Fade>
          )}
          {sliderState[6] && (
              <Fade direction="right" triggerOnce="true" duration={2500} >
              <div className="timline-main-imag" >
              <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-03.jpg'/>
              </div>
          </Fade>
          )}
          </div>
        </div>
        <div className="timline-main">

          <div className='timeline-items' onClick={() => setSliderOnclick(0)}>
          {sliderState[0] && (
            <div className='timeline-img'>
              <Fade direction="left" triggerOnce="true" duration={2500} > 
           <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-06.jpg'/></Fade>
            </div>)}
            {sliderState[0] && (
            <div className="timeline-text">
            <Fade direction="up"  triggerOnce="true" duration={2500} > 
           Private Limited Established</Fade>
           </div>)}
                 <div className={`timeline-dot ${sliderState[0] ? 'timlline-dot-bck' : ''}`}>
                 </div>
                 <div className="timeline-date">1993</div>
          </div>

          <div className='timeline-items' onClick={() => setSliderOnclick(1)}>
          {sliderState[1] && (
            <div className='timeline-img'>
              <Fade direction="left" triggerOnce="true" duration={2500} > 
           <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-02.jpg'/></Fade>
            </div>)}{sliderState[1] && (
                  <div className="timeline-text">
                  <Fade direction="up"  triggerOnce="true" duration={2500} > 
                 Private Limited Established</Fade>
                 </div>)}
                 <div className={`timeline-dot ${sliderState[1] ? 'timlline-dot-bck' : ''}`}>
                 </div>
                 <div className="timeline-date">2001</div>
          </div>
          <div className='timeline-items'onClick={() => setSliderOnclick(2)}>
          {sliderState[2] && (
            <div className='timeline-img'>
              <Fade direction="left" triggerOnce="true" duration={2500} > 
           <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-05.jpg'/></Fade>
            </div>)}{sliderState[2] && (
              <div className="timeline-text">
              <Fade direction="up"  triggerOnce="true" duration={2500} > 
             Private Limited Established</Fade>
             </div>)}
                 <div  className={`timeline-dot ${sliderState[2] ? 'timlline-dot-bck' : ''}`}>
                 </div>
                 <div className="timeline-date">2003</div>
          </div>
          <div className='timeline-items'onClick={() => setSliderOnclick(3)}>
          {sliderState[3] && (
            <div className='timeline-img'>
              <Fade direction="left" triggerOnce="true" duration={2500} > 
           <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-07.jpg'/></Fade>
            </div>)}{sliderState[3] && ( 
                 <div className="timeline-text">
                  <Fade direction="up"  triggerOnce="true" duration={2500} > 
                 Private Limited Established</Fade>
                 </div>)}
                 <div  className={`timeline-dot ${sliderState[3] ? 'timlline-dot-bck' : ''}`}>
                 </div>
                 <div className="timeline-date">2007</div>
          </div>
          <div className='timeline-items'onClick={() => setSliderOnclick(4)}>
          {sliderState[4] && (
            <div className='timeline-img'>
              <Fade direction="left" triggerOnce="true" duration={2500} > 
           <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-09.jpg'/></Fade>
            </div>)}{sliderState[4] && ( <div className="timeline-text">
                  <Fade direction="up"  triggerOnce="true" duration={2500} > 
                 Private Limited Established</Fade>
                 </div>)}
                 <div  className={`timeline-dot ${sliderState[4] ? 'timlline-dot-bck' : ''}`}>
                 </div>
                 <div className="timeline-date">2016</div>
          </div>
          <div className='timeline-items' onClick={() => setSliderOnclick(5)}>
          {sliderState[5] && (
            <div className='timeline-img'>
              <Fade direction="left" triggerOnce="true" duration={2500} > 
           <img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-04.jpg'/></Fade>
            </div>)}{sliderState[5] && (
                <div className="timeline-text">
                <Fade direction="up"  triggerOnce="true" duration={2500} > 
               Private Limited Established</Fade>
               </div>)}
                 <div  className={`timeline-dot ${sliderState[5] ? 'timlline-dot-bck' : ''}`}>
                 </div>
                 <div className="timeline-date">2019</div>
          </div>
          <div className='timeline-items'onClick={() => setSliderOnclick(6)}>
          {sliderState[6] && (
<div className='timeline-img'>
<Fade direction="left" triggerOnce="true" duration={2500} > 
<img src='https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2023/06/blog-03.jpg'/></Fade>
</div>)}{sliderState[6] && (
  <div className="timeline-text">
  <Fade direction="up"  triggerOnce="true" duration={2500} > 
 Private Limited Established</Fade>
 </div>)}
     <div  className={`timeline-dot ${sliderState[6] ? 'timlline-dot-bck' : ''}`}>
     </div>
     <div className="timeline-date">2023</div>
</div>
        </div>
      </section>
<section className="choose-section">
  <div className="choose-items">
    <div className="choose-item-left">
      <img src="https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2024/03/about-us-faqs.jpg"/>

    </div>
    <div className="choose-item-right">

   <div className='mission_title'>
   WHY CHOOSE US?
            </div>
            <h3 className="mission-header">
            Why Choose Us Consulting For Your Company?
            </h3>
    <p className="choose-text">
    We provide digital experience services to startups and small businesses. We help our clients succeed by creating brand identities, digital experiences, and print materials. Install any demo, plugin or template in a matter of seconds.
    </p>

    <div className="choose-manual-items">
    <div className="choose-manual-item" onClick={changetext}>
      <span>{text?<HiMinus/>:<IoIosAdd/>}</span><strong>Unique Brand Identity And Strategy</strong>
      </div>
      <p className={` ${text?"blok":"none"}`}>
      Our design services starts and ends with a best-in-class experience strategy that builds brands.
    </p>
    </div>
    <div className="choose-manual-items">
      <div className="choose-manual-item" onClick={changetext1}>
      <span>{text1?<HiMinus/>:<IoIosAdd/>}</span><strong>Unique Brand Identity And Strategy</strong>
      </div>
      <p className={` ${text1?"blok":"none"}`} >
      Our design services starts and ends with a best-in-class experience strategy that builds brands.
    </p>
    </div>
    <div className="choose-manual-items">
    <div className="choose-manual-item" onClick={changetext2}>
      <span>{text2?<HiMinus/>:<IoIosAdd/>}</span><strong>Unique Brand Identity And Strategy</strong>
      </div>
      <p className={` ${text2?"blok":"none"}`}>
      Our design services starts and ends with a best-in-class experience strategy that builds brands.
    </p>
    </div>
    <button className="choose-btn">Contact Us <span><FaArrowRightLong/></span></button>
    </div>

  </div>

</section>





    <section className='client_section'>
      <div className='slider_images_titel'>
  <div>OUR TESTIMONIALS</div>
  <h3>What Our Client Say</h3>
</div>
<Fade  direction="up" triggerOnce="true" duration={3500}>
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
    </Fade>
      </section>

      </div>
  )
}

export default AboutUs