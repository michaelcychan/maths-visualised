import React, {ChangeEvent, useState, MouseEvent} from 'react';

import '../App.css';

import {GenerateMultipleNumberGrid} from './generateMultipleNumberGrid'
import {GridSizeSelector} from './gridSizeSelector';
import {extractInnerTextFromEventTarget} from './extractInnerTextFromEventTarget';
import {ExplanationMultiple} from './explanationMultiple';

export const MultiplePage = () => {
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

  return (
    <>
      <GridSizeSelector changeGridSize={changeGridSize} />
      <div>
      <ExplanationMultiple />
      </div>

      <br></br>
      <section>
        <section>
          <div>Selected Number A: {selectedNumberA}</div>
          <div>Selected Number B: {selectedNumberB}</div>
        </section>
        <GenerateMultipleNumberGrid gridSize={gridSize} click={gridClick} selected={[selectedNumberA, selectedNumberB]}/>
      </section>
    </>
  )
}