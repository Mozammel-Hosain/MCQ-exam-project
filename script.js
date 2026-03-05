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
        { question: "কোন আইসোটোপটি চিকিৎসা ও খাদ্য সংরক্ষণ উভয় ক্ষেত্রে ব্যবহার হয়?", 
        options: ["P-32", "Co-60", "Sm-153", "I-131"], 
        correct: 1 
        },

        { question: "কার্বন ডাই-অক্সাইডের আপেক্ষিক আণবিক ভর কত?", 
        options: ["42", "44", "46", "48"], 
        correct: 1 
        },

        { question: "ডিউটেরিয়াম ও ট্রিটিয়াম কার আইসোটোপ?", 
        options: ["হাইড্রোজেন", "হিলিয়াম", "অক্সিজেন", "কার্বন"], 
        correct: 0 
        },

        { question: "ভরসংখ্যার ভিন্নতার কারণে কোনটি সৃষ্টি হয়?", 
        options: ["আইসোটোপ", "আইসোবার", "আইসোটোন", "আইন"], 
        correct: 0 
        },

        { question: "ক্যালসিয়ামের ইলেকট্রন বিন্যাস কোনটি?", 
        options: ["2,8,8,2", "2,8,8,1", "2,8,7,2", "2,8,18,2"], 
        correct: 0 
        },

        { question: "কোন মৌলে নিউট্রন নাই?", 
        options: ["হাইড্রোজেন (প্রোটিয়াম)", "ডিউটেরিয়াম", "ট্রিটিয়াম", "হিলিয়াম"], 
        correct: 0 
        },

        { question: "Al³⁺ এর ইলেকট্রন বিন্যাস কোনটি?", 
        options: ["2,8", "2,8,3", "2,8,8", "2,8,1"], 
        correct: 0 
        },

        { question: "অরবিটালের কোন ক্রমটি সঠিক?", 
        options: ["4p < 5s", "6s > 4f", "4s > 3d", "7s > 5f"], 
        correct: 0 
        },

        { question: "প্রতিটি প্রধান শক্তিস্তরে ইলেকট্রন সংখ্যার সূত্র কোনটি?", 
        options: ["2n²", "n²", "2n", "n³"], 
        correct: 0 
        },

        { question: "পরমাণুতে শক্তিস্তর সম্পর্কে ধারণা দেন কে?", 
        options: ["রাদারফোর্ড", "নিলস বোর", "ডাল্টন", "থমসন"], 
        correct: 1 
        },

        { question: "কোন মৌলের একটি পরমাণুর ভর 1.328 × 10⁻²³ g হলে এর আপেক্ষিক পারমাণবিক ভর কত?", 
        options: ["7", "8", "18", "9"], 
        correct: 1 
        },

        { question: "কোন বিজ্ঞানী পরমাণুর কেন্দ্রের নামকরণ করেন?", 
        options: ["রাদারফোর্ড", "ডাল্টন", "বোর", "থমসন"], 
        correct: 0 
        },

        { question: "³⁹₁₉K⁺ আয়নে আধান নিরপেক্ষ কণিকার সংখ্যা কত?", 
        options: ["18", "19", "20", "21"], 
        correct: 2 
        },

        { question: "ইলেকট্রনের আপেক্ষিক আধান কত?", 
        options: ["+1", "-1", "0", "+2"], 
        correct: 1 
        },

        { question: "পারমাণবিক সংখ্যা প্রকাশ করে কোনটি?", 
        options: ["Z", "N", "A", "M"], 
        correct: 0 
        },

        { question: "কয়টি পরমাণু মিলে অক্সিজেন অণু গঠিত?", 
        options: ["3", "2", "1", "4"], 
        correct: 1 
        },

        { question: "টাংস্টেনের প্রতীক কোনটি?", 
        options: ["St", "Sn", "Sb", "W"], 
        correct: 3 
        },

        { question: "কোনটি মৌলিক পদার্থ?", 
        options: ["বায়ু", "চুন", "সোনা", "ব্রোঞ্জ"], 
        correct: 2 
        },

        { question: "কোনটি ফসিলের বয়স নির্ধারণে ব্যবহার হয়?", 
        options: ["C-12", "C-13", "C-14", "C-17"], 
        correct: 2 
        },

        { question: "উদ্ভিদ কিভাবে বেড়ে ওঠে তা জানতে কোনটি ব্যবহার হয়?", 
        options: ["P-32", "Co-60", "Sm-153", "I-131"], 
        correct: 0 
        }
    ]
    
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