export const sortThisArray = (arr: String[]) => {
  return arr.sort((a,b) => {
    return Number(a) - Number(b)
  }).map(x => x.toString())
}