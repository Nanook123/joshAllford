import './App.css';
import JoshNav from './JoshNav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './AboutMe.js'
import 'animate.css';
import Technologies from './Technologies.js'
import topImg from './topImg.jpg'
import TechnicalProject from './TechnicalProjects.js';
import Footer from './Footer.js'


function App() {
  return (
    <div className="App">
      <JoshNav />
      <div id="AboutMe" className="topImg" style={{ backgroundImage: `linear-gradient(to bottom, rgba(24, 0, 36, 0.1), rgba(24, 0, 36, 1)), url(${topImg})`  }}>
     </div>
      <AboutMe />
      <Technologies />
      <div className="pt-3">
      <TechnicalProject />
      </div>
      <Footer />
    </div>
  );
}

export default App;
