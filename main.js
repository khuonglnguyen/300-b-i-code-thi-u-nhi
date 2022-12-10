function decodeMorseCode(s) {
  const array = [
    {
      morse: ".-",
      value: "A",
    },
    {
      morse: "-...",
      value: "B",
    },
    {
      morse: "-.-.",
      value: "C",
    },
    {
      morse: "-..",
      value: "D",
    },
    {
      morse: ".",
      value: "E",
    },
    {
      morse: "..-.",
      value: "F",
    },
    {
      morse: "--.",
      value: "G",
    },
    {
      morse: "....",
      value: "H",
    },
    {
      morse: "..",
      value: "I",
    },
    {
      morse: ".---",
      value: "J",
    },
    {
      morse: "-.-",
      value: "K",
    },
    {
      morse: ".-..",
      value: "L",
    },
    {
      morse: "--",
      value: "M",
    },
    {
      morse: "-.",
      value: "N",
    },
    {
      morse: "---",
      value: "O",
    },
    {
      morse: ".--.",
      value: "P",
    },
    {
      morse: "--.-",
      value: "Q",
    },
    {
      morse: ".-.",
      value: "R",
    },
    {
      morse: "...",
      value: "S",
    },
    {
      morse: "-",
      value: "T",
    },
    {
      morse: "..-",
      value: "U",
    },
    {
      morse: "...-",
      value: "V",
    },
    {
      morse: ".--",
      value: "W",
    },
    {
      morse: "-..-",
      value: "X",
    },
    {
      morse: "-.--",
      value: "Y",
    },
    {
      morse: "--..",
      value: "Z",
    },
    {
      morse: ".----",
      value: "1",
    },
    {
      morse: "..---",
      value: "2",
    },
    {
      morse: "...--",
      value: "3",
    },
    {
      morse: "....-",
      value: "4",
    },
    {
      morse: ".....",
      value: "5",
    },
    {
      morse: "-....",
      value: "6",
    },
    {
      morse: "--...",
      value: "7",
    },
    {
      morse: "---..",
      value: "8",
    },
    {
      morse: "----.",
      value: "9",
    },
    {
      morse: "-----",
      value: "0",
    },
  ];
  s = s.split(" ");
  let result = "";
  s.forEach((element) => {
    if (element === '/') {
        result += ' '
    }
    array.forEach((a) => {
       if (element === a.morse) {
        result += a.value;
      }
    });
  });
  return result.toLowerCase()
}
console.log(decodeMorseCode(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."));
