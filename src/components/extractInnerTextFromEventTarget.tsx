export const extractInnerTextFromEventTarget = (target: EventTarget) => {
  const obj = target as HTMLElement;
  return obj.innerText;
}