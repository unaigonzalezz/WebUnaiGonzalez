import './App.css';
import Navbar from './components/navbar/navbar.js';
import Stripe from  './components/stripe/stripe.js'
import BigSlide from './components/bigslide/bigslide.js'
import wall1 from "./img/wall1.jpg"
import wall2 from "./img/wall2.jpg"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BigSlide/>
      
  </div> 

  );
}

export default App;
