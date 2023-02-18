export const isMultipleOfSelected = (selected: String, num: number):boolean => {
  let match: boolean
  if (selected === "0") {
    match = false
  }
  if (num % Number(selected) === 0) {
    match = true
  } else {
    match =  false
  }
  return match
}