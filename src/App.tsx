import React, {ChangeEvent, useState, MouseEvent} from 'react';
import PropTypes from 'prop-types';

import './App.css';

import {GenerateNumberGrid} from './components/generateNumberGrid'
import {GridSizeSelector} from './components/gridSizeSelector';
import {extractInnerTextFromEventTarget} from './components/extractInnerTextFromEventTarget'
import {sortThisArray} from './components/sortThisArray'

function App() {

  const [gridSize, setGridSize] = useState(100);

  const [selectedNumbers, setSelectedNumbers] = useState(new Array<string>());
  
  const gridClick = (e: MouseEvent<HTMLElement>) => {
    const text = extractInnerTextFromEventTarget(e.target);
    if (selectedNumbers.indexOf(text) === -1) {
      setSelectedNumbers(prevState => {return sortThisArray([...prevState, text])});
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
      <div>
        <p>質數 (prime number) 的定義是只有兩個因數 (factor)。<br />
        例如 7 是質數，因為它的因數只有 1 和 7 ﹝共兩個﹞<br />
        但 8 不是質數，因為它的因數有 1, 2, 4, 8 ﹝共四個﹞<br />
        1 本身是一個有趣的例外，因為它只有一個因數。
        </p>
        <section>請用滑鼠選取以下的數字。選取了的數字的倍數會變黑，想想看，為甚麼有些數字怎樣也不能變黑？<br />
        {selectedNumbers.map(numText => {
          return <span>{numText} </span>;
        })} <br />
        </section>
      </div>
      <br></br>
      <section>
        <GenerateNumberGrid gridSize={gridSize} click={gridClick} selected={selectedNumbers}/>
      </section>
      
    </div>
  );
}

export default App;
