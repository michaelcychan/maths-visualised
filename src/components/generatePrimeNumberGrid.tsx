import { FC } from 'react';
import {isMultipleOfSelected} from './isMultipleOfSelectedArray'

export const GeneratePrimeNumberGrid:FC<{
  gridSize: number;
  onClick: Function;
  selected: string[];
}> = ({gridSize, onClick, selected}) => {

  const arrayNum: number[] = Array.from(Array(gridSize).keys()).map(x => x+1);
  return (
    <section id="number-grid-container">
      {arrayNum.map((num: number) => {
        const match: boolean = isMultipleOfSelected(selected, num)
        return <div id={num.toString()} key={num.toString()} className={match ? "black-background" : "initial-background"} onClick={() => onClick(num.toString())}> {num.toString()} </div>
      })}
    </section>
  );
}