import './App.css';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Hero from './components/hero';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Analytics/>
        <Newsletter/>
    </div>
  );
}

export default App;
