import './App.css';
import Can from './assets/Can.png';
import BigSlice from './assets/orange/big-slice.png';
import Leaf from './assets/orange/green-leaf.png';
import HalfOrange from './assets/orange/half-orange.png';

import SmallestPine from './assets/pine/smallest-slice.png';
import PineBigSlice from './assets/pine/big-pine.png';
import PineSlice from './assets/pine/pine-slice.png';

import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, EaselPlugin, PixiPlugin, TextPlugin);



function App() {
  var index = 0; //showing orange

  function intro() {
    gsap.fromTo(['.btn','.half-img','.big-slice-img','.leaf-img','.inc','.main-name'],{opacity:0},{opacity:1})
    gsap.fromTo('.main-name',{scale:0.7},{scale:1,duration:2})
  }

  window.onload = ()=>{
    intro()
  }

 
  function slideNex() {
    if (index === 0) {
      gsap.to('.orange-fav', { backgroundPositionX: "72%", duration: .5,ease:"power3.inOut" })
      gsap.fromTo('.pine-bg',{translateX:"100%"},{translateX:"0%",duration: .5,ease:"power3.inOut",onComplete:()=>{
        document.querySelector('.btn').classList.add('pine')
      }})

      gsap.to(['.pineSlice','.pineBigSlice','.smallestPine'],{scale:1,opacity:1})

      gsap.to('.pineSlice',{left:'56%'})
      gsap.to('.pineBigSlice',{left:'31%'})
      gsap.to('.smallestPine',{left:'62%'})

      gsap.to(['.half-img','.big-slice-img','.leaf-img'],{left:'44%',scale:.7,opacity:0})
      gsap.fromTo('.main-name',{text:"Orange"},{color:"#B7EC73",text:"Pineapple",duration: .5,ease:"power3.inOut"})

      index = 1; //showing pine
    } else {
      gsap.to('.orange-fav', { backgroundPositionX: "28%", duration: .5 ,ease:"power3.inOut"})
      gsap.fromTo('.pine-bg',{translateX:"0%"},{translateX:"100%",duration: .5,ease:"power3.inOut",onComplete:()=>{
        document.querySelector('.btn').classList.remove('pine')
      }})

      gsap.to(['.half-img','.big-slice-img','.leaf-img'],{scale:1,opacity:1})
      gsap.to('.big-slice-img',{left:'28%'})
      gsap.to('.half-img',{left:'62%'})
      gsap.to('.leaf-img',{left:'34%'})


      gsap.to(['.pineSlice','.pineBigSlice','.smallestPine'],{left:'44%',scale:.7,opacity:0})


      gsap.fromTo('.main-name',{text:"Pineapple"},{color:"#FFD399",text:"Orange",duration: .5,ease:"power3.inOut"})

      index = 0;
    }
  }



  return (
    <div className="App h-screen w-full">

      <div className="slide-main w-full h-screen flex justify-center place-items-center" id="orange">
      <div className="pine-bg"></div>
        <h1 className="main-name absolute">Orange</h1>
        <div className="absolute inc" >
          <div className="can-holder">
            <img src={Can} alt="" className="main-img"></img>
            <div className="absolute orange-fav"></div>
          </div>
        </div>
        <img src={Leaf} alt="" className="leaf-img absolute"></img>
        <img src={BigSlice} alt="" className="big-slice-img absolute"></img>
        <img src={HalfOrange} alt="" className="half-img absolute"></img>


        {/* Pine images */}

        <img src={SmallestPine} alt="" className="smallestPine absolute"></img>
        <img src={PineBigSlice} alt="" className="pineBigSlice absolute"></img>
        <img src={PineSlice} alt="" className="pineSlice absolute"></img>
        <button onClick={slideNex} className="btn btn-ghost bg-transparent rounded-full py-2 px-8 border border-black text-black absolute">Switch</button>
      </div>


    </div>
  );
}

export default App;
