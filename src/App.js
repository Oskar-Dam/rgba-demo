import './App.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import { PrettoSlider } from './components/PrettoSlider';

function App() {
  const [redColorValue, setRedColorValue] = useState(0);
  const [greenColorValue, setGreenColorValue] = useState(0);
  const [blueColorValue, setBlueColorValue] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [opacity, setOpacity] = useState(1);
  
  useEffect(() => {
    setBackgroundColor(`rgba(${redColorValue},${greenColorValue},${blueColorValue},${opacity})`);  
  }, [redColorValue, greenColorValue, blueColorValue, opacity])
  

  const handleRedChange = (event, newValue) => {
    setRedColorValue(newValue);
  };
  const handleGreenChange = (event, newValue) => {
    setGreenColorValue(newValue);
  };
  const handleBlueChange = (event, newValue) => {
    setBlueColorValue(newValue);
  };
  const handleOpacityChange = (event, newValue) => {
    setOpacity(newValue);
  };

  
  return (
    <div className="App">
      <Box sx={{ width: 320 }}>
        <div style={{width:320, height:320, backgroundColor:backgroundColor}}></div>
        <Box sx={{ m: 3 }} />
        RED
        <PrettoSlider
          back='#f50202'
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={0}
          value={redColorValue} 
          onChange={handleRedChange} 
          max={255}
        />
        <Box sx={{ m: 3 }} />
        GREEN
        <PrettoSlider
          back='#52af77'
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={0}
          value={greenColorValue} 
          onChange={handleGreenChange} 
          max={255}
        /> 
        <Box sx={{ m: 3 }} />
        BLUE
        <PrettoSlider
          back='#021ef5'
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={0}
          value={blueColorValue} 
          onChange={handleBlueChange} 
          max={255}
        />
        <Box sx={{ m: 3 }} />
        OPACITY
        <PrettoSlider
          back='#000'
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={1}
          value={opacity} 
          onChange={handleOpacityChange} 
          min={0}
          max={1}
          step={0.1}
        />
      </Box>
    </div>
  );
}

export default App;