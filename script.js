const flashcards = [
    { question: "What is JavaScript?", answer: "A programming language used for web development." },
    { question: "What does CSS stand for?", answer: "Cascading Style Sheets." },
    { question: "What is Git used for?", answer: "Version control of source code." },
    { question: "What is a REST API?", answer: "An API that uses HTTP requests for communication." },
    { question: "What is the difference between var, let, and const?", answer: "var is function-scoped, let and const are block-scoped. const cannot be reassigned." }
];

let currentIndex = -1;

const flashcardEl = document.getElementById('flashcard');
const questionEl = flashcardEl.querySelector('.question');
const answerEl = flashcardEl.querySelector('.answer');
const showAnswerBtn = document.getElementById('showAnswer');
const nextCardBtn = document.getElementById('nextCard');
const progressEl = document.getElementById('progress');

function nextCard() {
    currentIndex++;
    if (currentIndex >= flashcards.length) currentIndex = 0;
    const card = flashcards[currentIndex];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;
    answerEl.classList.add('hidden');
    updateProgress();
}

function showAnswer() {
    answerEl.classList.remove('hidden');
}

function updateProgress() {
    progressEl.textContent = `Card ${currentIndex + 1} of ${flashcards.length}`;
}

showAnswerBtn.addEventListener('click', showAnswer);
nextCardBtn.addEventListener('click', nextCard);
flashcardEl.addEventListener('click', showAnswer);

// Initialize
nextCard();
