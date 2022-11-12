export const ResetButton = (props: any) => {

  const resetButton = () => {
    props.callBack1("0")
    props.callBack2("0")

  }

  return (
    <button onClick={resetButton}>重新開始</button>
  )
}