// Nav Timer and Score Hooks
let timeId = document.getElementById("timerNumber");
let userScore = document.getElementById("userScore");

// First Container Hooks
let startContainer = document.querySelector("#start-container");
let startBtn = document.getElementById("start-button");

// Second Container Hooks
let questionsContainer = document.querySelector("#question-container");
let questionsDisplay = document.getElementById("question");
let buttonCon = document.getElementById("answers-container");
let checkContainer = document.getElementById("check-answers");

// Third Container Hooks
let endContainer = document.getElementById("end-container");
let userName = document.getElementById("name");
let submitBtn = document.querySelector(".submit-button");

//Scores Container Hooks
let scoreContainer = document.getElementById("scoreContainer");
let scoreList = document.getElementById("scoreList");
let tryAgain = document.getElementById("tryAgain");


// local Storage Scores
let scoresArr = JSON.parse(localStorage.getItem("scores")) || [];

// variables for timer
let i = 0;
let secondsLeft = 75;
let score = 0;
let timerInterval;

// object array of questions
let quizQuestions = [
  {
    question: ["What is the number system?"],
    choices: [
      "A system for guitars",
      "A drum tunning system",
      "A theoretical system to play notes",
      "A sont by the beattles",
    ],
    correctAnswer: "A theoretical system to play notes",
  },
  {
    question: ["How many members did the Beattles have"],
    choices: ["3", "6", "John Lennon", "4"],
    correctAnswer: "4",
  },
  {
    question: ["What instrument was whiplash about?"],
    choices: ["Drums", "Guitar", "Cajon", "steve correl"],
    correctAnswer: "Drums",
  },
  {
    question: ["Who was the most famous drummer in the 60s"],
    choices: [
      "Ryan reynolds",
      "Buddy Rich",
      "Alex Gonzales",
      "Drummer from Paramore",
    ],
    correctAnswer: "Buddy Rich",
  },
  {
    question: ["Who was queen?"],
    choices: ["Queen of England", "A band", "A kind of genre", "A bass player"],
    correctAnswer: "A band",
  },
  {
    question: ["Whos the song heroes by?"],
    choices: ["David Bowie", "Paramore", "Bethel", "Metalica"],
    correctAnswer: "David Bowie",
  },
  {
    question: ["Who in the beattles was shot outside of a show?"],
    choices: [
      "None, they're alive",
      "Daniel letgas",
      "Ivan Torres",
      "John Lennon",
    ],
    correctAnswer: "John Lennon",
  },
  {
    question: ["Who wrote the song Reckless love??"],
    choices: [
      "Cory Asbury",
      "Hayley from paramore",
      "Hippo Campus",
      "Gable Price",
    ],
    correctAnswer: "Cory Asbury",
  },
  {
    question: ["How many strings does a standard guitar have?"],
    choices: ["8", "5", "6", "1"],
    correctAnswer: "6",
  },
  {
    question: ["Is Music the best thing in the world??"],
    choices: ["Yes", "Heck Yea", "Absolute best", "No I am not a human though"],
    correctAnswer: "Absolute best",
  },
];

// Event Listeners
startBtn.addEventListener("click", start);
submitBtn.addEventListener("click", submit);
tryAgain.addEventListener("click", restart);

// Functions start here.
//=======================
//
// ======================

function start() {
  startContainer.setAttribute("class", "hide");
  endContainer.setAttribute("class", "hide");
  questionsContainer.setAttribute("class", "container");
  scoreContainer.setAttribute("class", "hide");

  setTime();
  questions();
}

function questions() {
  if (i == quizQuestions.length) {
    endQuiz();
  } else {
    questionsDisplay.innerHTML = quizQuestions[i]["question"];

    for (j = 0; j < 4; j++) {
      let answerButton = document.createElement("BUTTON");
      answerButton.setAttribute("id", "answer");
      answerButton.setAttribute("class", "btn-primary rounded answerButtons");
      answerButton.textContent = quizQuestions[i].choices[j];
      buttonCon.appendChild(answerButton);
      answerButton.addEventListener("click", selectAnswer);
    }
  }
}

function selectAnswer(e) {
  e.preventDefault();
  if (e.target.innerHTML === quizQuestions[i]["correctAnswer"]) {
    i++;
    score++;
    checkContainer.textContent = "Correct!";
    buttonCon.innerHTML = "";
    userScore.innerHTML = score;
    questions();
  } else {
    buttonCon.innerHTML = "";
    checkContainer.textContent = "Incorrect!";
    i++;
    if (secondsLeft <= 0) {
      endQuiz();
    } else {
      secondsLeft -= 10;
    }
    questions();
  }
}

// This Function will start the tiimer and end the quiz if it reaches 0
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeId.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// This function ends the quiz
function endQuiz() {
  startContainer.setAttribute("class", "hide");
  endContainer.setAttribute("class", "container text-center");
  questionsContainer.setAttribute("class", "hide");
  scoreContainer.setAttribute("class", "hide");
  i = 0;
  clearInterval(timerInterval);
  timeId.textContent = 0;
}

// This function will submit your name and scores to be added.
function submit(event) {
  event.preventDefault();

  if (userName.value === "") {
    alert("You have to type your name");
  } else {
    let nameScores = userName.value + ": " + score;
    userName.value = "";
    scoresArr.push(nameScores);
    localStorage.setItem("scores", JSON.stringify(scoresArr));
    scoreList.innerHTML = "";
    renderScores(scoresArr);
  }
}

// change this function so that only the top scores show up.
function renderScores(scores) {

  for (i = 0; i < scores.length; i++) {
    
    let div = document.createElement("DIV")
    div.setAttribute("class", "row")

    let currentScore = document.createElement("P");
    currentScore.setAttribute("class", "lead")
    currentScore.textContent = scores[i];

    let removeBtn = document.createElement("BUTTON");
    removeBtn.innerHTML = "delete"
    removeBtn.setAttribute("class", "btn-primary removeBtn")
 
    div.appendChild(currentScore);
    div.appendChild(removeBtn)

    scoreList.appendChild(div);
   removeBtn.addEventListener("click", deleteScore);

  }
  startContainer.setAttribute("class", "hide");
  endContainer.setAttribute("class", "hide");
  questionsContainer.setAttribute("class", "hide");
  scoreContainer.setAttribute("class", "container text-center");
}

// This is an event listener for a try again button that takes you back to the questions and try again.
function restart(event) {
  event.preventDefault();

  startContainer.setAttribute("class", "hide");
  endContainer.setAttribute("class", "hide");
  questionsContainer.setAttribute("class", "none container text-center");
  scoreContainer.setAttribute("class", "hide");

  secondsLeft = 75;
  score = 0;
  userScore.textContent = score;
  buttonCon.innerHTML = "";
  questions();
  setTime();
}

function deleteScore(e) {
e.preventDefault()


for (i = 0; i < scoresArr.length; i++) {

   if (e.target.previousElementSibling.innerHTML === scoresArr[i]) {

      scoresArr.splice(scoresArr[i], 1)

   }

}

scoreList.innerHTML = "";
renderScores(scoresArr)
 

}