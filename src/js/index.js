import data from "./dataset.json";

const quiz_button = document.querySelector("#button");
const music_button = document.querySelector(".music");
const modernArt_button = document.querySelector(".modern-art");
const coding_button = document.querySelector(".coding");

console.log("hello");

quiz_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  window.location.href = "topic.html";
});

// const questionContainer = document.getElementById("question-container");

// const musicArray = music.map((id) => data.id);
// console.log(data.music[0]);
// let i = 0;
// for (i = 0; i <= data.music.length; i++) console.log(data.music[i].question);

music_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  window.location.href = "music.html";
  //   const el = document.createElement("div");
  //   el.setAttribute("fl");
  //   el.innerHTML = `<p> ${console.log("hi")}</p>`;
  //   console.log("hi");
  //   for (i = 0; i <= data.music.length; i++) console.log(i);
  //   console.log("hhh");
  //   data.music.forEach((question) => {
  //     const questionElement = document.createElement("div");
  //     questionElement.setAttribute("question");
  //     questionElement.innerHTML = `<p>${question.question}</p>`;
  //     question.options.forEach((option) => {
  //       const optionElement = document.createElement("input");
  //       optionElement.type = "radio";
  //       optionElement.name = "answer";
  //       optionElement.value = option;
  //       optionElement.id = option;
  //       const labelElement = document.createElement("label");
  //       labelElement.htmlFor = option;
  //       labelElement.textContent = option;
  //       questionElement.appendChild(optionElement);
  //       questionElement.appendChild(labelElement);
  //       questionContainer.appendChild(questionElement);
  //     });
  //   });
});
