export const GenerateNumberGrid = (props: any) => {
  return (
    <section id="number-grid-container">
      {props.arrayNum.map((num: Number) => {
        return <div id={num.toString()} key={num.toString()}>{num.toString()}</div>
      })}
    </section>
  );
}