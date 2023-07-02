export function randomNum(arr) {
  return Math.floor(Math.random() * arr.length);
}

export function userScore(arr) {
  let value = 0;

  arr.forEach((item) => {
    value += item.value;
  });
  return value;
}

export function dillerScore(arr) {
  let value = 0;

  arr.forEach((item) => {
    value += item.value;
  });
  return value;
}
