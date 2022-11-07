import {isMultipleOfSelected} from './isMultipleOfSelected'

export const GenerateNumberGrid = (props: any) => {

  const arrayNum: Number[] = Array.from(Array(props.gridSize).keys()).map(x => x+1);
  return (
    <section id="number-grid-container">
      {arrayNum.map((num: Number) => {
        const match = isMultipleOfSelected(props.selected, num)
        return <div id={num.toString()} key={num.toString()} className={match ? "blue-background" : "gree-background"} onClick={props.click}> {num.toString()} </div>
      })}
    </section>
  );
}