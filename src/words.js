const ENGLISH_WORDS = [
  { word: "apple", tip: "It is a fruit" },
  { word: "avocado", tip: "It is a fruit" },
  { word: "banana", tip: "It is a fruit" },
  { word: "cherry", tip: "It is a fruit" },
  { word: "grape", tip: "It is a fruit" },
  { word: "lemon", tip: "It is a fruit" },
  { word: "mango", tip: "It is a fruit" },
  { word: "pear", tip: "It is a fruit" },
  { word: "pineapple", tip: "It is a fruit" },
  { word: "strawberry", tip: "It is a fruit" },
  { word: "watermelon", tip: "It is a fruit" },
  { word: "scissor", tip: "Classroom object" },
  { word: "notebook", tip: "Classroom object" },
  { word: "eraser", tip: "Classroom object" },
  { word: "desk", tip: "Classroom object" },
  { word: "board", tip: "Classroom object" },
  { word: "ruler", tip: "Classroom object" },
  { word: "pen", tip: "Classroom object" },
  { word: "pencil", tip: "Classroom object" },
  { word: "glue", tip: "Classroom object" },
  { word: "sharpener", tip: "Classroom object" },
  { word: "book", tip: "Classroom object" },
  { word: "backpack", tip: "Classroom object" },
  { word: "stapner", tip: "Classroom object" },
  { word: "chair", tip: "Classroom object" },
  { word: "calculator", tip: "Classroom object" },
];

function randomWord() {
  return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
}

export { randomWord };
