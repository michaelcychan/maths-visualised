import React, {ChangeEvent, useState} from 'react';

import '../App.css';

import {Selection} from './typeSelection'
import {GenerateFactorNumberGrid} from './generateFactorNumberGrid'
import {GridSizeSelector} from './gridSizeSelector';
import {ExplanationFactor} from './explanationFactor';
import {ResetButton} from './resetButton';
import {setSelected} from './setSelected';

export const FactorsPage = () => {
  const [gridSize, setGridSize] = useState<number>(100);

  const changeGridSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue: string = e.target.value
    setGridSize(Number(newValue))
  }

  const [selectedNumberA, setSelectedNumberA] = useState<String>("0");
  const [selectedNumberB, setSelectedNumberB] = useState<String>("0");

  const [currentSelection, setCurrentSelection] = useState<Selection>("A")

  const gridClick = (text:string) => {
    setSelected(text, currentSelection, selectedNumberA, setSelectedNumberA, selectedNumberB, setSelectedNumberB, setCurrentSelection)
  }
  
  return (
    <>
      <GridSizeSelector changeGridSize={changeGridSize} />
      <div>
      <ExplanationFactor />
      </div>

      <br />
      <section>
        <section>
          <div>Selected Number A: {selectedNumberA}</div>
          <div>Selected Number B: {selectedNumberB}</div>
        </section>
        <ResetButton callBack1={setSelectedNumberA} callBack2={setSelectedNumberB} />
        <GenerateFactorNumberGrid gridSize={gridSize} onClick={gridClick} selected={[selectedNumberA, selectedNumberB]}/>
      </section>
    </>
  )
}