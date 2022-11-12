import React, {ChangeEvent, useState, MouseEvent} from 'react';

import '../App.css';

import {GenerateFactorNumberGrid} from './generateFactorNumberGrid'
import {GridSizeSelector} from './gridSizeSelector';
import {extractInnerTextFromEventTarget} from './extractInnerTextFromEventTarget';
import {ExplanationFactor} from './explanationFactor';
import {ResetButton} from './resetButton';

export const FactorsPage = () => {
  const [gridSize, setGridSize] = useState<number>(100);

  const changeGridSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue: string = e.target.value
    setGridSize(Number(newValue))
  }

  const initialSelected = "0"
  const [selectedNumberA, setSelectedNumberA] = useState<String>(initialSelected);
  const [selectedNumberB, setSelectedNumberB] = useState<String>(initialSelected);

  type Selection = "A" | "B"
  const [currentSelection, setCurrentSelection] = useState<Selection>("A")

  const setSelectedAndChangeCurrent = (inputText: String) => {
    if (currentSelection === "A" && selectedNumberB !== inputText) {
      setSelectedNumberA(inputText)
      setCurrentSelection("B")
    } else if (currentSelection === "B" && selectedNumberA !== inputText){
      setSelectedNumberB(inputText)
      setCurrentSelection("A")
    }
  }

  const gridClick = (e: MouseEvent<HTMLElement>) => {
    const text = extractInnerTextFromEventTarget(e.target);
    setSelectedAndChangeCurrent(text)
  }

  const resetButton = () => {
    setSelectedNumberA(initialSelected);
    setSelectedNumberB(initialSelected);
  }

  
  return (
    <>
      <GridSizeSelector changeGridSize={changeGridSize} />
      <div>
      <ExplanationFactor />
      </div>

      <br></br>
      <section>
        <section>
          <div>Selected Number A: {selectedNumberA}</div>
          <div>Selected Number B: {selectedNumberB}</div>
        </section>
        <ResetButton callBack1={setSelectedNumberA} callBack2={setSelectedNumberB} initialValue={initialSelected}/>
        <GenerateFactorNumberGrid gridSize={gridSize} click={gridClick} selected={[selectedNumberA, selectedNumberB]}/>
      </section>
    </>
  )


}