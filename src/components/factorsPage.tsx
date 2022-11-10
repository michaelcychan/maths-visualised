import React, {ChangeEvent, useState, MouseEvent} from 'react';

import '../App.css';

import {GenerateNumberGrid} from './generateNumberGrid'
import {GridSizeSelector} from './gridSizeSelector';
import {extractInnerTextFromEventTarget} from './extractInnerTextFromEventTarget';
import {sortThisArray} from './sortThisArray';
import {ExplanationFactor} from './explanationFactor';

export const FactorsPage = () => {
  const [gridSize, setGridSize] = useState(100);

  const changeGridSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue: string = e.target.value
    setGridSize(Number(newValue))
  }

  const gridClick = () => {

  }

  const emptySelectedNumbers = new Array<string>()
  const [selectedNumbers, setSelectedNumbers] = useState(emptySelectedNumbers);
  

  return (
    <>
      <GridSizeSelector changeGridSize={changeGridSize} />
      <div>
      <ExplanationFactor />
      </div>

      <br></br>
      <section>
        <GenerateNumberGrid gridSize={gridSize} click={gridClick} selected={selectedNumbers}/>
      </section>
    </>
  )


}