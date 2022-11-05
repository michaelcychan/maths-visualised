import React, {ChangeEvent, useState} from 'react';
import PropTypes from 'prop-types';

import './App.css';

import {GenerateNumberGrid} from './components/generateNumberGrid'

function App() {

  const [gridSize, setGridSize] = useState(100);
  const arrayNum: Number[] = Array.from(Array(gridSize).keys()).map(x => x+1);
  const gridSizeOption: Number[] = [100, 200, 500, 10000];

  

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
        <GenerateNumberGrid arrayNum={arrayNum}/>
      </section>
    </div>
  );
}

export default App;
