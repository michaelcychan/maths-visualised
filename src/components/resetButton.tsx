export const ResetButton = (props: any) => {

  const resetButton = () => {
    props.callBack1(props.initialValue)
    props.callBack2(props.initialValue)

  }

  return (
    <button onClick={resetButton}>重新開始</button>
  )
}