function compareSumOfDigits(input) {
  let le = 0;
  let chan = 0;
  input = input.split(" ");
    input.forEach((i) => {
        console.log(i);
      const item = Number(i);
      if (item % 2 == 0) {
        chan += item;
      } else {
        le += item;
      }
    });
  return le - chan;
}
console.log(compareSumOfDigits("7 4"));