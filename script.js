

let startContainer = document.querySelector("#start-container");
let startBtn = document.getElementById("start-button");
let questionsContainer = document.querySelector("#question-container");
let checkContainer = document.getElementById("check-container");
let initials = document.getElementById("name");
let endContainer = document.getElementById("end-container");
let questionsDisplay = document.getElementById("question");
let submitBtn = document.querySelector(".submit-button");
let timeId = document.getElementById("timerNumber");
let scoreList = document.getElementById("scoresList");
let tryAgain = document.getElementById("tryAgain-button");
let buttonCon = document.getElementById("button-container");
let userScore = document.getElementById("score")

// letiables for timer
let i = 0
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

//This fuunction will start the quiz
startBtn.addEventListener("click", function () {
  startContainer.setAttribute("class", "hide");
  endContainer.setAttribute("class", "hide");
  questionsContainer.setAttribute("class", "none");

  setTime();
  startQuiz();
});


function startQuiz() {
  if (i == quizQuestions.length) {
    endQuiz();
  } else {
    questionsDisplay.textContent = quizQuestions[i]["question"];

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
  console.log(e.target);

  if (e.target.innerHTML === quizQuestions[i]["correctAnswer"]) {
    i++;
    score++;
    checkContainer.textContent = "Correct!";
    buttonCon.innerHTML = "";
    userScore.innerHTML = score;
    startQuiz();
  } else {
    buttonCon.innerHTML = "";
    checkContainer.textContent = "Incorrect!";
    i++;
    if (secondsLeft <= 0) {
      endQuiz();
    } else {
      secondsLeft -= 10;
    }
    startQuiz();
  }
}

// This function ends the quiz
function endQuiz() {
  startContainer.setAttribute("class", "hide");
  endContainer.setAttribute("class", "none");
  questionsContainer.setAttribute("class", "hide");
  i = 0;
  clearInterval(timerInterval);
  timeId.textContent = 0;
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

// This is a button listener for when you hit the submit button you are able to put your scores in a list
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (initials.value === "") {
    alert("You have to type your initials");
  } else {
    // stores the value of the stores and your name
    let initialsScores = initials.value + " " + score;
    // stores the p tag
    let liItem = document.createElement("p");
    liItem.textContent = initialsScores;
    scoresList.appendChild(liItem);
  }
});

// This is an event listener for a try again button that takes you back to the questions and try again.
tryAgain.addEventListener("click", function (event) {
  event.preventDefault();

  startContainer.setAttribute("class", "hide");
  endContainer.setAttribute("class", "hide");
  questionsContainer.setAttribute("class", "none");
  secondsLeft = 75;
  startQuiz();
  setTime();
});
