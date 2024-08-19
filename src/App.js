import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from './pages/Home/Home';
import Courses from "./pages/Cources/Courses";
import Procets from './pages/Projects/Procets';
import OurServises from './pages/Ouer Services/OuerServices'; // Typo düzeltildi
import Pages from './pages/Pages/Pages';
import Contact from './pages/Contact/Contact';
import Headr from './layouts/headr/Headr';
import Footer from './layouts/footer/Footer';
import Humanresourse from './pages/Home/Humanresours'
import Solicitory from './pages/Home/Solicitory'
import BusinessPlan from './pages/Home/BusinessPlan'
import Financial from './pages/Home/Financial'
import MarketingPlan from './pages/Home/MarketingPlan'
import Strategy from './pages/Home/Strategy'
import All from './pages/Home/All'
import All2 from './pages/Projects/All2';
import BusinesPlan2 from './pages/Projects/BusinesPlan2';
import Videoplay from './Videoplay/Videoplay';
import BacktodoButton from './component/BacktoTopButton/BacktodoButton';
import AboutUs from './pages/Pages/AboutUs';
import CourseLeyouteOne from './pages/Cources/CourseLeyouteOne';
import CourseLeyouteTwo from './pages/Cources/CourseLeyouteTwo';
import ProjectDetail from  './pages/Projects/ProjectDetail'
import StartUp from './pages/Ouer Services/StartUp'
function App() {
const [playState,setPlayState]=useState(false)
  return (
    <div>
      <Headr />
  
      <Routes>
        <Route path='/' element={<Home setPlayState={setPlayState} />} >
      
<Route path='humanresourse' element={<Humanresourse/>}/>
<Route path='solicitory' element={<Solicitory/>}/>
<Route path='businessplan' element={<BusinessPlan/>}/>
<Route path='financial' element={<Financial/>}/>
<Route path='marketingplan' element={<MarketingPlan/>}/>
<Route path='strategy' element={<Strategy/>}/>

<Route path='/' element={<All/>}/>
        </Route>
        <Route path="/courses" element={<Courses />} />
  <Route path='CourseLeyouteOne' element={<CourseLeyouteOne/>}/>
  <Route path='CourseLeyouteTwo' element={<CourseLeyouteTwo/>}/>
     
        <Route path='ourservices' element={<OurServises />} />
        <Route  >
        <Route path='aboutUs' element={<AboutUs/>}/>
        
        </Route>
       
        <Route path='contact' element={<Contact />} />
        <Route path='project' element={<Procets />} >
        <Route path='humanresourse' element={<Humanresourse/>}/>
<Route path='solicitory' element={<Solicitory/>}/>
<Route path='businessplan' element={<BusinesPlan2/>}/>
<Route path='financial' element={<Financial/>}/>
<Route path='marketingplan' element={<MarketingPlan/>}/>
<Route path='strategy' element={<Strategy/>}/>
<Route path='/project' element={<All2/>}/>
        
        
        </Route>
      
        <Route path='projectdetail' element={<ProjectDetail/>}/>
       



      </Routes>
<BacktodoButton/>
    
<Footer/>
<Videoplay playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App;
