import './App.css';
import OrangeCan from './assets/orange/orange-can.png';
import BigSlice from './assets/orange/big-slice.png';
import Leaf from './assets/orange/green-leaf.png';
import HalfOrange from './assets/orange/half-orange.png';



function App() {
  return (
    <div className="App h-screen w-full">

      <div className="slide-main w-full h-screen flex justify-center place-items-center" id="orange">

        <h1 className="main-name absolute">Orange</h1>
        <img src={OrangeCan} alt="" className="main-img absolute"></img>
        <img src={Leaf} alt="" className="leaf-img absolute"></img>
        <img src={BigSlice} alt="" className="big-slice-img absolute"></img>
        <img src={HalfOrange} alt="" className="half-img absolute"></img>
        <button className="btn btn-ghost bg-transparent rounded-full py-2 px-8 border border-black text-black absolute">Next</button>
      </div>


    </div>
  );
}

export default App;
