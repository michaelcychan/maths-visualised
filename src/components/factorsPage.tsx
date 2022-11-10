import React, {ChangeEvent, useState, MouseEvent} from 'react';

import '../App.css';

import {GenerateFactorNumberGrid} from './generateFactorNumberGrid'
import {GridSizeSelector} from './gridSizeSelector';
import {extractInnerTextFromEventTarget} from './extractInnerTextFromEventTarget';
import {ExplanationFactor} from './explanationFactor';

export const FactorsPage = () => {
  const [gridSize, setGridSize] = useState(100);

  const changeGridSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue: string = e.target.value
    setGridSize(Number(newValue))
  }

  const emptySelectedNumbers = "0"
  const [selectedNumberA, setSelectedNumberA] = useState(emptySelectedNumbers);
  const [selectedNumberB, setSelectedNumberB] = useState(emptySelectedNumbers);

  const [currentSelection, setCurrentSelection] = useState("A")

  const gridClick = (e: MouseEvent<HTMLElement>) => {
    const text = extractInnerTextFromEventTarget(e.target);
    console.log(text);
  }

  
  return (
    <>
      <GridSizeSelector changeGridSize={changeGridSize} />
      <div>
      <ExplanationFactor />
      </div>

      <br></br>
      <section>
        <GenerateFactorNumberGrid gridSize={gridSize} click={gridClick} selected={[selectedNumberA, selectedNumberB]}/>
      </section>
    </>
  )


}