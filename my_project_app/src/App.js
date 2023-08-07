import './App.css';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import SelectionCard from './components/SelectionCard';
import Footer from './components/footer';
import Hero from './components/hero';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Analytics/>
        <Newsletter/>
        <SelectionCard/>
        <Footer/>
    </div>
  );
}

export default App;
