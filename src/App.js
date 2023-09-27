import './App.css';
import Navbar from './Component/Navbar';
import Compo1 from './Component/Compo1';
import Compo2 from './Component/Compo2';
import Compo3 from './Component/Compo3';
import Compo4 from './Component/Compo4';
import Footer from './Component/Footer';
import Data from './Component/Data';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const app = Data.map((prev) => {
    console.log(prev.img)
    return <Compo2 
             img={prev.img}
             heading = {prev.heading}
             desc = {prev.desc}
             link = {prev.link}
              />
  })
  console.log(app)
  return (
    <>
      <section>
        <Navbar />
        <Compo1 />
        <div id='section1' className="display-3 container mt-5">Projects</div>
            {app}
        <Compo3/>
        <Compo4/>
        <Footer/>
      </section>
    </>
  );
}

export default App;
