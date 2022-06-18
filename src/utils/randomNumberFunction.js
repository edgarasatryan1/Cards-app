export function randomInteger(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  if (JSON.parse(sessionStorage.getItem("Cards")).includes(number)) {
    return randomInteger(min, max);
  }
  return number;
}
