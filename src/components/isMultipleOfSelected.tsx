export const isMultipleOfSelected = (selected: String[], num: Number) => {
  if (selected.includes(num.toString())) {
    return true
  } else {
    return false
  }
}