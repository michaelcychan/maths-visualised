import {Selection} from './typeSelection'

export const setSelected = (text: String, currentSelection: Selection, selectedNumberA: String, callBack1: Function, selectedNumberB:String, callBack2: Function, setCurrentSelection: Function) => {
  if (currentSelection === "A" && selectedNumberB !== text) {
    callBack1(text)
    setCurrentSelection("B")
  } else if (currentSelection === "B" && selectedNumberA !== text){
    callBack2(text)
    setCurrentSelection("A")
  }
}