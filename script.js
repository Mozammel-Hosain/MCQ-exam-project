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
        question: "রাদারফোর্ডের পরীক্ষায় ব্যবহৃত কণা ছিল",
        options: ["আলফা কণা", "বিটা কণা", "গামা কণা", "প্রোটন"],
        correct: 0
    },
    {
        question: "রাদারফোর্ডের পরীক্ষায় অধিকাংশ কণা সোজা চলে যায়—এ থেকে বোঝা যায়-",
        options: ["পরমাণুর অধিকাংশ অংশ ফাঁকা", "ইলেকট্রন স্থির", "প্রোটন চলমান", "নিউট্রন ধনাত্মক"],
        correct: 0
    },
    {
        question: "রাদারফোর্ডের পরীক্ষায় খুব কম সংখ্যক কণা প্রতিফলিত হয়েছিল—এর কারণ কী?",
        options: ["কেন্দ্রক খুব ছোট", "ইলেকট্রন স্থির", "নিউট্রন নেই", "প্রোটন ঋণাত্মক"],
        correct: 0
    },
    {
        question: "রাদারফোর্ডের পরীক্ষায় কোন ধাতুর পাত ব্যবহার করা হয়েছিল?",
        options: ["রূপা", "তামা", "সোনা", "প্লাটিনাম"],
        correct: 2
    },
    {
        question: "রাদারফোর্ডের পরমাণু মডেলের প্রধান ত্রুটি কী?",
        options: ["ইলেকট্রন শক্তি বিকিরণ করলে কেন্দ্রকে পতিত হওয়ার কথা", "কেন্দ্রক ধনাত্মক নয়", "ইলেকট্রন স্থির", "প্রোটন নেই"],
        correct: 0
    },
    {
        question: "বোরের মডেল কোন পরমাণুর জন্য সবচেয়ে কার্যকর?",
        options: ["হিলিয়াম", "হাইড্রোজেন", "অক্সিজেন", "কার্বন"],
        correct: 1
    },
    {
        question: "বোরের মতে ইলেকট্রন—",
        options: ["যে কোনো কক্ষপথে ঘোরে", "নির্দিষ্ট শক্তিস্তরে ঘোরে", "স্থির থাকে", "শক্তি বিকিরণ ছাড়া চলতে পারে না"],
        correct: 1
    },
    {
        question: "ইলেকট্রন শক্তি শোষণ করলে—",
        options: ["উচ্চ শক্তিস্তরে যায়", "কেন্দ্রকে পতিত হয়", "অদৃশ্য হয়", "প্রোটনে রূপান্তরিত হয়"],
        correct: 0
    },
    {
        question: "একই পারমাণবিক সংখ্যা কিন্তু ভিন্ন ভরসংখ্যা বিশিষ্ট পরমাণুগুলোকে কী বলে?",
        options: ["আইসোটোপ", "আইসোবার", "আইসোটোন", "আইঅনিক যৌগ"],
        correct: 0
    },
    {
        question: "হাইড্রোজেনের প্রোটিয়াম, ডিউটেরিয়াম, ট্রিটিয়াম—",
        options: ["আইসোবার", "আইসোটোপ", "আইসোটোন", "আইন"],
        correct: 1
    },
    {
        question: "একই ভরসংখ্যা কিন্তু ভিন্ন পারমাণবিক সংখ্যা বিশিষ্ট পরমাণুগুলো কী?",
        options: ["আইসোটোপ", "আইসোবার", "আইসোটোন", "রেডিওআইসোটোপ"],
        correct: 1
    },
    {
        question: "একই নিউট্রন সংখ্যা কিন্তু ভিন্ন প্রোটন সংখ্যা বিশিষ্ট পরমাণুগুলোকে কী বলে?",
        options: ["আইসোটোপ", "আইসোবার", "আইসোটোন", "অণু"],
        correct: 2
    },
    {
        question: "কোন মৌলের পারমাণবিক সংখ্যা ১?",
        options: ["হিলিয়াম", "হাইড্রোজেন", "লিথিয়াম", "অক্সিজেন"],
        correct: 1
    },
    {
        question: "নিউট্রনের আবিষ্কারক কে?",
        options: ["রাদারফোর্ড", "চ্যাডউইক", "থমসন", "বোর"],
        correct: 1
    },
    {
        question: "ইলেকট্রনের চার্জের মান কত?",
        options: ["+1.6 × 10^-19 C", "-1.6 × 10^-19 C", "0", "+3.2 × 10^-19 C"],
        correct: 1
    },
    {
        question: "প্রোটনের চার্জের মান কত?",
        options: ["+1.6 × 10^-19 C", "-1.6 × 10^-19 C", "0", "+3.2 × 10^-19 C"],
        correct: 0
    },
    {
        question: "প্রোটনের ভর কত?",
        options: ["1 amu", "0 amu", "1/1840 amu", "2 amu"],
        correct: 0
    },
    {
        question: "ইলেকট্রনের ভর প্রোটনের তুলনায় কত?",
        options: ["1/1840 গুণ", "সমান", "দ্বিগুণ", "প্রায় শূন্য"],
        correct: 0
    },
    {
        question: "বোরের মডেলের কোনটি সত্য?",
        options: ["ইলেকট্রন স্থির", "ইলেকট্রন নির্দিষ্ট কক্ষপথে চলে", "প্রোটন ঋণাত্মক", "নিউট্রন ধনাত্মক"],
        correct: 1
    },
    {
        question: "কোন মৌল রেডিও-আইসোটোপ?",
        options: ["C-14", "O-16", "H-1", "N-14"],
        correct: 0
    },
    {
        question: "C-12, C-14 এর মধ্যে পার্থক্য কী?",
        options: ["ইলেকট্রন সংখ্যা ভিন্ন", "নিউট্রন সংখ্যা ভিন্ন", "প্রোটন সংখ্যা ভিন্ন", "কেন্দ্রকের আকার ভিন্ন"],
        correct: 1
    },
    {
        question: "রাদারফোর্ডের পরীক্ষায় ব্যবহৃত বিকিরণ উৎস ছিল—",
        options: ["Ra-226", "C-14", "U-235", "Co-60"],
        correct: 0
    },
    {
        question: "কেন্দ্রক গঠিত হয়—",
        options: ["প্রোটন ও ইলেকট্রন", "প্রোটন ও নিউট্রন", "ইলেকট্রন ও নিউট্রন", "শুধু প্রোটন"],
        correct: 1
    },
    {
        question: "H-1, H-2, H-3 এর মধ্যে কোনটির ভর সবচেয়ে বেশি?",
        options: ["H-1", "H-2", "H-3", "সব সমান"],
        correct: 2
    },
    {
        question: "বোরের মতে ইলেকট্রন নিচের কোন অবস্থায় শক্তি বিকিরণ করে?",
        options: ["নিচু শক্তিস্তরে পতিত হলে", "উচ্চ শক্তিস্তরে উঠলে", "স্থির কক্ষপথে থাকলে", "নিউট্রনে রূপান্তরিত হলে"],
        correct: 0
    }
];
    // Exam variables
    let timeLeft = 900;
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
        timeLeft = 900;
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