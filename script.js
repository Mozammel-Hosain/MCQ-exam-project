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
    question: "লাইসোজোম এর এনজাইম জীবাণুকে কী করে?",
    options: ["মেরে ফেলে", "ধ্বংস করে", "হজম করে", "বিগলিত করে"],
    correct: 2
  },
  {
    question: "নিউক্লিয়ার ঝিল্লিস্থ ছিদ্রকে কী বলে?",
    options: ["নিউক্লিয়ার রন্ধ্র", "কোষীয় রন্ধ্র", "পত্ররন্ধ্র", "নিউক্লিয়ার ছিদ্র"],
    correct: 0
  },
  {
    question: "নিউক্লিওলাস কী দ্বারা গঠিত?",
    options: ["DNA ও RNA", "RNA ও প্রোটিন", "DNA ও লিপিড", "RNA ও লিপিড"],
    correct: 1
  },
  {
    question: "পাতার ক্লোরোফিল যুক্ত প্যারেনকাইমা টিস্যুকে কি বলে?",
    options: ["মেসোফিল", "অ্যারেনকাইমা", "ক্লোরেনকাইমা", "কোলেনকাইমাকোন"],
    correct: 0
  },
  {
    question: "প্রাথমিক অবস্থায় প্রাথমিক জাইলেমকে কী বলে?",
    options: ["মেটাজাইলেম", "প্রোটোজাইলেম", "গৌণ জাইলেম", "প্রাথমিক জাইলেম"],
    correct: 1
  },
  {
    question: "উদ্ভিদ অঙ্গকে দৃঢ়তা প্রদান করা প্রধান কাজ কোনটির?",
    options: ["ভেসেল", "জাইলেম প্যারেনকাইমা", "সিভকোষ", "সঙ্গীকোষ"],
    correct: 0
  },
  {
    question: "পাতলা প্রাচীর যুক্ত প্যারেনকাইমা কোনটিতে পাওয়া যায়?",
    options: ["প্রাইমারি জাইলেম", "সেকেন্ডারি জাইলেম", "ট্রাকিড", "ভেসেল"],
    correct: 0
  },
  {
    question: "জাইলেম ও ফ্লোয়েম একত্রে কোন টিস্যুতন্ত্র গঠন করে?",
    options: ["ভিত্তি টিস্যুতন্ত্র", "ত্বকীয় টিস্যুতন্ত্র", "পরিবহন টিস্যুতন্ত্র", "কোনোটিই নয়"],
    correct: 2
  },
  {
    question: "সিভকোষ কোন ধরনের কোষ দ্বারা গঠিত?",
    options: ["প্যারেনকাইমা", "কোলেনকাইমা", "স্কেরেনকাইমা", "ক্লোরেনকাইমা"],
    correct: 2
  },
  {
    question: "মেরুদণ্ডী প্রাণীদের ত্বকে কোন ধরনের এপিথেলিয়াল টিস্যু বিদ্যমান?",
    options: ["কিউবয়ডাল", "কলামনার", "স্ট্র্যাটিফাইড", "স্কোয়ামাস"],
    correct: 3
  },
  {
    question: "জনন টিস্যু কোন টিস্যু থেকে রূপান্তরের মাধ্যমে উৎপন্ন হয়?",
    options: ["আবরণী টিস্যু", "পেশি টিস্যু", "যোজক টিস্যু", "কঙ্কাল টিস্যু"],
    correct: 2
  },
  {
    question: "কোনটি মাতৃকার ক্যালসিয়াম জাতীয় পদার্থ জমা হয়ে দৃঢ়তা প্রদান করে?",
    options: ["অস্থি", "কোমলাস্থি", "তরুণাস্থি", "কার্টিলেজ"],
    correct: 0
  },
  {
    question: "রক্তকণিকা কয় ধরনের?",
    options: ["২ ধরনের", "৩ ধরনের", "৪ ধরনের", "৫ ধরনের"],
    correct: 1
  },
  {
    question: "মসৃণ পেশি বলা হয় কোনটিকে?",
    options: ["ঐচ্ছিক পেশি", "অনৈচ্ছিক পেশি", "হৃদপেশি", "কোনোটিই নয়"],
    correct: 1
  },
  {
    question: "পৌষ্টিকনালীর অংশ হলো- i. গলবিল ii. শ্বাসনালি iii. ইলিয়াম",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 1
  },
  {
    question: "অ্যামিবা একটি প্রাণিকোষ কারণ এর i. কেন্দ্রিকার গঠন সুসম্পূর্ণ ii. বর্ণ গঠনকারী অঙ্গ আছে iii. কোষ ঝিল্লী দেখা যায়",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 1
  },
  {
    question: "কোলেনকাইমা কোষে i. কোষপ্রান্ত গোলাকার ii. আন্তঃকোষীয় ফাঁক থাকতে পারে iii. পত্রবৃন্তে দেখা যায়",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 2
  },
  {
    question: "অভ্যন্তরীণ অঙ্গের অন্তর্ভুক্ত i. নাসিকা ii. বৃক্ক iii. ডিম্বাশয়",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 2
  },
  {
    question: "কোনটিকে কোষের পাওয়ার হাউস বলা হয়?",
    options: ["মাইটোকন্ড্রিয়া", "নিউক্লিয়াস", "গলজিবস্তু", "রাইবোসোম"],
    correct: 0
  },
  {
    question: "সেন্ট্রিওল থাকে নিচের কোনটিতে?",
    options: ["সেন্ট্রোজোম", "সেন্ট্রোমিয়ার", "মাইটোকন্ড্রিয়া", "প্লাস্টিড"],
    correct: 0
  },
  {
    question: "tan (π - θ) এর মান নিচের কোনটি?",
    options: ["-cot θ", "cot θ", "-tan θ", "tan θ"],
    correct: 2
  },
  {
    question: "1° = কত রেডিয়ান?",
    options: ["π/360", "π/180", "π/90", "π/60"],
    correct: 1
  },
  {
    question: "a < 0 এবং b < 0 হলে, বিন্দুটি কোন চতুর্ভাগে পড়বে?",
    options: ["১ম", "২য়", "৩য়", "৪র্থ"],
    correct: 2
  },
  {
    question: "8.30 টায় ঘড়ির কাঁটা ও মিনিটের কাঁটার অন্তর্গত কোণ কত রেডিয়ান?",
    options: ["5π/72", "5π/36", "5π/18", "5π/12"],
    correct: 3
  },
  
  {
    question: "sin 120° এর মান কত?",
    options: ["√3/2", "1/2", "-√3/2", "√2/2"],
    correct: 0
  },
  {
    question: "সকাল ৯ টায় ঘড়ির ঘন্টার কাটা ও মিনিটের কাটার মাঝে অন্তর্গত কোণ কত?",
    options: ["90°", "120°", "150°", "180°"],
    correct: 2
  },
  {
    question: "tan(-1140°) এর মান কত?",
    options: ["0", "√3", "-√3", "1"],
    correct: 2
  },
  {
    question: "sec(2π – π/4) এর মান কত?",
    options: ["√2", "-√2", "2", "-2"],
    correct: 0
  },
  {
    question: "sinx + cosx = √2 হলে, x এর মান কত?",
    options: ["45°", "60°", "90°", "30°"],
    correct: 0
  },
  {
    question: "x এর যে কোন মানের জন্য – i) -1 <= cosx <= 1 ii) |tanx| >= 1 iii) |sinx| <= 1",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
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