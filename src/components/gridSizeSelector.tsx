export const GridSizeSelector = (props: any) => {
  const gridSizeOption: Number[] = [100, 200, 500, 1000];

  return (
    <div id="grid-size-selector">
      <label htmlFor="grid-size">要多少格：</label>
        <select id="grid-size" name="grid-size" onChange={props.changeGridSize}>
          {gridSizeOption.map(element => {
            return <option key={element.toString()} value={element.toString()}>{element.toString()}</option>
          })}

        </select>
    </div>

  )
}