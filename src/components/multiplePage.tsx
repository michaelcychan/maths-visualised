import React, {ChangeEvent, useState, MouseEvent} from 'react';

import '../App.css';

import {Selection} from './typeSelection'
import {GenerateMultipleNumberGrid} from './generateMultipleNumberGrid'
import {GridSizeSelector} from './gridSizeSelector';
import {extractInnerTextFromEventTarget} from './extractInnerTextFromEventTarget';
import {ExplanationMultiple} from './explanationMultiple';
import {ResetButton} from './resetButton';
import {setSelected} from './setSelected';

export const MultiplePage = () => {
  const [gridSize, setGridSize] = useState<number>(100);

  const changeGridSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue: string = e.target.value
    setGridSize(Number(newValue))
  }

  const [selectedNumberA, setSelectedNumberA] = useState<String>("0");
  const [selectedNumberB, setSelectedNumberB] = useState<String>("0");

  const [currentSelection, setCurrentSelection] = useState<Selection>("A")

  const gridClick = (e: MouseEvent<HTMLElement>) => {
    const text = extractInnerTextFromEventTarget(e.target);
    setSelected(text, currentSelection, selectedNumberA, setSelectedNumberA, selectedNumberB, setSelectedNumberB, setCurrentSelection)
  }

  return (
    <>
      <GridSizeSelector changeGridSize={changeGridSize} />
      <div>
      <ExplanationMultiple />
      </div>

      <br />
      <section>
        <section>
          <div>Selected Number A: {selectedNumberA}</div>
          <div>Selected Number B: {selectedNumberB}</div>
        </section>
        <ResetButton callBack1={setSelectedNumberA} callBack2={setSelectedNumberB} />
        <GenerateMultipleNumberGrid gridSize={gridSize} click={gridClick} selected={[selectedNumberA, selectedNumberB]}/>
      </section>
    </>
  )
}