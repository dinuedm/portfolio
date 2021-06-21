import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/intro'
import Work from  './components/work/work'
import Contact from "./components/contact/contact";

import './app.scss'
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className='section'>
      <Intro />
      <Work />
      <Contact />
      
      </div>
    </div>
  );
}

export default App;
