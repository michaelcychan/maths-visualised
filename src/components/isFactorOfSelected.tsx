export const isFactorOfSelected = (selected: String, num: number):boolean => {
  let match: boolean = false
  if (selected === "0") {
    return match
  }
  if (Number(selected) % num === 0) {
    match = true
  }
  
  return match
}