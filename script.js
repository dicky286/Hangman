var programmingLanguages = [
  "ruby",
  "java",
  "python",
  "javascript",
  "pascal",
  "csharp",
];

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];

programmingLanguage =
  programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)];
console.log(programmingLanguage);

for (let i = 0; i < programmingLanguage.length; ++i) {
  guessed[i] = "_ ";
  answer = answer + guessed[i];
}

document.querySelector("#wordSpotlight").innerText = answer;

document.querySelector("#maxWrong").innerHTML = maxWrong;
