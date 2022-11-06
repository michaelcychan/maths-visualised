import React, {ChangeEvent, useState} from 'react';
import PropTypes from 'prop-types';

import './App.css';

import {GenerateNumberGrid} from './components/generateNumberGrid'

function App() {

  const [gridSize, setGridSize] = useState(100);
  
  const gridSizeOption: Number[] = [100, 200, 500, 1000];

  

  const changeGridSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue: string = e.target.value
    setGridSize(Number(newValue))
  }

  return (
    <div className="App">
      <header className="App-header">
          一起學數學！
      </header>
      <section id="grid-size-setter">
        <label htmlFor="grid-size">要多少格：</label>
        <select id="grid-size" name="grid-size" onChange={changeGridSize}>
          {gridSizeOption.map(element => {
            return <option key={element.toString()} value={element.toString()}>{element.toString()}</option>
          })}

        </select>
      </section>
      <section>
        <GenerateNumberGrid gridSize={gridSize}/>
      </section>
    </div>
  );
}

export default App;
