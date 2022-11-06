import { element } from 'prop-types';
import React from 'react';
import { text } from 'stream/consumers';
import { idText } from 'typescript';

export const GenerateNumberGrid = (props: any) => {

  const arrayNum: Number[] = Array.from(Array(props.gridSize).keys()).map(x => x+1);
  return (
    <section id="number-grid-container">
      {arrayNum.map((num: Number) => {
        return <div id={num.toString()} key={num.toString()} onClick={props.click}>{num.toString()}</div>
      })}
    </section>
  );
}