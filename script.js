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
    question: "2",
    type: "image",
    answers: [
      { img: "https://via.placeholder.com/150?text=Rustic", genre: "Country" },
      { img: "https://via.placeholder.com/150?text=Colorful", genre: "Pop" },
      { img: "https://via.placeholder.com/150?text=Edgy", genre: "Rock" },
      { img: "https://via.placeholder.com/150?text=Modern", genre: "Hip Hop" }
    ]
  },

  {
    question: "3",
    type: "text",
    answers: [
      { text: "country", genre: "Country" },
      { text: "Ppop", genre: "Pop" },
      { text: "rock", genre: "Rock" },
      { text: "hiphop", genre: "Hip Hop" }
    ]
  },
  {
    question: "4",
    type: "text",
    answers: [
      { text: "country", genre: "Country" },
      { text: "Ppop", genre: "Pop" },
      { text: "rock", genre: "Rock" },
      { text: "hiphop", genre: "Hip Hop" }
    ]
  },

  {
    question: "5",
    type: "image",
    answers: [
      { img: "https://via.placeholder.com/150?text=Rustic", genre: "Country" },
      { img: "https://via.placeholder.com/150?text=Colorful", genre: "Pop" },
      { img: "https://via.placeholder.com/150?text=Edgy", genre: "Rock" },
      { img: "https://via.placeholder.com/150?text=Modern", genre: "Hip Hop" }
    ]
  },

  {
    question: "6",
    type: "text",
    answers: [
      { text: "country", genre: "Country" },
      { text: "Ppop", genre: "Pop" },
      { text: "rock", genre: "Rock" },
      { text: "hiphop", genre: "Hip Hop" }
    ]
  },
  {
    question: "7",
    type: "text",
    answers: [
      { text: "country", genre: "Country" },
      { text: "Ppop", genre: "Pop" },
      { text: "rock", genre: "Rock" },
      { text: "hiphop", genre: "Hip Hop" }
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
  },


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

  // text
  let html = `<p>Your favorite genre of music is ${resultGenre}! 🎵</p>`;
  html += `<p>Here are some songs you might enjoy:</p>`;

  // Add playlist links
  html += "<ul>";
  playlists[resultGenre].forEach(song => {
    html += `<li><a href=\"${song.url}\" target=\"_blank\">${song.title}</a></li>`;
  });
  html += "</ul>";

  resultDiv.innerHTML = html;
}

const playlists = {
  "Pop": [
    { title: "Blinding Lights - The Weeknd", url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
    { title: "Levitating - Dua Lipa", url: "https://www.youtube.com/watch?v=TUVcZfQe-Kw" },
    { title: "As It Was - Harry Styles", url: "https://www.youtube.com/watch?v=H5v3kku4y6Q" },
    { title: "Shake It Off - Taylor Swift", url: "https://www.youtube.com/watch?v=nfWlot6h_JM" },
    { title: "Bad Guy - Billie Eilish", url: "https://www.youtube.com/watch?v=DyDfgMOUjCI" }
  ],
  "Rock": [
    { title: "Smells Like Teen Spirit - Nirvana", url: "https://www.youtube.com/watch?v=hTWKbfoikeg" },
    { title: "Bohemian Rhapsody - Queen", url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" },
    { title: "Seven Nation Army - The White Stripes", url: "https://www.youtube.com/watch?v=0J2QdDbelmY" },
    { title: "Mr. Brightside - The Killers", url: "https://www.youtube.com/watch?v=gGdGFtwCNBE" },
    { title: "Sweet Child O' Mine - Guns N' Roses", url: "https://www.youtube.com/watch?v=1w7OgIMMRc4" }
  ],
  "Hip Hop": [
    { title: "HUMBLE. - Kendrick Lamar", url: "https://www.youtube.com/watch?v=tvTRZJ-4EyI" },
    { title: "SICKO MODE - Travis Scott", url: "https://www.youtube.com/watch?v=6ONRf7h3Mdk" },
    { title: "God's Plan - Drake", url: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM" },
    { title: "Lose Yourself - Eminem", url: "https://www.youtube.com/watch?v=_Yhyp-_hX2s" },
    { title: "Industry Baby - Lil Nas X", url: "https://www.youtube.com/watch?v=UTHLKHL_whs" }
  ],
  "Country": [
    { title: "Take Me Home, Country Roads - John Denver", url: "https://www.youtube.com/watch?v=1vrEljMfXYo" },
    { title: "Wagon Wheel - Darius Rucker", url: "https://www.youtube.com/watch?v=hvKyBcCDOB4" },
    { title: "Tennessee Whiskey - Chris Stapleton", url: "https://www.youtube.com/watch?v=4zAThXFOy2c" },
    { title: "Chicken Fried - Zac Brown Band", url: "https://www.youtube.com/watch?v=e4ujS1er1r0" },
    { title: "Before He Cheats - Carrie Underwood", url: "https://www.youtube.com/watch?v=WaSy8yy-mr8" }
  ]
};
showQuestion();

