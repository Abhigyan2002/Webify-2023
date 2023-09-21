const quizData = [
    {
        question: "Q1. Gravity can be push AND pull?",
        options: ["Yes", "No", "Can be both", "Can't Say"],
        correctAnswer: "No"
    },
    {
        question: "Q2. Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Q3. What is the capital of France?",
        options: ["London", "Berlin", "Madrid", "Paris"],
        correctAnswer: "Paris"
    },
    {
        question: "Q4. What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from Southampton?",
        options: ["1912", "1969", "1881", "1910"],
        correctAnswer: "1912"
    },
    {
        question: "Q5. What is the name of the biggest technology company in South Korea?",
        options: ["SK Hynix", "Samsung", "Hyundai", "LG Electronics"],
        correctAnswer: "Samsung"
    }

];
let score=0;
let currentQuestionIndex = 0;
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
// const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        // Handle correct answer (you can update the UI or keep score here)
        alert("Correct!");
        score++;
    } else {
        // Handle incorrect answer
        alert("Incorrect! Correct answer was "+currentQuestion.correctAnswer);
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Quiz is finished
        questionText.textContent = "Quiz Completed!\
        Score: "+score+"/5";
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
    }
}



loadQuestion(); // Load the first question