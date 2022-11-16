import { FC } from "react"

export const ResetButton:FC<{
  callBack1: Function;
  callBack2: Function;
}> = ({callBack1, callBack2}) => {

  const resetButton = () => {
    callBack1("0")
    callBack2("0")

  }

  return (
    <button onClick={resetButton}>重新開始</button>
  )
}