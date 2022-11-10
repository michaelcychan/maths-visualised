import {isFactorOfSelected} from './isFactorOfSelected'

export const GenerateFactorNumberGrid = (props: any) => {

  type gridStatus = "OnlyA" | "OnlyB" | "A&B" | "None"

  const arrayNum: number[] = Array.from(Array(props.gridSize).keys()).map(x => x+1);
  return (
    <section id="number-grid-container">
      {arrayNum.map((num: number) => {
        const matchA: boolean = isFactorOfSelected(props.selected[0], num)
        const matchB: boolean = isFactorOfSelected(props.selected[1], num)
        let grid: gridStatus
        
        if (matchA && matchB) {
          grid = "A&B"
        } else if (matchA && !matchB) {
          grid = "OnlyA"
        } else if (!matchA && matchB) {
          grid = "OnlyB"
        } else {
          grid = "None"
        }

        return <div id={num.toString()} key={num.toString()} className={grid === "A&B" ? "green-background" : grid === "OnlyA" ? "blue-background" : grid === "OnlyB" ? "yellow-background" : "initial-background"} onClick={props.click}> {num.toString()} </div>
      })}
    </section>
  );
}