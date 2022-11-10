import {isFactorOfSelected} from './isFactorOfSelected'

export const GenerateFactorNumberGrid = (props: any) => {

  const arrayNum: number[] = Array.from(Array(props.gridSize).keys()).map(x => x+1);
  return (
    <section id="number-grid-container">
      {arrayNum.map((num: number) => {
        const matchA: boolean = isFactorOfSelected(props.selected[0], num)
        const matchB: boolean = isFactorOfSelected(props.selected[1], num)
        return <div id={num.toString()} key={num.toString()} className={matchA ? "black-background" : "initial-background"} onClick={props.click}> {num.toString()} </div>
      })}
    </section>
  );
}