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
           { question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য 12 সেমি এবং প্রস্থ 8 সেমি হলে এর ক্ষেত্রফল কত?", options: ["80 বর্গসেমি", "96 বর্গসেমি", "100 বর্গসেমি", "120 বর্গসেমি"], correct: 1 },
  { question: "একটি বৃত্তের ব্যাসার্ধ 7 সেমি হলে পরিধি কত? (π = 22/7)", options: ["22 সেমি", "44 সেমি", "154 সেমি", "77 সেমি"], correct: 1 },
  { question: "একটি বর্গক্ষেত্রের বাহু 15 সেমি হলে এর ক্ষেত্রফল কত?", options: ["150 বর্গসেমি", "200 বর্গসেমি", "225 বর্গসেমি", "250 বর্গসেমি"], correct: 2 },
  { question: "একটি ত্রিভুজের ভূমি 12 সেমি এবং উচ্চতা 9 সেমি হলে এর ক্ষেত্রফল কত?", options: ["42 বর্গসেমি", "54 বর্গসেমি", "72 বর্গসেমি", "108 বর্গসেমি"], correct: 2 },
  { question: "একটি সমান্তর চতুর্ভুজের ভূমি 20 সেমি এবং উচ্চতা 8 সেমি হলে ক্ষেত্রফল কত?", options: ["120 বর্গসেমি", "140 বর্গসেমি", "160 বর্গসেমি", "180 বর্গসেমি"], correct: 2 },
  { question: "একটি বৃত্তের ব্যাসার্ধ দ্বিগুণ করলে ক্ষেত্রফল কতগুণ হবে?", options: ["2", "3", "4", "8"], correct: 2 },
  { question: "একটি সিলিন্ডারের ব্যাসার্ধ 7 সেমি এবং উচ্চতা 10 সেমি হলে এর আয়তন কত? (π = 22/7)", options: ["1540 ঘনসেমি", "1100 ঘনসেমি", "1000 ঘনসেমি", "770 ঘনসেমি"], correct: 0 },
  { question: "একটি গোলকের ব্যাসার্ধ 7 সেমি হলে এর আয়তন কত? (π = 22/7)", options: ["1436 ঘনসেমি", "1546 ঘনসেমি", "1796 ঘনসেমি", "1072 ঘনসেমি"], correct: 0 },
  { question: "একটি আয়তাকার ঘনকের দৈর্ঘ্য 8 সেমি, প্রস্থ 6 সেমি ও উচ্চতা 4 সেমি হলে এর আয়তন কত?", options: ["192 ঘনসেমি", "160 ঘনসেমি", "180 ঘনসেমি", "200 ঘনসেমি"], correct: 0 },
  { question: "একটি বর্গক্ষেত্রের ক্ষেত্রফল 144 বর্গসেমি হলে বাহুর দৈর্ঘ্য কত?", options: ["10 সেমি", "11 সেমি", "12 সেমি", "13 সেমি"], correct: 2 },
  { question: "একটি ত্রিভুজের বাহুগুলি 6 সেমি, 8 সেমি ও 10 সেমি হলে এর ক্ষেত্রফল কত?", options: ["20 বর্গসেমি", "24 বর্গসেমি", "30 বর্গসেমি", "36 বর্গসেমি"], correct: 1 },
  { question: "একটি আয়তক্ষেত্রের পরিধি 40 সেমি এবং দৈর্ঘ্য 12 সেমি হলে প্রস্থ কত?", options: ["6 সেমি", "8 সেমি", "10 সেমি", "12 সেমি"], correct: 1 },
  { question: "একটি সমবাহু ত্রিভুজের বাহু 10 সেমি হলে এর ক্ষেত্রফল কত?", options: ["20√3 বর্গসেমি", "25√3 বর্গসেমি", "30√3 বর্গসেমি", "50√3 বর্গসেমি"], correct: 1 },
  { question: "একটি অর্ধবৃত্তের ব্যাস 14 সেমি হলে এর ক্ষেত্রফল কত? (π = 22/7)", options: ["49 বর্গসেমি", "77 বর্গসেমি", "88 বর্গসেমি", "154 বর্গসেমি"], correct: 2 },
  { question: "একটি আয়তাকার ঘনকের দৈর্ঘ্য 10 সেমি, প্রস্থ 8 সেমি ও উচ্চতা 5 সেমি হলে এর পৃষ্ঠতল ক্ষেত্রফল কত?", options: ["340 বর্গসেমি", "360 বর্গসেমি", "380 বর্গসেমি", "400 বর্গসেমি"], correct: 1 },
  { question: "একটি গোলকের ব্যাসার্ধ 14 সেমি হলে এর পৃষ্ঠতল ক্ষেত্রফল কত? (π = 22/7)", options: ["154 বর্গসেমি", "616 বর্গসেমি", "2464 বর্গসেমি", "1256 বর্গসেমি"], correct: 2 },
  { question: "একটি বৃত্তের ক্ষেত্রফল 154 বর্গসেমি হলে ব্যাসার্ধ কত? (π = 22/7)", options: ["5 সেমি", "6 সেমি", "7 সেমি", "8 সেমি"], correct: 2 },
  { question: "একটি সিলিন্ডারের ব্যাসার্ধ 3 সেমি এবং উচ্চতা 7 সেমি হলে এর বাঁকা পৃষ্ঠতল ক্ষেত্রফল কত? (π = 22/7)", options: ["126 বর্গসেমি", "132 বর্গসেমি", "144 বর্গসেমি", "154 বর্গসেমি"], correct: 0 },
  { question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য প্রস্থের দ্বিগুণ এবং এর পরিধি 60 সেমি হলে দৈর্ঘ্য কত?", options: ["10 সেমি", "15 সেমি", "20 সেমি", "25 সেমি"], correct: 2 },
  { question: "একটি সমবাহু ত্রিভুজের উচ্চতা 6√3 সেমি হলে বাহুর দৈর্ঘ্য কত?", options: ["6 সেমি", "10 সেমি", "12 সেমি", "15 সেমি"], correct: 2 },
  { question: "একটি বৃত্তের ব্যাসার্ধ 14 সেমি হলে এর ক্ষেত্রফল কত? (π = 22/7)", options: ["308 বর্গসেমি", "616 বর্গসেমি", "154 বর্গসেমি", "462 বর্গসেমি"], correct: 1 },
  { question: "একটি ঘনক এর প্রান্তের দৈর্ঘ্য 5 সেমি হলে এর আয়তন কত?", options: ["25 ঘনসেমি", "75 ঘনসেমি", "100 ঘনসেমি", "125 ঘনসেমি"], correct: 3 },
  { question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য 18 সেমি ও প্রস্থ 12 সেমি হলে এর কর্ণ কত?", options: ["20 সেমি", "21 সেমি", "22 সেমি", "24 সেমি"], correct: 2 },
  { question: "14 মি বাহুবিশিষ্ট একটি বর্গক্ষেত্রের ক্ষেত্রফল কত?", options: ["100 বর্গ মি", "144 বর্গ মি", "196 বর্গ মি", "256 বর্গ মি"], correct: 2 },
  { question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য 12 সেমি ও প্রস্থ 8 সেমি হলে এর ক্ষেত্রফল কত?", options: ["80 বর্গ সেমি", "96 বর্গ সেমি", "100 বর্গ সেমি", "120 বর্গ সেমি"], correct: 1 }
];
    
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