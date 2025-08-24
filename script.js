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
    question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য ও প্রস্থের অনুপাত 7 : 3 এবং ক্ষেত্রফল 105 বর্গসেমি। দৈর্ঘ্য কত?",
    options: ["15 সেমি", "21 সেমি", "25 সেমি", "30 সেমি"],
    correct: 1
  },
  {
    question: "যদি a : b = 5 : 7 হয় তবে (a² : b²) কত?",
    options: ["5 : 7", "25 : 49", "7 : 5", "49 : 25"],
    correct: 1
  },
  {
    question: "একটি ত্রিভুজের বাহুগুলির অনুপাত 3 : 4 : 5 এবং পরিসীমা 72 সেমি হলে অতিভুজ কত?",
    options: ["24 সেমি", "28 সেমি", "30 সেমি", "36 সেমি"],
    correct: 2
  },
  {
    question: "একটি স্কুলে ছাত্র ও ছাত্রী সংখ্যা 7 : 5 অনুপাতে। মোট ছাত্রছাত্রী 360 জন হলে ছাত্রী সংখ্যা কত?",
    options: ["120", "140", "150", "160"],
    correct: 1
  },
  {
    question: "3 : 5 = 9 : x হলে, x এর মান কত?",
    options: ["12", "13", "14", "15"],
    correct: 3
  },

  {
    question: "15 : 25 অনুপাতের সরল রূপ কত?",
    options: ["5 : 10", "3 : 5", "15 : 5", "1 : 3"],
    correct: 1
  },
  {
    question: "x : y = 2 : 3 এবং y : z = 4 : 5 হলে, x : y : z কত?",
    options: ["8 : 12 : 15", "2 : 3 : 5", "4 : 5 : 6", "6 : 8 : 10"],
    correct: 0
  },
  {
    question: "12, 20, 30 সংখ্যাগুলি সমানুপাতিক হলে, তাদের অনুপাত কী হবে?",
    options: ["2 : 4 : 6", "3 : 5 : 7", "6 : 10 : 15", "12 : 20 : 30"],
    correct: 2
  },
  {
    question: "একটি শ্রেণিতে ছেলে-মেয়ের অনুপাত 3 : 2 এবং মোট শিক্ষার্থী 40 জন। মেয়ের সংখ্যা কত?",
    options: ["16", "20", "24", "12"],
    correct: 0
  },
  {
    question: "2 : 3 = x : 12 হলে, x এর মান কত?",
    options: ["4", "6", "8", "10"],
    correct: 1
  },
  {
    question: "যদি 5 : x = 15 : 9 হয় তবে, x = ?",
    options: ["2", "3", "4", "5"],
    correct: 2
  },
  {
    question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য ও প্রস্থের অনুপাত 5 : 3 এবং পরিসীমা 64 সেমি। দৈর্ঘ্য কত?",
    options: ["20 সেমি", "25 সেমি", "30 সেমি", "40 সেমি"],
    correct: 1
  },
  {
    question: "7, x, 63 সংখ্যা তিনটি সমানুপাতিক হলে, x কত?",
    options: ["18", "21", "27", "36"],
    correct: 1
  },
  {
    question: "একটি নির্বাচনে 2 জন প্রার্থী ছিল। তারা 7 : 5 অনুপাতে ভোট পেয়েছে। মোট ভোট 3600 হলে বিজয়ী প্রার্থী কত ভোট পেয়েছে?",
    options: ["1500", "1800", "2100", "2400"],
    correct: 2
  },
  {
    question: "2, 4, 8, 16 সংখ্যা গুলি কী অনুপাত গঠন করে?",
    options: ["হারমনিক", "জ্যামিতিক", "গাণিতিক", "অযৌক্তিক"],
    correct: 1
  },

  // সেট ও ফাংশন (Set & Function)
  {
    question: "যদি A = {1, 2, 3, 4} হয় তবে A-এর উপসেট সংখ্যা কত?",
    options: ["8", "12", "16", "32"],
    correct: 2
  },
  {
    question: "যদি A={a, b, c} তবে P(A)-এর উপাদান সংখ্যা কত?",
    options: ["6", "8", "12", "9"],
    correct: 1
  },
  {
    question: "সার্বিক সেটের প্রতীক কোনটি?",
    options: ["U", "∩", "⊂", "∆"],
    correct: 0
  },
  {
    question: "যদি U={1,2,3,4,5} এবং A={1,3,5} তবে A′ কত?",
    options: ["{1,2}", "{2,4}", "{2,4,5}", "{3,5}"],
    correct: 1
  },
  {
    question: "A={2,4,6}, B={4,6,8} তবে A∩B কত?",
    options: ["{2,4,6,8}", "{2}", "{4,6}", "{6,8}"],
    correct: 2
  },
  {
    question: "A={1,2,3}, B={3,4} হলে A∪B=?",
    options: ["{1,2,3,4}", "{3}", "{1,2}", "{2,4}"],
    correct: 0
  },
  {
    question: "যদি P={x : x একটি জোড় সংখ্যা ≤ 10}, তবে P = ?",
    options: ["{2,3,4,5}", "{2,4,6,8,10}", "{1,2,3,4,5}", "{0,2,4,6,8}"],
    correct: 1
  },
  {
    question: "যদি A={x : x একটি স্বাভাবিক সংখ্যা, x<5}, তবে A = ?",
    options: ["{1,2,3,4}", "{0,1,2,3,4}", "{5,6,7,8}", "{2,3,4,5}"],
    correct: 0
  },
  {
    question: "যদি n(A)=4, n(B)=3 তবে n(A×B)=?",
    options: ["12", "7", "9", "16"],
    correct: 0
  },
  {
    question: "যদি A={2,3}, B={4,5}, তবে A×B = ?",
    options: ["{(2,4),(3,5)}", "{(2,4),(2,5),(3,4),(3,5)}", "{2,3,4,5}", "{(4,2),(5,3)}"],
    correct: 1
  },
  {
    question: "যদি A={a}, B={1,2}, তবে A×B কত?",
    options: ["{(a,1),(a,2)}", "{(1,a),(2,a)}", "{a,1,2}", "{}"],
    correct: 0
  },
  {
    question: "P∩Q = { } হলে P ও Q কী ধরনের সেট?",
    options: ["সমান", "ছেদহীন", "সার্বিক", "ফাঁকা"],
    correct: 1
  },
  {
    question: "U={1,2,3,4,5,6}, A={2,4,6} হলে A′ = ?",
    options: ["{1,2,3}", "{1,3,5}", "{1,2,5}", "{3,4,6}"],
    correct: 1
  },
  {
    question: "যদি n(U)=10, n(A)=6 তবে n(A′)=?",
    options: ["4", "6", "10", "12"],
    correct: 0
  },
  {
    question: "যদি A={1,2,3}, B={3,4,5} তবে A∆B = ?",
    options: ["{1,2,4,5}", "{3}", "{1,2,3,4,5}", "{2,5}"],
    correct: 0
  },
  {
    question: "যদি n(A)=m, তবে A-এর উপসেট সংখ্যা কত?",
    options: ["m", "2^m", "m²", "m+1"],
    correct: 1
  },
  {
    question: "যদি A={x : x 10 এর কম মৌলিক সংখ্যা}, তবে A = ?",
    options: ["{2,3,5,7}", "{1,2,3,5,7}", "{2,4,6,8}", "{3,5,9}"],
    correct: 0
  },
  {
    question: "A={1,2,3}, B={3,4,5} হলে A∩B = ?",
    options: ["{1,2}", "{3}", "{1,2,3,4,5}", "{}"],
    correct: 1
  },
  {
    question: "যদি f(x)=2x+3 হয় তবে f(2) = ?",
    options: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    question: "যদি f(x)=x²−1 হয় তবে f(3) = ?",
    options: ["8", "9", "10", "12"],
    correct: 0
  },
  {
    question: "যদি f(x)=x³ হয় তবে f(−2) = ?",
    options: ["−6", "8", "−8", "4"],
    correct: 2
  },
  {
    question: "যদি f(x)=x²+2x+1 তবে f(−1) = ?",
    options: ["0", "2", "1", "4"],
    correct: 0
  },
  {
    question: "f(x)=x², g(x)=x+1 হলে f(g(2)) = ?",
    options: ["3", "4", "9", "16"],
    correct: 2
  },
  {
    question: "f(x)=2x, g(x)=x−3 হলে g(f(4)) = ?",
    options: ["5", "2", "4", "3"],
    correct: 0
  },
  {
    question: "f(x)=x², g(x)=x+2 হলে (f∘g)(3) = ?",
    options: ["25", "16", "9", "36"],
    correct: 0
  }
];
    // Exam variables
    let timeLeft = 1800;
    let userAnswers = []; // Fixed: consistent plural naming
    let timerInterval = null; // Fixed: spelling
    let currentQuestion = 0;
    let examStartTime = null; // Added: missing variable
    let correctAnswers = 0; // Added: missing variable

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
        timeLeft = 1800;
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