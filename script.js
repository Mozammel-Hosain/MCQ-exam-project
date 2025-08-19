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
    question: " ১০ m ব্যাসবিশিষ্ট বৃত্তাকার পথে পরিধির এক-চতুর্থাংশ অতিক্রম করলে সরণ কত হবে?",
    options: ["৭·৮৫৪ m", "৭·০৭১ m", "৫ m", "২·৫ m"],
    correct: 0
  },
  {
    question: " ৫০ m উঁচু দালানের ছাদ থেকে কোনো বস্তু ছেড়ে দিলে এটি কত বেগে ভূমি-পৃষ্ঠকে আঘাত করবে?",
    options: ["২১·১ ms⁻¹", "২৩·৩ ms⁻¹", "৩০·৩ ms⁻¹", "৩১·৩ ms⁻¹"],
    correct: 3
  },
  {
    question: " পর্যাবৃত্ত গতি হচ্ছে— i. সরলদোলকের গতি ii. পেট্রোল ইঞ্জিনের সিলিন্ডারের গতি iii. কম্পনমান সুরশলাকার গতি",
    options: ["i ও ii", "i ও iii", "ii ও iii", "i, ii ও iii"],
    correct: 3
  },
  {
    question: " সময়ের পরিবর্তনের সাথে পারিপার্শ্বিকের সাপেক্ষে বস্তুর অবস্থান অপরিবর্তিত থাকাকে কী বলে?",
    options: ["স্থিতি", "গতি", "বেগ", "ত্বরণ"],
    correct: 0
  },
  {
    question: " কোনো বস্তু স্থির না গতিশীল তা কিসের ওপর নির্ভর করে?",
    options: ["দর্শকের ওপর", "স্থির বস্তুর ওপর", "গতিশীল বস্তুর ওপর", "প্রসঙ্গ কাঠামোর (frame of reference) ওপর"],
    correct: 3
  },
  {
    question: " এ মহাবিশ্বের সকল— i. গতিই পরম ii. গতিই আপেক্ষিক iii. স্থিতিই আপেক্ষিক; নিচের কোনটি সঠিক?",
    options: ["i ও ii", "ii ও iii", "i ও iii", "i, ii ও iii"],
    correct: 1
  },
  {
    question: " মিতা বাসস্ট্যান্ডে অপেক্ষা করছে, রিতা রিকশায় অতিক্রম করছে— মিতার অবস্থান কোনটি?",
    options: ["স্থিতি", "গতি", "পরম স্থিতি", "পরম গতি"],
    correct: 0
  },
  {
    question: " সূর্যের চারদিকে পৃথিবীর গতি কোন ধরনের গতি?",
    options: ["ঘূর্ণন গতি", "পর্যাবৃত্ত গতি", "রৈখিক গতি", "স্পন্দন গতি"],
    correct: 1
  },
  {
    question: " কোন ধরনের গতি বৃত্তাকার, উপবৃত্তাকার বা সরলরৈখিক হতে পারে?",
    options: ["ঘূর্ণন গতি", "পর্যাবৃত্ত গতি", "চলন গতি", "রৈখিক গতি"],
    correct: 1
  },
  {
    question: " দুইটি ভেক্টর রাশি ২ cm এবং ৩ cm — এদের যোগফলের সর্বনিম্ন মান কত?",
    options: ["১ cm", "৬·২ cm", "৭ cm", "৭·৫ cm"],
    correct: 0
  },
  {
    question: " নিচের কোনটি অদিক (স্কেলার) রাশি?",
    options: ["দূরত্ব", "ওজন", "ভরবেগ", "চৌম্বক তীব্রতা"],
    correct: 0
  },
  {
    question: " উল্লিখিত অনুচ্ছেদের উদাহরণগুলোর মধ্যে কয়টি স্কেলার রাশি?",
    options: ["৪টি", "৫টি", "৬টি", "৭টি"],
    correct: 3
  },
  {
    question: " কোনটি ত্বরণের মাত্রা (dimension)?",
    options: ["LT⁻²", "MLT⁻¹", "LT⁻¹", "MLT⁻²"],
    correct: 0
  },
  {
    question: " একটি গাড়ির গড় দ্রুতি ৩৫ km/h হলে ৪৫ মিনিটে গাড়িটি কত দূর যাবে?",
    options: ["০·৭৮ km", "১২৯ km", "২৬·২৫ km", "১৫৭৫ km"],
    correct: 2
  },
  {
    question: " একটি গাড়ির বেগ ২০ ms⁻¹ থেকে সুষমভাবে হ্রাস পেয়ে ২ s পরে ১০ ms⁻¹ হয়— ত্বরণ কত?",
    options: ["৫ ms⁻²", "−৫ ms⁻²", "১০ ms⁻²", "১৫ ms⁻²"],
    correct: 1
  },
  {
    question: " ১০ ms⁻¹ সমবেগে চলমান ১ kg বস্তুর ত্বরণ কত?",
    options: ["০ ms⁻²", "৯·৮ ms⁻²", "১০ ms⁻²", "১৫ ms⁻²"],
    correct: 0
  },
  {
    question: " একটি গাড়ির বেগ ৩৬ ms⁻¹ থেকে সুষমভাবে হ্রাস পেয়ে ৯ s-এ ১৮ ms⁻¹— ত্বরণ কত?",
    options: ["−১ ms⁻²", "−২ ms⁻²", "−৩ ms⁻²", "−৪ ms⁻²"],
    correct: 1
  },
  {
    question: " একটি ট্রেন ৪০ ms⁻¹ বেগে চলছে; ব্রেক কষে ৩০ s-এ থামানো হলো— মন্দন (deceleration) কত?",
    options: ["৩৪ ms⁻²", "৪৩ ms⁻²", "২৪ ms⁻²", "২৩ ms⁻²"],
    correct: 1
  },
  {
    question: " একটি বস্তুর বেগ ৭ s-এ ৩ ms⁻¹ থেকে ৩১ ms⁻¹ এ উন্নীত হয়— ত্বরণ কত?",
    options: ["৪ s", "২১ ms⁻²", "৪ ms⁻²", "৪ ms⁻¹"],
    correct: 2
  },
  {
    question: " একটি নিক্ষিপ্ত বস্তুর সর্বোচ্চ উচ্চতায় বেগ কত হবে?",
    options: ["শূন্য", "অর্ধেক", "দ্বিগুণ", "চারগুণ"],
    correct: 0
  },
   {
    question: "tan(π - θ) এর মান নিচের কোনটি?",
    options: ["-cot θ", "cot θ", "-tan θ", "tan θ"],
    correct: 2
  },
  {
    question: "10° = কত রেডিয়ান?",
    options: ["0.01475", "0.01574", "0.01745", "0.017541"],
    correct: 2
  },
  
  {
    question: "8.30 টায় ঘড়ির কাঁটা ও মিনিটের কাঁটার অন্তর্গত কোণ কত রেডিয়ান?",
    options: ["5π/72", "5π/36", "5π/18", "5π/12"],
    correct: 3
  },
  {
    question: "(-470°) কোণটি কোন চতুর্ভাগে রয়েছে?",
    options: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"],
    correct: 2
  },
  {
    question: "sin120° এর মান কত?",
    options: ["√3/2", "1/2", "-√3/2", "-1/2"],
    correct: 0
  },
  {
    question: "সকাল ৯ টায় ঘড়ির ঘন্টার কাটা ও মিনিটের কাটার মাঝে অন্তর্গত কোণ কত?",
    options: ["π/2", "π/3", "2π/3", "π/6"],
    correct: 0
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
    question: "যদি sinx + cosx = √2x হয়, তবে x এর মান কত?",
    options: ["0", "1", "-1", "π/4"],
    correct: 3
  },
  {
    question: "x এর যে কোন মানের জন্য –\n i) -1 <= cosx <= 1\n ii) |tanx| >= 1\n iii) |sinx| <= 1\n কোন সঠিক?",
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