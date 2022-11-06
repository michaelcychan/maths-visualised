export const GenerateNumberGrid = (props: any) => {

  const arrayNum: Number[] = Array.from(Array(props.gridSize).keys()).map(x => x+1);
  return (
    <section id="number-grid-container">
      {arrayNum.map((num: Number) => {
        return <div id={num.toString()} key={num.toString()}>{num.toString()}</div>
      })}
    </section>
  );
}