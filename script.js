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
        
            { question: "চলন্ত ট্রেনে দুই বন্ধু মুখোমুখি বসে থাকলে একজনের সাপেক্ষে অন্যজনের অবস্থানকে কী বলে?",
            options: ["স্থিতি", "আপেক্ষিক স্থিতি", "গতি", "আপেক্ষিক গতি"],
            correct: 1
            },

            { question: "পৃথিবীর ভর ও ব্যাসার্ধ চাদের ভর ও ব্যাসার্ধের যথাক্রমে ৮১ গুণ ও ৪ গুণ হলে চাদের অভিকর্ষজ ত্বরণ কত?",
            options: ["1.81", "1.94", "3.94", "9.81"],
            correct: 1
            },

            { question: "কোনটি অসংরক্ষণশীল বল?",
            options: ["ঘর্ষণ বল", "তড়িৎ বল", "মহাকর্ষ বল", "চৌম্বক বল"],
            correct: 0
            },

            { question: "নিচের কোন রাশিগুলো ভেক্টর রাশি?",
            options: ["দ্রুতি, কাজ, বেগ", "তড়িৎ বিভব, সরণ, ত্বরণ", "দ্রুতি, সরণ, বেগ", "ভরবেগ, সরণ, ওজন"],
            correct: 3
            },

            { question: "100kg ভরের বস্তুর উপর 100N বল 25s প্রয়োগ করলে বেগ কত বৃদ্ধি পাবে?",
            options: ["4 m/s", "2 m/s", "8 m/s", "0 m/s"],
            correct: 0
            },

            { question: "ক্রিয়া ও প্রতিক্রিয়া বলের সম্পর্ক কোনটি?",
            options: ["F1 = F2", "-F1 = -F2", "F1 + F2 = 0", "F1 > F2"],
            correct: 2
            },

            { question: "2kg ভরের গাড়ির উপর 20N বল ও 10N ঘর্ষণ বল থাকলে ত্বরণ কত?",
            options: ["-5 m/s²", "5 m/s²", "-10 m/s²", "10 m/s²"],
            correct: 1
            },

            { question: "২০ m ব্যাসার্ধের বৃত্তের ৩/৪ অংশ অতিক্রম করলে সরণ কত?",
            options: ["15 m", "20 m", "25 m", "28.28 m"],
            correct: 3
            },

            { question: "নিরাপদ ভ্রমণে কোনটি গুরুত্বপূর্ণ?",
            options: ["গতি", "ঘর্ষণ", "ওজন", "ভর"],
            correct: 1
            },

            { question: "নিউটনের প্রথম সূত্র কোন শর্তে প্রযোজ্য?",
            options: ["ত্বরণ শূন্য", "বেগ শূন্য", "শেষবেগ শূন্য", "লব্ধিবেগ সর্বোচ্চ"],
            correct: 0
            },

            { question: "৮০kg ভরের লোক ২০cm উঁচু ৪০ সিড়ি উঠলে বিভব শক্তি কত?",
            options: ["6000", "6170", "6272", "6570"],
            correct: 2
            },

            { question: "উপরের লোকটির ক্ষমতা কত?",
            options: ["312 W", "313.6 W", "318.6 W", "320.6 W"],
            correct: 1
            },

            { question: "দূরত্ব কতগুণ কমালে মহাকর্ষ বল দ্বিগুণ হবে?",
            options: ["2", "4", "√2", "4.2"],
            correct: 2
            },

            { question: "g বেগে উপরে নিক্ষেপ করলে সর্বোচ্চ উচ্চতা কত?",
            options: ["1 m", "4.9 m", "9.8 m", "94.04 m"],
            correct: 1
            },

            { question: "কোনটি স্কেলার রাশি?",
            options: ["বেগ", "ত্বরণ", "বল", "দূরত্ব"],
            correct: 3
            },

            { question: "সমবেগে চলার উদাহরণ কোনটি?",
            options: ["দোলন", "চলন", "নিদ্রাবস্থা", "গ্যাস"],
            correct: 1
            },

            { question: "৩০s ও ৬০s এ একই উচ্চতায় উঠলে কাজের অনুপাত কত?",
            options: ["1:2", "2:1", "4:1", "1:4"],
            correct: 1
            },

            { question: "বেগ-সময়ের গ্রাফের ঢাল কী নির্দেশ করে?",
            options: ["সরণ", "ত্বরণ", "বেগ", "সময়"],
            correct: 1
            },

            { question: "নিউটনের দ্বিতীয় সূত্র কী নির্দেশ করে?",
            options: ["ভরবেগের পরিবর্তন", "বল", "ত্বরণ", "শক্তি"],
            correct: 0
            },

            { question: "সরণ ও দূরত্বের মধ্যে পার্থক্য কী?",
            options: ["সরণ ভেক্টর", "দূরত্ব ভেক্টর", "উভয়ই স্কেলার", "উভয়ই ভেক্টর"],
            correct: 0
            }
    ]
    
    let timeLeft = 600;
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