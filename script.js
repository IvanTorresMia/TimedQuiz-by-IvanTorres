var questionsContainer = document.querySelector(".Questions-Container");
var starContainer = document.querySelector(".Start-Container");

function startQuiz() {
    questionsContainer.style.display = "none";
    starContainer.style.display = "block";
}

startQuiz()