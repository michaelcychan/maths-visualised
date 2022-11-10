import {isMultipleOfSelected} from './isMultipleOfSelected'

export const GeneratePrimeNumberGrid = (props: any) => {

  const arrayNum: number[] = Array.from(Array(props.gridSize).keys()).map(x => x+1);
  return (
    <section id="number-grid-container">
      {arrayNum.map((num: number) => {
        const match: boolean = isMultipleOfSelected(props.selected, num)
        return <div id={num.toString()} key={num.toString()} className={match ? "black-background" : "initial-background"} onClick={props.click}> {num.toString()} </div>
      })}
    </section>
  );
}