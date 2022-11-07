import React, {ChangeEvent, useState, MouseEvent} from 'react';
import PropTypes from 'prop-types';

import './App.css';

import {GenerateNumberGrid} from './components/generateNumberGrid'
import {GridSizeSelector} from './components/gridSizeSelector';
import {extractInnerTextFromEventTarget} from './components/extractInnerTextFromEventTarget'

function App() {

  const [gridSize, setGridSize] = useState(100);

  const [selectedNumbers, setSelectedNumbers] = useState(new Array<string>());
  
  const gridClick = (e: MouseEvent<HTMLElement>) => {
    const text = extractInnerTextFromEventTarget(e.target);
    if (selectedNumbers.indexOf(text) === -1) {
      setSelectedNumbers(prevState => {return [...prevState, text]});
    } else {
      setSelectedNumbers(prevState => {return prevState.filter(num => num !== text)});
    }
  }

  const changeGridSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue: string = e.target.value
    setGridSize(Number(newValue))
  }

  return (
    <div className="App">
      <header className="App-header">
          一起學數學！
      </header>
      <GridSizeSelector changeGridSize={changeGridSize} />
      <br></br>
      <section>
        <GenerateNumberGrid gridSize={gridSize} click={gridClick} selected={selectedNumbers}/>
      </section>
      <div>
        <p>Selected Number (visualised only for Dev):</p>
        {selectedNumbers.map(numText => {
          return <span>{numText} </span>;
        })}
      </div>
    </div>
  );
}

export default App;
