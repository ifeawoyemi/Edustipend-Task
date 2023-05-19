import './App.css';
import Navbar from "../src/components/navbar/Navbar"
import Home from "../src/home/Home"

function App() {
  return (
    <div className="App">
      <div className='appContainer'>
        <Navbar/>
        <div className="container">
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
