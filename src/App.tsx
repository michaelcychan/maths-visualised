import React, {ChangeEvent, useState, MouseEvent} from 'react';

import './App.css';

import {GenerateNumberGrid} from './components/generateNumberGrid'
import {GridSizeSelector} from './components/gridSizeSelector';
import {extractInnerTextFromEventTarget} from './components/extractInnerTextFromEventTarget';
import {sortThisArray} from './components/sortThisArray';
import {ExplanationPrime} from './components/explanationPrime';

function App() {

  const [gridSize, setGridSize] = useState(100);

  const emptySelectedNumbers = new Array<string>()
  const [selectedNumbers, setSelectedNumbers] = useState(emptySelectedNumbers);
  
  const gridClick = (e: MouseEvent<HTMLElement>) => {
    const text = extractInnerTextFromEventTarget(e.target);
    if (selectedNumbers.indexOf(text) === -1) {
      setSelectedNumbers(prevState => {return sortThisArray([...prevState, text])});
    } else {
      setSelectedNumbers(prevState => {return prevState.filter(num => num !== text)});
    }
  }

  const resetSelection = () => {
    setSelectedNumbers(emptySelectedNumbers);
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
      <div>
        <ExplanationPrime />
        <section>請用滑鼠選取以下的數字。選取了的數字的倍數會變黑。<br />
        想想看，為甚麼有些數字怎樣也不能變黑？<br />
        <div>
        已塗黑這些數字的<em>2倍</em>以上的倍數：<br />
        {selectedNumbers.map(numText => {
          return <span>{numText} </span>;
        })} <br />
        </div>
        <div><button onClick={resetSelection}>由頭開始</button></div>
        
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
