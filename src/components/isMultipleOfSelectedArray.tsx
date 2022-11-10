export const isMultipleOfSelected = (selected: String[], num: number) => {
  let match: boolean = false
  if (selected.length < 1) {
    return match
  }

  for (let i = selected.length - 1; i >= 0; i--) {
    if (selected[i] !== "1") {
      if (selected[i] === num.toString()) {
        match = false
      }
      if (num % Number(selected[i]) === 0 && num / Number(selected[i]) > 1) {
        match = true
      }
    }
  }
  return match
}