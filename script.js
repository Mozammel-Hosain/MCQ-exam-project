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
        question: "জন নিউল্যান্ড কত সালে অষ্টক তত্ত্ব প্রদান করেন?",
        options: ["১৮৬৪", "১৭৮৯", "১৮৬৯", "১৭৬৪"],
        correct: 0
    },
    {
        question: "রসায়ন ও ফলিত রসায়নের বিভিন্ন বিষয় আন্তর্জাতিকভাবে স্বীকৃতিদাতা প্রতিষ্ঠান হলো-",
        options: ["IUPAC", "APEC", "IUPVAC", "ISO"],
        correct: 0
    },
    {
        question: "গ্রুপ 11 তে অবস্থিত মৌলগুলোকে কী বলা হয়?",
        options: ["ক্ষারধাতু", "মৃৎক্ষার ধাতু", "হ্যালোজেন", "মুদ্রা ধাতু"],
        correct: 3
    },
    {
        question: "পর্যায় সারণির চতুর্থ পর্যায়ে কয়টি মৌল আছে?",
        options: ["৮টি", "১৬টি", "১৮টি", "৩২টি"],
        correct: 2
    },
    {
        question: "কম সক্রিয় ধাতু কোনগুলো?",
        options: ["জিংক, তামা", "তামা, পারদ", "সোনা, রুপা", "সোনা, তামা"],
        correct: 2
    },
    {
        question: "পর্যায় সূত্র প্রদান করেন?",
        options: ["নিউল্যান্ড", "ম্যান্ডেলিফ", "লুার মেয়ার", "ডোবেরাইনার"],
        correct: 1
    },
    {
        question: "মোসলে কত সালে পারমাণবিক সংখ্যা আবিষ্কার করেন?",
        options: ["১৬১৩", "১৭১৩", "১৮১৩", "১৯১৩"],
        correct: 3
    },
    {
        question: "মৌলের রাসায়নিক ধর্ম মূলত কী দ্বারা নির্দেশিত হয়?",
        options: ["ইলেকট্রন বিন্যাস", "আন্তঃআণবিক শক্তি", "পারমাণবিক ভর", "সবগুলো"],
        correctr: 0
    },
    {
        question: "কোনো মৌলে ইলেকট্রনের বিন্যাস (২, ৮, ২) হলে এর অবস্থান কোন পর্যায়ে?",
        options: ["২য়", "৩য়", "৫ম", "৪র্থ"],
        correct: 3
    },
    {
        question: "সক্রিয় অধাতু কোনটি?",
        options: ["Si", "K", "N", "Cl"],
        correct: 3
    },
    {
        question: "নিচেরর কোন যৌগে অকটেট অসম্পূর্ণ?",
        options: ["NH3", "H2O", "CCl4", "BF3"],
        correct: 3
    },
    {
        question: "ব্রোমিন কী বর্ণের তরল পদার্থ?",
        options: ["নীল", "লাল", "বেগুনি", "গোলাপী"],
        correct: 1
    },
    {
        question: "অধাতু কোনটি?",
        options: ["সালফার", "কপার", "জিংক", "সিলিকন"],
        correct: 0
    },
    {
        question: "কোনটির আয়নিকরণ শক্তি বেশি?",
        options: ["K", "Ca", "Rb", "Mg"],
        correct: 3
    },
    {
        question: "নিচের কোন মৌলের পারমাণবিক আকার সবচেয়ে বেশি?",
        options: ["Li", "K", "Cs", "Na"],
        correct: 2
    },
    {
        question: "পরীক্ষাগারে তৈরি সম্ভব এরূপ মৌল কয়টি?",
        options: ["১৪", "১৬", "২০", "৩৩"],
        correctr: 1
    },
    {
        question: "মেন্ডেলিফের প্রাথমিক পর্যায় সারণির মূলভিত্তি কী ছিল?",
        options: ["পারমাণবিক সংখ্যা", "ইলেকট্রন বিন্যাস", "পারমাণবিক ভর", "কোনোটিই নয়"],
        correct: 2
    },
    {
        question: "কোনো মৌলের ইলেকট্রন বিন্যাস (২, ৮, ৮, ১) হলে মৌলটির অবস্থান?",
        options: ["৫ম পর্যায় ১ গ্রুপ", "৪র্থ পর্যায় ১ গ্রুপ", "৩য় পর্যায় ১ গ্রুপ", "৬ষ্ঠ পর্যায় ১ গ্রুপ"],
        correct: 1
    },
    {
        question: "পর্যায় সারণিতে ১৭ গ্রুপে মৌলের সংখ্যা কয়টি?",
        options: ["৭", "৫", "৪", "২"],
        correct: 1
    },
    {
        question: "আয়নীকরণ শক্তি বেশি হয়",
        options: ["হ্যালোজেনের", "মুদ্রাধাতুর", "অধাতুর", "মৃৎক্ষার ধাতুর"],
        correct: 0
    },
    {
        question: "একই পর্যায়ে যতই ডানে যাওয়া যায় ততই",
        options: ["যোজনী বাড়ে", "যোজনী কমে", "বহিঃস্তরের ঋণাত্মক চার্জ বাড়ে", "কোনোটিই নয়"],
        correctr: 0
    },
    {
        question: "বহুপদীর একটি উৎপাদক (x - 1) হবে যদি ও কেবল যদি বহুপদীর সহগসমূহের সমষ্টি নিচের কোনটি?",
        options: ["-1", "0", "1", "2"],
        correct: 1
    },
    {
        question: "a**2 - 3a + 7 কে a - 1 দ্বারা ভাগ করলে ভাগশেষ নিচের কোনটি হবে?",
        options: ["1", "5", "8", "11"],
        correct: 1
    },
    {
        question: "P(x) + 5x**3 + 6x**2 - 1x + 6 কে x - 2 দ্বারা ভাগ করলে ভাগশেষ 8 হয়, তবে a এর মান নিচের কোনটি?",
        options: ["4", "31", "32", "39"],
        correct: 2
    },
    {
        question: "কোন বহুপদীতে উল্লিখিত পদসমুহের গরিষ্ঠ মাত্রাকে বহুপদীটির কি বলা হয়?",
        options: ["মাত্রা", "মুখ্যপদ", "মুখ্যসহগ", "ধ্রুবপদ"],
        correct: 0
    },
    {
        question: "দ্বিচলক বহুপদী 8x3 + y3 - 2xy এর মাত্রা কত?",
        options: ["8", "3", "2", "1"],
        correctr: 1
    },
    {
        question: "এক চলকের বহুপদী 5x2 - 3x - 2 = px2 + qx + r এ সহগগুলোর তুলনা করলে r এর মান কত?",
        options: ["-2", "-1", "2", "5"],
        correct: 0
    },
    {
        question: "P(x) = x2 - 5x + 4 হলে- i. p(4) = 0 ii. (x - 4), P(x) এর একটি উৎপাদক iii. (x-4) দ্বারা ভাগ করলে ভাগশেষ 2",
        options: ["i ও ii", "iii", "ii", "i"],
        correct: 0
    },
    {
        question: "যদি P(x) + 3x3 - 4x2 + 4x - 3 হয়, তবে P(x) কে (x - 4) দ্বারা ভাগ করলে ভাগশেষ নিচের কোনটি?",
        options: ["P(1)", "P(2)", "P(3)", "P(4)"],
        correct: 3
    },
    {
        question: "(a - b)3 + (b - c)3 + (c - a)3 কে উৎপাদকে বিশ্লেষণ করলে নিচের কোনটি পাওয়া যাবে?",
        options: ["1", "2", "3(a - b)(b - c)(c - a)", "-3(a - b)(b - c)(c - a)"],
        correct: 3
    },
    {
        question: "P(x) = 3x3 - 2x2 - 7x + 8 হলে, P(-2) এর মান কত?",
        options: ["-22", "-10", "2", "10"],
        correct: 1
    },
    {
        question: "দুইটি বহুপদীর - সবসময় বহুপদী হয়?",
        options: ["যোগফল", "বিয়োগফল", "গুণফল", "উপরের সবগুলো"],
        correct: 3
    },
    {
        question: "চলক বর্জিত পদকে কী বলা হয়?",
        options: ["মুখ্য সহগ", "সহগ", "ধ্রুবপদ", "উৎপাদক"],
        correct: 2
    },
   
    {
        question: "P(x) = 2x2 + 3 হলে, P(1/2) এর মান নির্ণয় কর।",
        options: ["7/2", "8/3", "11", "12"],
        correct: 0
    },
    {
        question: "P(x) = x2 - x - 6 হলে- i. (x + 1) রাশিটির একটি উৎপাদক। ii. x = -2 এর জন্যে রাশিটির মান শূন্য। iii. একে (x-4) দ্বারা ভাগ করলে ভাগশেষ 6",
        options: ["i ও ii", "i", "ii ও iii", "iii"],
        correct: 2
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