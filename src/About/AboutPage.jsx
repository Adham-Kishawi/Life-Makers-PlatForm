import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AboutHero from './AboutHero';
import AboutMissionVision from './AboutMissionVision';
import AboutPrograms from './AboutPrograms';
import AboutImpact from './AboutImpact';
import AboutCTA from './AboutCTA';

export default function AboutPage() {
  return (
     <div className="footer-respons">
<Header/>
<Nav/>
 <div className="spacer"></div>
 
<AboutHero/>
 <div className="spacer"></div>
 <AboutMissionVision/>
 <div className="spacer"></div>
 <AboutPrograms/>
 <div className="spacer"></div>
 <AboutImpact/>
 <div className="spacer"></div>
 <AboutCTA/>
 <div className="spacer"></div>




<Footer/>

    </div>
  );
}
