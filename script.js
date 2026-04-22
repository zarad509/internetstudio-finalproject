const questions = [
  {
    question: "What's your ideal vibe?",
    type: "text",
    answers: [
      { text: "Relaxing at home", genre: "Country" },
      { text: "Partying with friends", genre: "Pop" },
      { text: "Exploring nature", genre: "Rock" },
      { text: "Working on goals", genre: "Hip Hop" }
    ]
  },
  {
    question: "Pick a room aesthetic:",
    type: "image",
    answers: [
      { img: "https://via.placeholder.com/150?text=Rustic", genre: "Country" },
      { img: "https://via.placeholder.com/150?text=Colorful", genre: "Pop" },
      { img: "https://via.placeholder.com/150?text=Edgy", genre: "Rock" },
      { img: "https://via.placeholder.com/150?text=Modern", genre: "Hip Hop" }
    ]
  }
];

let currentQuestion = 0;

let scores = {
  "Country": 0,
  "Rock": 0,
  "Hip Hop": 0,
  "Pop": 0
};

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  const q = questions[currentQuestion];

  const questionEl = document.createElement("div");
  questionEl.className = "question";
  questionEl.innerText = q.question;
  quizDiv.appendChild(questionEl);

  const answersDiv = document.createElement("div");
  answersDiv.className = "answers";

  q.answers.forEach(answer => {
    if (q.type === "text") {
      const btn = document.createElement("button");
      btn.innerText = answer.text;
      btn.onclick = () => selectAnswer(answer.genre);
      answersDiv.appendChild(btn);
    } else {
      const img = document.createElement("img");
      img.src = answer.img;
      img.className = "image-option";
      img.onclick = () => selectAnswer(answer.genre);
      answersDiv.appendChild(img);
    }
  });

  quizDiv.appendChild(answersDiv);
}

function selectAnswer(genre) {
  scores[genre]++;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const resultDiv = document.getElementById("result");

  let max = 0;
  let resultGenre = "";

  for (let genre in scores) {
    if (scores[genre] > max) {
      max = scores[genre];
      resultGenre = genre;
    }
  }

  document.getElementById("quiz").innerHTML = "";
  resultDiv.innerText = "Your music personality is: " + resultGenre;
}

showQuestion();