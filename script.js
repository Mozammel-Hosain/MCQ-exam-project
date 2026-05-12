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
        const answer = document.querySelector('.answer')

    const questions = [
        {    question: "স্রোত না থাকলে এক ব্যক্তি 100 m চওড়া নদী সাঁতার দিয়ে 4 মিনিটে পার হয় এবং স্রোত থাকলে এক মিনিট সময় বেশী লাগে। স্রোতের বেগ কত?",    options: ["12 m/min", "5 m/min", "18 m/min", "20 m/min"],    correct: 0},{    question: "একজন বৈমানিক 1900 m উপর দিয়ে 126 km/h বেগে উড়ে যাবার সময় একটি বোমা ফেলে দিল। বোমাটি যে বস্তুতে আঘাত করতে চায় তার আনুভূমিক দূরত্ব কত?",    options: ["1200 m", "1650 m", "1106.8 m", "550.50 m"],    correct: 1},{    question: "একটি কণা 1.0 m ব্যাসার্ধের বৃত্তাকার পথে প্রতি মিনিটে 120 বার আবর্তন করে। রৈখিক বেগ কত?",    options: ["15.12 m/s", "10.20 m/s", "16.25 m/s", "12.56 m/s"],    correct: 2},{    question: "আপাত কোণ সংকট কোণের সমান হলে প্রতিসরণ কোণ কত?",    options: ["1°", "90°", "45°", "180°"],    correct: 0},{    question: "প্রক্ষেপের গতিপথ কোনটি?",    options: ["প্যারাবোলা", "হাইপারবোলা", "উপবৃত্তাকার", "বৃত্তাকার"],    correct: 0},{    question: "প্রক্ষেপের গতিপথের যে কোনো বিন্দুতে ত্বরণের অনুভূমিক উপাংশ কত?",    options: ["0", "g", "g/2", "-g"],    correct: 0},{    question: "ভূপৃষ্ঠের উপর সকল প্রক্ষিপ্ত বস্তুর প্রকৃত গতিপথ কেমন?",    options: ["প্যারাবোলা", "পরাবৃত্তাকার", "অধিবৃত্তাকার", "বৃত্তাকার"],    correct: 1},{    question: "মুক্তভাবে পড়ন্ত বস্তুর গতি কিরূপ?",    options: [        "এক মাত্রিক সুষম গতি",        "দুই মাত্রিক সুষম গতি",        "এক মাত্রিক অসম গতি",        "দুই মাত্রিক অসম গতি"    ],    correct: 0},{    question: "2i – 3k এবং i + j + k ভেক্টর দুটির মধ্যবর্তী কোণ কত?",    options: [        "sin⁻¹(1/√39)",        "cos⁻¹(1/√12)",        "cos⁻¹(1/√39)",        "sin⁻¹(1/√13)"    ],    correct: 0},{    question: "একটি জলাশয়ের আপাত গভীরতা 4.5 m হলে প্রকৃত গভীরতা কত?",    options: ["4.5 m", "3 m", "6 m", "8 m"],    correct: 2}
 
    ]
    
    let timeLeft = 600;
    let currentQuestion = 0;
    let userAnswers = []
    let timerInterval = null;
    let examStartTime = null;
    let correctAnswers = 0;
    let isReviewMode = false;

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
                if(isReviewMode){
                    answerSheet()
                }else{
                    loadQuestion()
                }
               

                
            
                
            }
            
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;

                if(isReviewMode){
                    answerSheet()
                }else{
                    loadQuestion()
                }
               
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
        window.answerSheet = answerSheet;
        window.startAnswerReview = startAnswerReview;
        window.home = home

        // Start exam event listener
        startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            examStartTime = Date.now(); // Set start time
            loadQuestion();
            startTimer();
        });

        function answerSheet(){
            results.classList.remove('show')
            

            const currentQ = questions[currentQuestion]
            

            const insert = `
                <div class="question active">
                    <div class="question-header">
                        <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
                    </div>
                    <div class="question-text">${currentQ.question}</div>
                       <div class="options">
                       ${currentQ.options.map((option, index) => `
                        <div class="option">
                            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                            <span>${option}</span>
                        </div>
                        `).join('')}

                        </div>
                    <div class="navigation">
                        <button class="btn btn-secondary" onclick="previousQuestion()" 
                             ${currentQuestion === 0 ? 'disabled' : ''}   >
                            ← Previous
                        </button>
                         ${currentQuestion + 1 < questions.length ?'<button class="btn btn-primary" onclick="nextQuestion()">Next →</button>' :
                            '<button class="btn btn-primary" onclick="home()">Home</button>'
                         }  
                        
                        
                    </div>
                </div>
                
            `
            answer.innerHTML = insert;

            const options = answer.querySelectorAll('.option')

            

            const userIndex = userAnswers[currentQuestion];
            const correctIndex = currentQ.correct;

            if(userIndex !== undefined && userIndex !== correctIndex){
                options[userIndex]?.classList.add('incorrect')
            }
            options[correctIndex]?.classList.add('correct')

            progress.style.background = '';
            updateProgress()
            

            
        }

        function startAnswerReview(){
            isReviewMode = true;
            currentQuestion = 0;
            answerSheet()
            
        }

        function home(){

           answer.innerHTML = 'All task completed'
            
            
             
        }
});