import {Selection} from './typeSelection'

export const setSelected = (text: String, currentSelection: Selection, selectedNumberA: String, setSelectedNumberA: Function, selectedNumberB:String, setSeletectedNumberB: Function, setCurrentSelection: Function) => {
  if (selectedNumberA === text) {
    setSelectedNumberA("0")
    setCurrentSelection("A")
  } else if (selectedNumberB === text) {
    setSeletectedNumberB("0")
    setCurrentSelection("B")
  } else if (currentSelection === "A" && selectedNumberB !== text) {
    setSelectedNumberA(text)
    setCurrentSelection("B")
  } else if (currentSelection === "B" && selectedNumberA !== text){
    setSeletectedNumberB(text)
    setCurrentSelection("A")
  }
}