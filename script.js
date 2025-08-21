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
    question: "বিন্দু P(2, 5) থেকে x-অক্ষের দূরত্ব কত?",
    options: ["2", "3", "5", "7"],
    correct: 2
  },
  {
    question: "বিন্দু (-3, 4) থেকে y-অক্ষের দূরত্ব কত?",
    options: ["3", "4", "5", "7"],
    correct: 0
  },
  {
    question: "দুটি বিন্দু A(2, 3) এবং B(5, 7) এর মধ্যবর্তী দূরত্ব কত?",
    options: ["4", "5", "√25", "√41"],
    correct: 3
  },
  {
    question: "বিন্দু A(-1, 2) এবং B(3, -2) এর মধ্যবিন্দুর স্থানাঙ্ক কী?",
    options: ["(1, 0)", "(2, 1)", "(0, 0)", "(1, –1)"],
    correct: 0
  },
  {
    question: "A(2, 3) ও B(6, 7) বিন্দুকে সংযোগকারী রেখাখণ্ডকে 1:1 অনুপাতে বিভক্তকারী বিন্দু হলো—",
    options: ["(3, 4)", "(4, 5)", "(2, 3)", "(6, 7)"],
    correct: 1
  },
  {
    question: "(x1, y1) ও (x2, y2) বিন্দুর মধ্যবিন্দু হবে—",
    options: [
      "((x1+x2)/2, (y1+y2)/2)",
      "((x1-x2)/2, (y1-y2)/2)",
      "(x1+x2, y1+y2)",
      "(x1-x2, y1-y2)"
    ],
    correct: 0
  },
  {
    question: "রেখা y = 2x+3 এর ঢাল কত?",
    options: ["–2", "2", "3", "1/2"],
    correct: 1
  },
  {
    question: "রেখা x = 4 এর ঢাল কত?",
    options: ["0", "∞", "1", "–1"],
    correct: 1
  },
  {
    question: "রেখা y = mx + c এর ঢাল হলো—",
    options: ["c", "m", "–m", "1/m"],
    correct: 1
  },
  {
    question: "A(0, 0) এবং B(4, 4) বিন্দু দিয়ে অতিক্রম করা রেখার সমীকরণ—",
    options: ["y = x", "y = 2x", "y = 1/2x", "y = –x"],
    correct: 0
  },
  {
    question: "বিন্দু (2, –3) দিয়ে গমনকারী এবং অক্ষদ্বয়ের সাথে সমান্তরাল রেখার সমীকরণ যথাক্রমে—",
    options: ["x = 2, y = –3", "x = –3, y = 2", "x + y = –1", "x – y = 5"],
    correct: 0
  },
  {
    question: "রেখা 3x + 4y = 12 এর x-অবস্থান বিন্দু—",
    options: ["(4, 0)", "(3, 0)", "(0, 4)", "(0, 3)"],
    correct: 0
  },
  {
    question: "রেখা 2x – y + 5 = 0 এর ঢাল কত?",
    options: ["–2", "2", "1/2", "–1/2"],
    correct: 1
  },
  {
    question: "রেখা y = 3x + 2 এর লম্ব রেখার ঢাল কত?",
    options: ["–3", "1/3", "–1/3", "3"],
    correct: 2
  },
  {
    question: "যদি দুটি রেখা পরস্পর লম্ব হয় তবে তাদের ঢালদ্বয়ের গুণফল হবে—",
    options: ["1", "–1", "0", "∞"],
    correct: 1
  },
  {
    question: "রেখা x + y = 4 এর সমান্তরাল রেখা হলো—",
    options: ["x + y = 6", "x – y = 6", "2x + y = 6", "y = –x + 4"],
    correct: 0
  },
  {
    question: "বিন্দু (2, 3) দিয়ে গমনকারী এবং রেখা y = x এর সমান্তরাল রেখার সমীকরণ—",
    options: ["y = x + 1", "y = x + 2", "y = x + 3", "y = –x + 5"],
    correct: 2
  },
  {
    question: "রেখা x = 0 হলো—",
    options: ["x-অক্ষ", "y-অক্ষ", "কর্ণ", "y = x রেখা"],
    correct: 1
  },
  {
    question: "রেখা y = 0 হলো—",
    options: ["x-অক্ষ", "y-অক্ষ", "y = x রেখা", "কর্ণ"],
    correct: 0
  },
  {
    question: "সমীকরণ 2x + 3y – 6 = 0 রেখার y-অবস্থান বিন্দু—",
    options: ["(0, –2)", "(0, 2)", "(3, 0)", "(0, 3)"],
    correct: 1
  },
  {
    question: "(1, 2) এবং (3, 6) বিন্দুর যোগসূত্র রেখার ঢাল—",
    options: ["2", "4", "1/2", "2/3"],
    correct: 0
  },
  {
    question: "রেখা y = –2x + 5 এর সাথে সমান্তরাল রেখার ঢাল হবে—",
    options: ["–2", "2", "1/2", "–1/2"],
    correct: 0
  },
  {
    question: "বিন্দু (–1, 2) এবং (3, k) একই সরলরেখায় অবস্থিত হলে k এর মান কত?",
    options: ["4", "6", "8", "–2"],
    correct: 1
  },
  {
    question: "ত্রিভুজ A(0, 0), B(4, 0), C(0, 3) এর ক্ষেত্রফল কত?",
    options: ["6", "12", "4", "8"],
    correct: 0
  },
  {
    question: "ত্রিভুজের ক্ষেত্রফল শূন্য হলে বিন্দুগুলি—",
    options: ["একই রেখায় থাকবে", "সমবাহু হবে", "সমকোণী হবে", "সমদ্বিবাহু হবে"],
    correct: 0
  },
  {
    question: "tan(π - θ) এর মান নিচের কোনটি?",
    options: ["-cot θ", "cot θ", "-tan θ", "tan θ"],
    correct: 2
  },
  {
    question: "1° = কত রেডিয়ান?",
    options: ["0.01475", "0.01574", "0.01745", "0.017541"],
    correct: 2
  },
  {
    question: "a < 0 এবং b < 0 হলে, বিন্দুটি কোন চতুর্ভাগে পড়বে?",
    options: ["১ম", "২য়", "৩য়", "৪র্থ"],
    correct: 2
  },
  {
    question: "8:30 টায় ঘড়ির ঘণ্টার কাঁটা ও মিনিটের কাঁটার অন্তর্গত কোণ কত রেডিয়ান?",
    options: ["5π/72", "5π/36", "5π/18", "5π/12"],
    correct: 3
  },
  {
    question: "(-470°) কোণটি কোন চতুর্ভাগে রয়েছে?",
    options: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"],
    correct: 2
  },
  {
    question: "sin(120°) এর মান কত?",
    options: ["√3/2", "1/2", "-√3/2", "-1/2"],
    correct: 0
  },
  {
    question: "সকাল ৯ টায় ঘড়ির ঘণ্টার কাঁটা ও মিনিটের কাঁটার মাঝে অন্তর্গত কোণ কত?",
    options: ["π/6", "π/3", "π/2", "2π/3"],
    correct: 2
  },
  {
    question: "tan(-1140°) = কত?",
    options: ["√3", "-√3", "1/√3", "-1/√3"],
    correct: 1
  },
  {
    question: "sec(2π – π/4) এর মান কত?",
    options: ["√2", "-√2", "1/√2", "-1/√2"],
    correct: 0
  },
  {
    question: "যদি sinx + cosx = √2x হয় তবে মান কত?",
    options: ["1", "–1", "√2", "0"],
    correct: 0
  },
  {
    question: "x এর যে কোন মানের জন্য –\n i) –1 ≤ cosx ≤ 1\n ii) |tanx| ≥ 1\n iii) |sinx| ≤ 1\n কোন সঠিক?",
    options: ["i, ii", "i, iii", "ii, iii", "i, ii, iii"],
    correct: 1
  }
];
    // Exam variables
    let timeLeft = 1500;
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
        timeLeft = 1500;
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