var startContainer = document.querySelector("#start-container");
var startBtn = document.getElementById("start-button");
var questionsContainer = document.querySelector("#question-container");
var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");
var endContainer = document.getElementById("end-container");
var questionsDisplay = document.getElementById("question");
var timeId = document.getElementById("timerNumber")
var i = 0;
var secondsLeft = 75;
var score = 0;

var timerInterval;
var quizQuestions = [
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
    correctAnswer: ["4"],
  },
  {
    question: ["What instrument was whiplash about?"],
    choices: ["Drums", "Guitar", "Cajon", "steve correl"],
    correctAnswer: ["Drums"],
  },
  {
    question: ["Who was the most famous drummer in the 60s"],
    choices: [
      "Ryan reynolds",
      "Buddy Rich",
      "Alex Gonzales",
      "Drummer from Paramore",
    ],
    correctAnswer: ["Buddy Rich"],
  },
  {
    question: ["Who was queen?"],
    choices: [
      "Queen of England",
      "A band",
      "A kind of genre",
      "A bass player",
    ],
    correctAnswer: ["A band"],
  },
  {
    question: ["Whos the song heroes by?"],
    choices: ["David Bowie", "Paramore", "Bethel", "Metalica"],
    correctAnswer: ["David Bowie"],
  },
  {
    question: ["Who in the beattles was shot outside of a show?"],
    choices: [
      "None, they're alive",
      "Daniel Vargas",
      "Ivan Torres",
      "John Lennon",
    ],
    correctAnswer: ["John Lennon"],
  },
  {
    question: ["Who wrote the song Reckless love??"],
    choices: [
      "Cory Asbury",
      "Hayley from paramore",
      "Hippo Campus",
      "Gable Price",
    ],
    correctAnswer: ["Cory Asbury"],
  },
  {
    question: ["How many strings does a standard guitar have?"],
    choices: ["8", "5", "6", "1"],
    correctAnswer: ["6"],
  },
  {
    question: ["Is Music the best thing in the world??"],
    choices: ["Yes", "Heck Yea", "Absolute best", "No I am not a human though"],
    correctAnswer: ["Absolute best"],
  },
];


//This fuunction will start the quiz
startBtn.addEventListener("click", function() {
    startContainer.setAttribute("class", "hide");
    endContainer.setAttribute("class", "hide");
    questionsContainer.setAttribute("class", "none")

    setTime();
    
    startQuiz();
    
})



//This function will update the answers
function startQuiz() {
 
    if (i == quizQuestions.length) {
        startContainer.setAttribute("class", "hide");
        endContainer.setAttribute("class", "none");
        questionsContainer.setAttribute("class", "hide")

        i = 0;
       
    }
    questionsDisplay.textContent = quizQuestions[i]["question"];
    button1.textContent = quizQuestions[i].choices[0];
    button2.textContent = quizQuestions[i].choices[1];
    button3.textContent = quizQuestions[i].choices[2];
    button4.textContent = quizQuestions[i].choices[3];
    
   
}

button1.addEventListener("click", function(event) {
    if (event.target.innerHTML === quizQuestions[i]["correctAnswer"]) {
        i++;
        alert("You got it right!");
        score++
        startQuiz();
        
    } else {
        i++;
        startQuiz();
    }
})
button2.addEventListener("click", function(event) {
    if (event.target.innerHTML === quizQuestions[i]["correctAnswer"]) {
        i++;
        alert("You got it right!");
        score++
        startQuiz();
    } else {
        i++;
        startQuiz();
    }
})
button3.addEventListener("click", function(event) {
    if (event.target.innerHTML === quizQuestions[i]["correctAnswer"]) {
        i++;
        alert("You got it right!");
        score++
        startQuiz();
    } else {
        i++;
        startQuiz();
    }
})
button4.addEventListener("click", function(event) {
    if (event.target.innerHTML === quizQuestions[i]["correctAnswer"]) {
        i++;
        alert("You got it right!");
        score++
        startQuiz();
    } else {
        i++;
        startQuiz();
    }
    
})





// var buttons = document.querySelectorAll('.buttonHook').forEach(item => {
//     item.addEventListener('click', function(event) {
//      if (event.target.innerHTML = quizQuestions[i].correctAnswer[i]) {
//        i++
//         startQuiz()
//      }
    
        
//     });
//   })

//This Function will check the answers


   
function setTime() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeId.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      timeId.textContent = 0;
    }

  }, 1000);
}






// // local storage is module 4 activity 25-28
// var score = 2;
// localStorage.setItem("key", score);
// var storedScore = localStorage.getItem("key");

// var scores = [2, 3, 4, 5];
// localStorage.setItem("scores", JSON.stringify(scores));
// var storedScores = JSON.parse(localStorage.getItem("scores"));

// var scoresWithInitials = [
//   {
//     initials: "hf",
//     score: "5",
//   },
// ];
// // timer activity is module 4 activity 8
