document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.start-btn')
    const time = document.querySelector('.timer')
    const progress = document.querySelector('.progress-fill')
    const question = document.querySelector('.question')
    const questionContainer = document.querySelector('.question-container')
    const result = document.querySelector('.results')
    const scoreCircle = document.querySelector('.score-circle')
    const score = document.querySelector('.score-percentage')
    const correct = document.getElementById('correctCount')
    const incorrect = document.getElementById('incorrectCount')
    const timeWaste = document.getElementById('timeTaken')
    const examResult = document.getElementById('examResult')
    const btn = document.querySelector('.btn-primary')

   const questions = [
  { question: " কোন মৌলটির অষ্টক পূর্ণ করতে ইলেকট্রন গ্রহণ করতে হয়?", options: ["Li", "Ca", "Na", "O"], correct: 3 },
  { question: " নিচের কোন পরমাণুটি ক্যাটায়ন?", options: ["Cl2", "O2", "Na+", "F"], correct: 2 },
  { question: " ধনাত্মক চার্জ যুক্ত পরমাণুকে কী বলে?", options: ["ক্যাটায়ন", "অ্যানায়ন", "ক্যাথোড", "অ্যানোড"], correct: 0 },
  { question: " ধাতু ও অধাতুর মধ্যকার বন্ধন কীরূপ?", options: ["ধাতব বন্ধন", "সমযোজী বন্ধন", "আয়নিক বন্ধন", "সন্নিবেশ বন্ধন"], correct: 2 },
  { question: " আয়নিক বন্ধনের ধারণা দেন কে?", options: ["ডাল্টন", "প্রাউস", "ভ্যান ডার ওয়ালস", "কোসেল"], correct: 3 },
  { question: " নিচের কোনটিতে আয়নিক বন্ধন বিদ্যমান?", options: ["CCl4", "CH4", "ClO2", "NaCl"], correct: 3 },
  { question: " কোনটি আয়নিক যৌগ?", options: ["BCl3", "SiBr4", "SnCl2", "Cl2O7"], correct: 2 },
  { question: " নিচের কোন মৌলটি ব্যতিক্রমধর্মী আয়নিক যৌগ গঠন করে?", options: ["Na", "Cl", "Al", "C"], correct: 2 },
  { question: " কোনটির পরমাণু সাধারণত ইলেকট্রন ত্যাগ করে?", options: ["Ca", "C", "Ne", "Cl"], correct: 0 },
  { question: " নিচের কোনটি আয়নিক যৌগ?", options: ["MgO", "NH3", "CH4", "H2O"], correct: 0 },
  { question: " Cl⁻ এবং Na⁺ কোন বন্ধন দ্বারা যৌগ গঠন করে?", options: ["সমযোজী", "সন্নিবেশ সমযোজী", "আয়নিক", "ধাতব"], correct: 2 },
  { question: " বোরন ট্রাইফ্লোরাইড (BF3) যৌগে বোরনের চারদিকে কয়টি ইলেকট্রন আছে?", options: ["৮টি", "৮টির চেয়ে বেশি", "৬টি", "৬টির চেয়ে বেশি"], correct: 2 },
  { question: " মিথেন (CH4) অণুর আকৃতি কিরূপ?", options: ["রৈখিক", "কৌণিক", "পিরামিডীয়", "চতুস্তলকীয়"], correct: 3 },
  { question: " নিচের কোন অণুটির গঠন পিরামিড আকৃতির?", options: ["পানি (H2O)", "মিথেন (CH4)", "কার্বন ডাইঅক্সাইড (CO2)", "অ্যামোনিয়া (NH3)"], correct: 3 },
  { question: " CO2 অণুর আকৃতি কেমন?", options: ["রৈখিক", "কৌণিক", "পিরামিডীয়", "চতুস্তলকীয়"], correct: 0 },
  { question: " SO2 এর অণুর আকৃতি কিরূপ?", options: ["রৈখিক", "কৌণিক", "পিরামিডীয়", "চতুস্তলকীয়"], correct: 1 },
  { question: " N2 অণুতে বন্ধন ইলেকট্রন কয় জোড়া?", options: ["এক জোড়া", "দুই জোড়া", "তিন জোড়া", "চার জোড়া"], correct: 2 },
  { question: " নিচের কোনটি পোলার যৌগ?", options: ["বেনজিন", "অ্যালকোহল", "ইথার", "পেট্রোল"], correct: 1 },
  { question: " কোনটি সমযোজী যৌগের বৈশিষ্ট্য?", options: ["উচ্চ স্ফুটনাঙ্ক", "নিম্ন স্ফুটনাঙ্ক", "উচ্চ গলনাঙ্ক", "অধিকাংশ পানিতে দ্রবণীয়"], correct: 1 },
  { question: " নিচের কোনটি সমযোজী যৌগের বৈশিষ্ট্য?", options: ["দ্রবণে আয়নিত হয়", "অজৈব দ্রাবকে দ্রবণীয়", "জৈব দ্রাবকে দ্রবণীয়", "বিদ্যুৎ পরিবাহী"], correct: 2 }
]
let timeLeft = 1200;
let currentQuestion = 0;
let userAnswers = []
let timerInterval = null;
let examStartTime = null;
correctAnswers = 0;

function startTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                submitExam(); // Auto-submit when time runs out
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        time.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 60) {
            time.style.background = '#e74c3c';
        } else if (timeLeft <= 300) {
            time.style.background = '#f39c12';
        }
    }


    function loadQuestion() {
        const currentQ = questions[currentQuestion];

        const insert = `
            <div class="question active">
                <div class="question-header">
                    <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
                </div>
                <div class="question-text">${currentQ.question}</div>
                <div class="options">
                   ${currentQ.options.map((option, index) => `
                        <div class="option" onclick="selectOption(${index})">
                            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                            <span>${option}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="navigation">
                    <button class="btn btn-secondary" onclick="previousQuestion()" 
                           ${currentQuestion === 0 ? 'disabled' : ''}>
                        ← Previous
                    </button>
                    <span>Question ${currentQuestion + 1} of ${questions.length}</span>
                    ${currentQuestion === questions.length - 1 ?
                        '<button class="btn btn-primary" onclick="submitExam()">Submit Exam</button>' :
                        '<button class="btn btn-primary" onclick="nextQuestion()">Next →</button>'
                    }
                </div>
            </div>
        `;
        
        updateProgress();
        questionContainer.innerHTML = insert;

        // Restore previous selection if exists
        if (userAnswers[currentQuestion] !== undefined) {
            const options = document.querySelectorAll('.option');
            options[userAnswers[currentQuestion]].classList.add('selected');
        }
    }

    // Fixed selectOption function
    function selectOption(optionIndex) {
        // Remove previous selection
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('selected');
        });

        // Add new selection
        options[optionIndex].classList.add('selected');
        
        // Store user's answer
        userAnswers[currentQuestion] = optionIndex;
    }

    // Define functions first, then make them global
    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            loadQuestion();
        }
    }

    function previousQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion();
        }
    }

    function updateProgress() {
        const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
        progress.style.width = progressPercent + '%';
    }

    function calculateScore() {
        correctAnswers = 0;
        for (let i = 0; i < questions.length; i++) {
            if (userAnswers[i] === questions[i].correct) {
                correctAnswers++;
            }
        }
    }

    function submitExam() {
        if (timerInterval) {
            clearInterval(timerInterval);
        }

        calculateScore();

        const percentage = Math.round((correctAnswers / questions.length) * 100);
        const timeTaken = Math.floor((Date.now() - examStartTime) / 1000);
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        
        // Update results display
        document.getElementById('scorePercentage').textContent = percentage + '%';
        document.getElementById('correctCount').textContent = correctAnswers;
        document.getElementById('incorrectCount').textContent = questions.length - correctAnswers;
        document.getElementById('timeTaken').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('examResult').textContent = percentage >= 80 ? 'PASSED' : 'FAILED';
        // document.getElementById('examStatus').textContent = 'Completed';
        
        // Update score circle
        const degrees = (percentage / 100) * 360;
        scoreCircle.style.background = 
            `conic-gradient(#4caf50 0deg, #4caf50 ${degrees}deg, #e0e0e0 ${degrees}deg)`;
        
        // Show results
        questionContainer.style.display = 'none';
        result.classList.add('show');
    }

    function restartExam() {
        currentQuestion = 0;
        userAnswers = [];
        timeLeft = 1200;
        correctAnswers = 0;
        examStartTime = Date.now();
        
        questionContainer.style.display = 'block';
        results.classList.remove('show');
        // document.getElementById('examStatus').textContent = 'In Progress';
        time.style.background = '#e74c3c';
        
        loadQuestion();
        startTimer();
    }

    // Make functions global so onclick can access them
    window.selectOption = selectOption;
    window.nextQuestion = nextQuestion;
    window.previousQuestion = previousQuestion;
    window.submitExam = submitExam;
    window.restartExam = restartExam;

    // Start exam event listener
    startBtn.addEventListener('click', (e) => {
        e.preventDefault();
        examStartTime = Date.now(); // Set start time
        loadQuestion();
        startTimer();
    });
});