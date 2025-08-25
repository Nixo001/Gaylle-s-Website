const questions = [
    {
        question: "What's Allyssa's favorite sport?",
        options: [
            "Basketball",
            "Badminton",
            "Swimming",
            "Volleyball"
        ],
        correctAnswer: 1,
        fact: "Allyssa loves playing badminton and has been a passionate player since her school days."
    },
    {
        question: "What inspired Allyssa to pursue her advocacy?",
        options: [
            "A family member's story",
            "A childhood experience",
            "A book she read",
            "A mentor's guidance"
        ],
        correctAnswer: 1,
        fact: "Allyssa's advocacy is deeply rooted in her personal experiences growing up in her community."
    },
    {
        question: "What's Allyssa's dream project?",
        options: [
            "Building a community center",
            "Starting an educational program",
            "Creating a scholarship fund",
            "Organizing cultural festivals"
        ],
        correctAnswer: 1,
        fact: "Allyssa dreams of establishing an educational program that empowers young people in her community."
    },
    {
        question: "What's Allyssa's dream career?",
        options: [
            "Social Worker",
            "Doctor",
            "Teacher",
            "Non-profit Organization Leader"
        ],
        correctAnswer: 1,
        fact: "Allyssa aspires to become a doctor to help improve healthcare in her community."
    },
    {
        question: "What was Allyssa's favorite subject in school?",
        options: [
            "Mathematics",
            "Science",
            "English",
            "History"
        ],
        correctAnswer: 1,
        fact: "Allyssa has always been passionate about science and its applications in healthcare."
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    const question = questions[currentQuestion];

    questionElement.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'quiz-option';
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    
    if (selectedIndex === question.correctAnswer) {
        score++;
        document.getElementById('quiz-feedback').textContent = `Correct! ${question.fact}`;
        document.getElementById('quiz-feedback').style.color = 'green';
    } else {
        document.getElementById('quiz-feedback').textContent = `Try again! The correct answer is: ${question.options[question.correctAnswer]}`;
        document.getElementById('quiz-feedback').style.color = 'red';
    }

    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>You scored ${score} out of ${questions.length}!</p>
        <p>Great job! You've learned more about Allyssa's interests and aspirations.</p>
        <button class="quiz-option">Try Again</button>
    `;
    
    const tryAgainButton = quizContainer.querySelector('button');
    tryAgainButton.onclick = () => {
        restartQuiz();
    };
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    const quizContainer = document.getElementById('quiz-container');
    const feedback = document.getElementById('quiz-feedback');
    
    // Clear all content
    quizContainer.innerHTML = '';
    if (feedback) {
        feedback.textContent = '';
        feedback.style.color = '';
    }
    
    // Reset and load first question
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});
