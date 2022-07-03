import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import './App.css';
import image from './arrow.png';


function App() {
  const [tips, setTips] = useState('');

  const boxRef = useRef();

  const fetchTips = async () => {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    const data = await response.json();
    setTips(data.activity);
  }

  useEffect(() => {
    fetchTips();
  }, []);

  useEffect(() => {
    gsap.to(boxRef.current, {y: 55, ease: "elastic", delay: 0.5, duration: 4, repeat: -1});
  },[]);
  

   return (
    <div className="App">
      <div className='cont'>
        <h1>What should I do today?</h1>
      </div>
      <div className='cont'>
        <img className='arrow' ref={boxRef} src={image} alt='arrow' width='150px'/>
      </div>
      <div className='cont'>
        <h2>{tips}</h2>
      </div>
      <div className='cont'>
        <button className='btn' onClick={fetchTips}>NEW TIP</button>
      </div>
    </div>
  );
}

export default App;
