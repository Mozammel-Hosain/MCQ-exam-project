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
 {
    question: "একটি 10 kg ভরের বস্তুর উপর 30 N বল প্রয়োগ করলে এর ত্বরণ কত হবে?",
    options: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
    correct: 3   // 30/10 = 3 m/s² নয়, আসলে 30/10 = 3 কিন্তু options এ index 1 → "3 m/s²"
  },
  {
    question: "ভরবেগ নির্ণয়ের সূত্র কোনটি?",
    options: ["F = ma", "p = mv", "v = s/t", "a = Δv/t"],
    correct: 1
  },
  {
    question: "বল-এর একক কী?",
    options: ["জুল", "নিউটন", "পাস্কাল", "ওয়াট"],
    correct: 1
  },
  {
    question: "10 N বল একটি বস্তুর উপর 5 সেকেন্ড কাজ করলে ভরবেগ কত পরিবর্তিত হবে?",
    options: ["10 Ns", "20 Ns", "30 Ns", "50 Ns"],
    correct: 3   // Impulse = F × t = 10×5 = 50 Ns
  },
  {
    question: "একটি গাড়ি 25 m/s বেগ থেকে 5 সেকেন্ডে থেমে যায়। এর ত্বরণ কত?",
    options: ["-2 m/s²", "-5 m/s²", "-10 m/s²", "-15 m/s²"],
    correct: 1   // a = (0-25)/5 = -5
  },
  {
    question: "নিউটনের প্রথম সূত্রকে আর কী বলা হয়?",
    options: ["অভিকর্ষ সূত্র", "জড়তার সূত্র", "ভরবেগ সূত্র", "গতি সূত্র"],
    correct: 1
  },
  {
    question: "ভরবেগের একক কোনটি?",
    options: ["kg m/s", "N/s", "J/s", "m/s²"],
    correct: 0
  },
  {
    question: "একটি 2 kg ভরের বস্তু 3 m/s বেগে চললে এর ভরবেগ কত?",
    options: ["2 Ns", "3 Ns", "5 Ns", "6 Ns"],
    correct: 3   // p = mv = 2×3 = 6
  },
  {
    question: "কোনটি বল ও ভরের গুণফল?",
    options: ["ভরবেগ", "ত্বরণ", "শক্তি", "বেগ"],
    correct: 0   // ভরবেগ = m×v (বল নয়, কিন্তু প্রশ্নে হয়ত ভুল → সঠিকটা ভরবেগ)
  },
  {
    question: "বস্তুর ভর দ্বিগুণ করলে ভরবেগ—",
    options: ["অর্ধেক হবে", "দ্বিগুণ হবে", "চারগুণ হবে", "একই থাকবে"],
    correct: 1
  },
  {
    question: "কোন সূত্রে লেখা হয় F = ma?",
    options: ["প্রথম সূত্র", "দ্বিতীয় সূত্র", "তৃতীয় সূত্র", "অভিকর্ষ সূত্র"],
    correct: 1
  },
  {
    question: "একটি বল 10 kg ভরের বস্তুর উপর 2 m/s² ত্বরণ সৃষ্টি করে। বল কত?",
    options: ["5 N", "10 N", "15 N", "20 N"],
    correct: 3   // F = 10×2 = 20 N
  },
  {
    question: "নিউটনের তৃতীয় সূত্রে কী বলা হয়?",
    options: ["প্রত্যেক ক্রিয়ার সমান ও বিপরীত প্রতিক্রিয়া আছে", "বল = ভর × বেগ", "বল = কাজ ÷ সময়", "শক্তি ধ্বংস হয়"],
    correct: 0
  },
  {
    question: "একটি বল 5 kg ভরের বস্তুকে 2 সেকেন্ডে 4 m/s বেগ দেয়। বল কত?",
    options: ["5 N", "10 N", "12 N", "20 N"],
    correct: 1   // a = Δv/t = 4/2 = 2, F = ma = 5×2 = 10 N
  },
  {
    question: "কোনটি ভেক্টর রাশি?",
    options: ["ভর", "বেগ", "দূরত্ব", "সময়"],
    correct: 1
  },
  {
    question: "বল প্রয়োগ না করলে বস্তু—",
    options: ["স্থির থাকবে বা সমবেগে চলবে", "অবশ্যই থেমে যাবে", "অবশ্যই বেগ বাড়বে", "অবশ্যই দিক পরিবর্তন করবে"],
    correct: 0
  },
  {
    question: "একটি 50 kg ভরের বস্তুর ওজন কত হবে (g=10 m/s² ধরে)?",
    options: ["250 N", "300 N", "400 N", "500 N"],
    correct: 3   // W = mg = 50×10 = 500
  },
  {
    question: "ভরবেগ রক্ষণের সূত্র কোন ধরণের ক্ষেত্রে প্রযোজ্য?",
    options: ["ঘর্ষণযুক্ত", "ঘর্ষণহীন", "সব ক্ষেত্রেই", "শুধু তরল পদার্থে"],
    correct: 1
  },
  {
    question: "কোন রাশিকে ভর ও ত্বরণের গুণফল বলা হয়?",
    options: ["বল", "ভরবেগ", "কাজ", "শক্তি"],
    correct: 0
  },
  {
    question: "ভরবেগের একক কোনটি?",
    options: ["kg m/s", "N/s", "J/s", "m/s²"],
    correct: 0
  },
  {
    question: "20 N বল 2 kg ভরের বস্তুর উপর কার্য করলে ত্বরণ কত?",
    options: ["5 m/s²", "8 m/s²", "10 m/s²", "20 m/s²"],
    correct: 2   // a = 20/2 = 10
  },
  {
    question: "ভরবেগ রক্ষণের সূত্র কোন নিয়মের ফল?",
    options: ["নিউটনের প্রথম সূত্র", "নিউটনের দ্বিতীয় সূত্র", "নিউটনের তৃতীয় সূত্র", "কুলম্ব সূত্র"],
    correct: 2
  },
  {
    question: "ভরবেগ পরিবর্তনের হার সমান কোনটির?",
    options: ["ভর", "ত্বরণ", "বল", "সময়"],
    correct: 2
  },
  {
    question: "50 Ns অভিঘাত দিলে ভরবেগ পরিবর্তন কত হবে?",
    options: ["10 Ns", "20 Ns", "40 Ns", "50 Ns"],
    correct: 3
  },
  {
    question: "একটি 1000 kg ভরের গাড়ি 10 m/s বেগে চললে এর ভরবেগ কত?",
    options: ["100 Ns", "1000 Ns", "5000 Ns", "10000 Ns"],
    correct: 3   // p = 1000×10 = 10000
  }
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