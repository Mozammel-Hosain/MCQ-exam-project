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
    question: "z = (-44 + 3i)/i এর বাস্তবাংশ কত?",
    options: ["3", "4", "-4", "-3"],
    correct: 2
  },
  {
    question: "যদি x = 1/2(1+√3 i) এবং y = 1/2(1-√3 i) তবে x + xy + y^2 এর মান—",
    options: ["1", "0", "1+√3", "1-√3"],
    correct: 1
  },
  {
    question: "যদি z1 = 1-i, z2 = √3+i হয় তবে arg(z2/z1) এর মান—",
    options: ["5π/12", "π/6", "π/12", "-5π/12"],
    correct: 0
  },
  {
    question: "If 1/(a+i) = 1, then the value of a is—",
    options: ["1", "-1", "i/2", "-i/2"],
    correct: 0
  },
  {
    question: "z = x+iy হলে |z-5|·|z+5|=16 নির্দেশ করে—",
    options: ["Circle", "Parabola", "Hyperbola", "Ellipse"],
    correct: 2
  },
  
  {
    question: "এককের ঘনমূলের ফাংশন যদি হয় (1-ω)(1-ω^2)(1-ω^4)(1-ω^8), তবে এর মান—",
    options: ["4", "6", "-9", "9"],
    correct: 3
  },
  {
    question: "(1-i)/(i^2+1) এর মান এবং আর্গ হবে যথাক্রমে—",
    options: ["1, 0", "-1/2, π", "-1/2, π/2", "-1/2, -2π"],
    correct: 1
  },
  {
    question: "z1 = 2+i এবং z2 = 3+2i হলে |z1 z2| এর মান—",
    options: ["6", "5√2", "7", "5√3"],
    correct: 3
  },
  {
    question: "ω যদি এককের ঘনমূলের একটি জটিল (কাল্পনিক) মান হয়, তবে (1-ω+ω^2) এর মান—",
    options: ["4", "6", "3", "2"],
    correct: 3
  },
  {
    question: "(2+3i)/(2-i) = P+Qi হলে, Q=?",
    options: ["4", "8/3", "5", "8/5"],
    correct: 0
  },
  {
    question: "(2-i)/(2+i) = A+iB হয়, তবে A এর মান কোনটি?",
    options: ["3/5", "-3/5", "4/5", "-4/5"],
    correct: 0
  },
  {
    question: "√i·√-i এর মান—",
    options: ["i", "-i", "1", "0"],
    correct: 2
  },
  {
    question: "যদি x=1/2(1-√3 i) এবং y=1/2(1-√3 i) হয় তবে (1-x-y+xy) এর মান—",
    options: ["0", "1", "2", "3"],
    correct: 0
  },
  {
    question: "যদি z=(1+i)/√2 তবে z^8 এর মান—",
    options: ["1", "i", "-1", "-i"],
    correct: 0
  },
  {
    question: "n এর সর্বনিম্ন ধনাত্মক মান কত হলে (1+i/2)^n = 1?",
    options: ["2", "4", "6", "1"],
    correct: 3
  },
  {
    question: "-8 - 8i এর মডুলাস হবে—",
    options: ["|1+3i|", "|1-3i|", "3-i", "3+i"],
    correct: 1
  },
  
  {
    question: "√(p+4i) = q+i হলে p-q এর মান কত?",
    options: ["0", "1", "3", "5"],
    correct: 2
  },
  {
    question: "|x-1|+|y+1|+|x+1|+|y-1|=4 দ্বারা প্রকাশ করা যায় একটি বক্ররেখা—",
    options: ["x^2+y^2=7", "y^2=4x", "y=x^2+1", "x^2/4+y^2/3=1", "None"],
    correct: 4
  },
  
  {
    question: "√(3+√(3+√(3+⋯)))=x হলে, x এর মান—",
    options: ["√3 i", "(1+√11)/2", "(1-√11)/2", "None"],
    correct: 1
  },
  {
    question: "⁴√(-i) এর মান কোনটি?",
    options: ["-(1/2)(1+√3 i)", "(1/2)(1+√3 i)", "0, (1/2)(1+√3 i)", "0, -(1/2)(1+√3 i)", "None"],
    correct: 1
  },
  {
    question: "√-16 = ?",
    options: ["±√2", "±(√3±i)", "(3/√2)(1+i)", "±√(2(1+i))"],
    correct: 3
  },
  {
    question: "(1/3)^19999 + (1/3)^15557 = ?",
    options: ["1", "-1", "2", "0"],
    correct: 3
  },
  {
    question: "-8-6i এর মডুলাস কত?",
    options: ["|1+3i|", "|1-3i|", "|1+2i|", "|1-2i|"],
    correct: 2
  },
  {
    question: "এককের ঘনমূলের একটি পদার্থ যদি হয় (1-ω+ω^2)^2+(1+ω+ω^2)^2, তবে এর মান—",
    options: ["-8", "-16", "4", "8"],
    correct: 2
  },
  {
    question: "(5i-1)/(1+i) এর আর্গুমেন্ট কত?",
    options: ["π/4", "π/2", "2π/3", "π"],
    correct: 2
  }
];
    // Exam variables
    let timeLeft = 1200;
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